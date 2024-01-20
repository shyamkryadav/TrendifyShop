"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./productCard.module.css";
const page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.cardCont}>
      {products.map((product) => {
        return <div className={styles.productCard} key={product._id}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <div className={styles.productDetails}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className={styles.price}>Price: ${product.price}</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>;
      })}
    </div>
  );
};

export default page;
