'use client'
import { Label, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { Button } from "flowbite-react";

const UpdateProductForm = ({ product, onUpdate }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: product.name,
    image: product.image,
    desc: product.desc,
    price: product.price || "",
    quantity: product.quantity,
    category: {
      name: product.category.name,
      icon: product.category.icon,
    },
  });

  useEffect(() => {
    // Open the modal when the component mounts
    setOpenModal(true);
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Call onUpdate function with updated product data
    onUpdate(formData);
    onCloseModal();
  };

  const onCloseModal = () => {
    setOpenModal(false);
    // Reset form data
    setFormData({
      name: product.name,
      image: product.image,
      desc: product.desc,
      price: product.price || "",
      quantity: product.quantity,
      category: {
        name: product.category.name,
        icon: product.category.icon,
      },
    });
  };

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Update Product
            </h3>
            <div>
              <Label htmlFor="name" value="Product Name" />
              <TextInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="image" value="Image URL" />
              <TextInput
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="desc" value="Description" />
              <TextInput
                id="desc"
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="price" value="Price" />
              <TextInput
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="quantity" value="Quantity" />
              <TextInput
                id="quantity"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Add category input fields if needed */}
            <Button onClick={handleSubmit}>Update Product</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default UpdateProductForm;
