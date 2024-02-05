"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";
import "./page";

const SignupForm = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const registerUser = async (values) => {
    await fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  };
  const formik = useFormik({
    initialValues: {
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
    <div className="centered-form mt-3">
      <form onSubmit={formik.handleSubmit} className="your-form">
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
          {formik?.errors.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default SignupForm;
