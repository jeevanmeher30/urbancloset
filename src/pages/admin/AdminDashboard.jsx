import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const AdminDashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("admin")

        navigate("/admin/login");
    };
  return (
    <div className='admin-dashboard'>

        <div className='admin-dashboard-header'>
            <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your Urban Closet store</p>
            </div>

            <button className='admin-logout-btn'
            onClick={handleLogout}>
                Logout
            </button>
            
        </div>
      

      <div className='admin-options'>
        <Link to="/admin/products" className='admin-card'>
            <h2>📦 Products</h2>
            <p>View, edit and delete products</p>
        </Link>
        
        <Link to="/admin/add-product" className='admin-card'>
            <h2>➕ Add Product</h2>
            <p>Add new products to your store</p>
        </Link>

      </div>

    </div>
  );
};

export default AdminDashboard
