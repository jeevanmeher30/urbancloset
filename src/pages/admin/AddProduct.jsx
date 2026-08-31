import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    const API_URL = "https://urbancloset-api.onrender.com/products";

    const handleAddProduct = async (e) => {
        e.preventDefault();

        try {
            const newProduct = {
                name,
                price,
                category,
                image
            };

            await axios.post(API_URL,newProduct);

            alert("Product added successfully");

            navigate("/admin/products");
        } catch (error) {
            console.log(error);
            alert("Could not add product");
        }
    };
    
  return (
    <div className='admin-form-page'>

      <h1>Add Product</h1>

      <form className='admin-form' onSubmit={handleAddProduct}>

            <input type="text"
            placeholder='Product name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input type="number"
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />

            <input type="text"
            placeholder='Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />

            <input type="text"
            placeholder='Image URL'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />

            <button type='submit'>
                Add Product
            </button>

        </form>
    </div>
  )
}

export default AddProduct
