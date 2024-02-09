"use client";
import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./productCard.module.css";
import { addToWishList } from "@/redux/reducerSlice/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [product, setProducts] = useState([]);
  const { favUser } = useSelector((state) => state.contact);
  const { wishList } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        const data = await response.json();
        setProducts(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAdd = (productDetails) => {
    dispatch(addToWishList(productDetails));
    console.log("hi");
  };

  return (
    <div className={styles.cardCont}>
      {product.map((item) => {
        return (
          <div className={styles.productCard} key={item._id}>
          
              <img
                src={item.imageUrl}
                alt={item.name}
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className={styles.price}>Price: ${item.price}</p>
                  <button className={styles.addToCartButton} onClick={() => handleAdd(item)}>Add to Cart</button>
                  <Link className={styles.addToCartButton} href={`/products/${item._id}`}>view</Link>
              </div>
          </div>
        );
      })}

      {/* <div>
        {wishList.map((item) => {
          return (
              <li>{item.name}</li>
          );
        })}
      </div> */}
    </div>
  );
};
export default Products;
