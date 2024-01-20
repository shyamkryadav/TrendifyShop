"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";
const SignupForm = () => {
  const SignupSchema = Yup.object().shape({
    // email: Yup.string().email("Invalid email").required("Required"),
  });

  const registerUser = async (values) => {
    await fetch("http://localhost:8000/category/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      registerUser(values)
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="your-form">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik?.errors.name && <div className="error-message">{formik.errors.name}</div>}
    </div>

    <div className="form-group">
      <label htmlFor="description">Description</label>
      <Input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {formik?.errors.description && <div className="error-message">{formik.errors.description}</div>}
    </div>

    <button type="submit">Submit</button>
  </form>
  );
};
export default SignupForm;
