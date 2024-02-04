"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./productCard.module.css";
const Products = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

 
  return (
    <div className={styles.cardCont}>
      {product.map((item) => {
        return (
          <div className={styles.productCard} key={item._id} >
             <Link href={`/products/${item._id}`}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productDetails}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className={styles.price}>Price: ${product.price}</p>
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
