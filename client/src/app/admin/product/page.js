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
    await fetch("http://localhost:8000/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      stock: "",
      description: "",
      category: "",
      imageUrl: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      registerUser(values);
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
        {formik?.errors.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <Input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik?.errors.price && (
          <div className="error-message">{formik.errors.price}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <Input
          id="stock"
          name="stock"
          type="stock"
          onChange={formik.handleChange}
          value={formik.values.stock}
        />
        {formik?.errors.stock && (
          <div className="error-message">{formik.errors.stock}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <Input
          id="description"
          name="description"
          type="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik?.errors.description && (
          <div className="error-message">{formik.errors.description}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <Input
          id="category"
          name="category"
          type="category"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
        {formik?.errors.category && (
          <div className="error-message">{formik.errors.category}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">ImageUrl</label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="imageUrl"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        {formik?.errors.imageUrl && (
          <div className="error-message">{formik.errors.imageUrl}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
