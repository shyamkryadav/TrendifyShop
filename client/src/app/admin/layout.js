// AdminLayout.js
import React from "react";
import Link from "next/link";
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <ul className="admin-menu">
          <li>
            <Link href="/admin/dashboard">DashBoard</Link>
          </li>
          <li>
            <Link href="/admin/product">Product</Link>
          </li>
          <li>
            <Link href="/admin/allproduct">All Product</Link>
          </li>
          <li>
            <Link href="/admin/category">Category</Link>
          </li>
        </ul>
      </div>
      <div  className="admin-content">{children}</div>
    </div>
  );
};

export default AdminLayout;
