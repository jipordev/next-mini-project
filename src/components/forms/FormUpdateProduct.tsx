'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Image from 'next/image';
import { BASE_API_URL } from '../../../lib/constants';
import axios from 'axios';
import { ProductType } from '../types/ProductType';

const FILE_SIZE = 1024 * 1024 * 5; // mean can store 5MB only
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const validationSchema = Yup.object().shape({
  // Remove 'required' validation for fields that are not mandatory
  // Keep only the validation rules that should apply to each field
  // For example, 'price' and 'quantity' might still have validation rules
  price: Yup.number().positive("Price must be a positive number").required("Price is required"),
  quantity: Yup.number().positive("Quantity must be a positive number").required("Quantity is required"),
  // 'image' validation can be optional for updating
  image: Yup.mixed()
    .test("fileSize", "File too large", (value: any) => {
      if (!value) {
        return true;
      }
      return value.size <= FILE_SIZE;
    })
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    }),
});

const fieldStyle = "border border-gray-300 rounded-md";

const FormUpdateProduct: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const handleSubmitToServer = async (values: any) => {
    try {
      let url = `${BASE_API_URL}products/`;
      let method = 'POST';
      if (values.id) {
        url += `${values.id}/`;
        method = 'PUT';
      }
      const response = await axios({
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NTcxNTA0LCJpYXQiOjE3MTI0MTE1MDQsImp0aSI6ImI0NTk4ZDZhYWNiOTRkYjI5MDgzOWY4ZTc2YmRjMmQ4IiwidXNlcl9pZCI6MTd9.hiYI2VHSW4jPLhpbs-taPzRNq8y4PjGSczRJ1IzAVqQ',
          'Cookie': 'Zm03ZD9fbF8GbA673i7aRMtsUieICS7PVAlCvvtG0isnC4uHXmsjoEeejT7RG1Ab; sessionid=6c3q0xwc56m9r87el38wicfiqr3mj9u1',
        },
        data: values,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = (product: ProductType) => {
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  return (
    <div className="w-full pt-9">
        <Formik
          onSubmit={(values: any, { setSubmitting, resetForm }) => {
            // Filter out empty values to avoid sending them in the update request
            const updatedValues = Object.fromEntries(
              Object.entries(values).filter(([key, value]) => value !== undefined && value !== "")
            );
            handleSubmitToServer(updatedValues);
            setSubmitting(false);
            resetForm();
          }}
          validationSchema={validationSchema}
          initialValues={{
            // Populate initial values from the selectedProduct, if available
            price: selectedProduct?.price || 0,
            quantity: selectedProduct?.quantity || 0,
            // 'image' can remain undefined initially
            image: undefined,
          }}
        >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex m-[30px] flex-col gap-4">
            {/* name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Product Name: </label>
              <Field
                placeholder="T-shirt"
                className={fieldStyle}
                name="name"
                type="text"
              />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm italic" />
            </div>
            {/* description */}
            <div className="flex flex-col gap-2">
              <label htmlFor="desc">Description: </label>
              <Field
                placeholder="This is a t-shirt"
                className={fieldStyle}
                name="desc"
                type="text"
              />
              <ErrorMessage name="desc" component="div" className="text-red-600 text-sm italic" />
            </div>
            {/* price */}
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price: </label>
              <Field
                placeholder="100"
                className={fieldStyle}
                name="price"
                type="number"
              />
              <ErrorMessage name="price" component="div" className="text-red-600 text-sm italic" />
            </div>
            {/* quantity */}
            <div className="flex flex-col gap-2">
              <label htmlFor="quantity">Quantity: </label>
              <Field
                placeholder="1"
                className={fieldStyle}
                name="quantity"
                type="number"
              />
              <ErrorMessage name="quantity" component="div" className="text-red-600 text-sm italic" />

              {/* Image  */}
              <div>
                <Field
                  name="image"
                  className={fieldStyle}
                  type="file"
                  title="Select a file"
                  setFieldValue={setFieldValue} // Set Formik value
                  component={CustomInput} // component prop used to render the custom input
                />
                <ErrorMessage name="image" component="div" className="text-red-600 text-sm italic" />
              </div>
            </div>
            <div className='ml-auto'>
              <button
                type="submit"
                className="w-max px-4 py-3 bg-[#ff8b00] text-white rounded-lg"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormUpdateProduct;

// custom Input
function CustomInput({ field, form, setFieldValue, ...props }: any) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );
  const name = field.name;
  const onChange: any = (event: any) => {
    const file = event.currentTarget.files[0];
    setFieldValue(name, file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <input
        type="file"
        onChange={onChange}
        {...props}
        className={fieldStyle}
      />
      {previewImage && (
        <Image
          className="rounded-md"
          src={previewImage}
          alt="preview Image"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}
function setIsUpdateModalOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}

