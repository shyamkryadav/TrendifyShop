"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea } from "@nextui-org/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProductForm = () => {
  const router = useRouter();
  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    stock: Yup.number()
      .required("Stock is required")
      .integer("Stock must be a whole number"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    imageUrl: Yup.string()
      .url("Must be a valid URL")
      .required("Image URL is required"),
  });

  const registerProduct = async (values) => {
    try {
      const res = await fetch("http://localhost:8000/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.status === 200) {
        router.push("/admin/products");
        toast.success("Product created successfully!");
      } else {
        toast.error(data.msg || "Failed to create product");
      }
    } catch (error) {
      toast.error("Error creating product");
    }
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
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      registerProduct(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto p-4 space-y-4"
    >
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik?.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <Input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik?.errors.price && (
          <div className="text-red-500 text-sm">{formik.errors.price}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <Input
          id="stock"
          name="stock"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.stock}
        />
        {formik?.errors.stock && (
          <div className="text-red-500 text-sm">{formik.errors.stock}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <Textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik?.errors.description && (
          <div className="text-red-500 text-sm">
            {formik.errors.description}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <Input
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
        {formik?.errors.category && (
          <div className="text-red-500 text-sm">{formik.errors.category}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Image URL</label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="url"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        {formik?.errors.imageUrl && (
          <div className="text-red-500 text-sm">{formik.errors.imageUrl}</div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
