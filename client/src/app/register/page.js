"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";
const SignupForm = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const registerUser = async (values) => {
    await fetch("http://localhost:8000/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
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
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik?.errors.email && <div className="error-message">{formik.errors.email}</div>}
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik?.errors.password && <div className="error-message">{formik.errors.password}</div>}
    </div>
    <button type="submit">Submit</button>
  </form>
  );
};
export default SignupForm;
