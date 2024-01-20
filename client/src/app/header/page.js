
import React from "react";
import "./page.css";
const page = () => {
  return (
    <header className="ecommerce-header">
            <div className="logo">
                {/* <img className="logo-image" src="your-logo.png" alt="Ecommerce Logo" /> */}
                <h1>TrendyShop</h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#shop">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#categories">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cart">Cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#account">Account</a>
                    </li>
                </ul>
            </nav>
        </header>
  );
};

export default page;