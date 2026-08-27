import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
    const {id} = useParams();

    const[product, setProduct] = useState(null);

    const API_URL = "http://localhost:5000/products";

    useEffect(() =>{
        const fetchProduct = async () => {
            try{
                const response = await axios.get(`${API_URL}/${id}`);

                console.log(response.data);

                setProduct(response.data);
            } catch(error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    if(!product){
        return <h2>Loading...</h2>
    }

  return (
    <div className='product-details'>
        <div className='details-image'>
            <img 
            src={product.image} 
            alt={product.name} 
            />
        </div>

        <div className='details-info'>
            <p>
                {product.category}
            </p>

            <h1>
                {product.name}
            </h1>

            <h2>
                ₹{product.price}
            </h2>

            <p>
                {product.description}
            </p>

            <button>
                Add to Cart
            </button>

        </div>
      
    </div>
  )
}

export default ProductDetails
