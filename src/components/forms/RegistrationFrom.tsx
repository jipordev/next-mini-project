import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password must match").required("Confirm password is required"),
    firstName: Yup.string()
    .min(3, "firstName is too short")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "lastName is too short")
    .required("Last name is required")

})

export default function RegistrationFrom() {
  return (
    <div>RegistrationFrom</div>
  )
}
