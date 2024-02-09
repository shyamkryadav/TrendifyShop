"use client";
import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import style from "./productDetails.module.css";
import { addTofavourite } from "@/redux/reducerSlice/contactSlice";
import  {addToWishList}  from "@/redux/reducerSlice/productSlice";

const ProductsDetails = ({ params }) => {
  const dispatch = useDispatch();
  if (!params) {
    return <div>Loading...</div>;
  }

  const [product, setProducts] = useState([]);

  console.log(params);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/products/" + params.productsId
        );
        const data = await response.json();
        setProducts(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAdd=()=>{
    dispatch(addToWishList(product))
    console.log("hi")
  }

  return (
    <div>
      <div className={style.productcard}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={style.productImage}
        />
        <div className={style.productdetails}>
          <h2 className={style.producttitle}>{product.name}</h2>
          <p className={style.productdescription}>{product.description}</p>
          <p className={style.productprice}>{product.price}</p>
          <button className={style.addToCartButton} onClick={handleAdd }>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

