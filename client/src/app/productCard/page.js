import React from "react";
import styles from "./productCard.module.css";
const page = () => {
  return (
    <div className={styles.cardCont}>
      <div className={styles.productCard}>
        <img className={styles.productImage} />
        <div className={styles.productDetails}>
          <h3>name</h3>
          <p>dec</p>
          <p className={styles.price}>Price: ${9 + 9}</p>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>

      <div className={styles.productCard}>
        <img className={styles.productImage} />
        <div className={styles.productDetails}>
          <h3>name</h3>
          <p>dec</p>
          <p className={styles.price}>Price: ${9 + 9}</p>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>

      <div className={styles.productCard}>
        <img className={styles.productImage} />
        <div className={styles.productDetails}>
          <h3>name</h3>
          <p>dec</p>
          <p className={styles.price}>Price: ${9 + 9}</p>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default page;
