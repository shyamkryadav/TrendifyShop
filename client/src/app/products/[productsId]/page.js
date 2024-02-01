"use client";
import styles from "./productDetails.module.css";

const ProductsDetails = ({ params }) => {
  console.log(params);
  return (
    <div>
      <div className="product-card">
        <img src="/"  className="product-image" />
        <div className="product-details">
          <h2 className="product-title">camera</h2>
          <p className="product-description">This is degital</p>
          <p className="product-price">Price: $65</p>
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
