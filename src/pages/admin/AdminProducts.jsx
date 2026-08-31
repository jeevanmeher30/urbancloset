import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminProducts = () => {

    const [products,setProducts] = useState([]);

    const API_URL = "https://urbancloset-api.onrender.com/products"

    const getProducts = async() => {
        try {
            const response = await axios.get(API_URL);

            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async(id) =>{
        try {
            await axios.delete(`${API_URL}/${id}`);

            alert("Product deleted successfully");

            getProducts();
        } catch (error) {
            console.log(error);
            alert("Could not delete product");
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div className='admin-products'>

      <h1>Manage Products</h1>

      <div className='admin-product-list'>
      {products.map((product) =>(
        <div className='admin-product-card' key = {product.id} >

            <img src={product.image}
             alt={product.name} />

            <div className='admin-product-info'>
            <h2>{product.name}</h2>

            <p className='admin-product-category'>
                {product.category}
            </p>

            <p className='admin-product-price'>
                ₹{product.price}
            </p>
            </div>

            <div className="admin-product-actions">
                <Link to={`/admin/edit-product/${product.id}`}>
                <button className='edit-product-btn'>
                     Edit
                </button>
            </Link>



            <button 
                className='delete-product-btn'
                onClick={() => deleteProduct(product.id)}> 
                Delete
            </button>

            </div>
            
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default AdminProducts
