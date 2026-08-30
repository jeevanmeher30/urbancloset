import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext, useEffect,useState } from 'react';
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';


const ProductDetails = () => {
    const {id} = useParams();
    
    const { cart , addToCart } = useContext(CartContext);

    // console.log(cart);

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

            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>

        </div>
      
    </div>
  )
}

export default ProductDetails
