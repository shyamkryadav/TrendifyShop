"use client";
import { useState, useEffect } from "react";
import style from "./productDetails.module.css";


const ProductsDetails = ({ params }) => {
  console.log(params);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products/"+params.productsId);
        const data = await response.json();
        // setProducts(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className={style.productcard}>
        <img src="/" className={style.productimage}/>
        <div  className={style.productdetails}>
          <h2 className={style.producttitle}>camera</h2>
          <p  className={style.productdescription}>This is degital</p>
          <p className={style.productprice}>Price: $65</p>
          {/* Add more details as needed, such as specifications, reviews, etc. */}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} className="product-image" />
//       <div className="product-details">
//         <h2 className="product-title">{product.title}</h2>
//         <p className="product-description">{product.description}</p>
//         <p className="product-price">Price: ${product.price}</p>
//         {/* Add more details as needed, such as specifications, reviews, etc. */}
//       </div>
//     </div>
//   );
// };
