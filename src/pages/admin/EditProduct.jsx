import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditProduct = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const API_URL = "https://urbancloset-api.onrender.com/products";

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const getProduct = async () => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);

            setName(response.data.name);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setImage(response.data.image);
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (e) =>{
        e.preventDefault();

        try {
            const updatedProduct = {
                name,
                price,
                category,
                image
            };
            await axios.patch(
                `${API_URL}/${id}`,
                updatedProduct
            );

            alert("Product updated successfully");

            navigate("/admin/products")
        } catch (error) {
            console.log(error);
            alert("Could not update product");
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

  return (
    <div className='admin-form-page'>

          <Link to="/admin/dashboard" className="back-dashboard-btn">
              ← Back to Dashboard
          </Link>

        <h1>Edit Product</h1>  

        <form className='admin-form' onSubmit={handleUpdate}>

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
                Update Product
            </button>

        </form>
    </div>
  );
};

export default EditProduct;
