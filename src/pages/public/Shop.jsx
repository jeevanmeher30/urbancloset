import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
const Shop = () => {

  const[products,setProducts] = useState([]);
  
  const API_URL = "http://localhost:5000/products"

  useEffect(() =>{
    const fetchproducts = async () =>{
      try{
        const response = await axios.get(API_URL);

        setProducts(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchproducts();
  }, []);

  return (

    <div className='shop-page'> 
    <h1 className='shop-title'> Shop Our Collection</h1>
    <div className='product-grid'>
      {products.map((product) =>(
        <div className='product-card' key = {products.id}>
          <div className='product-image'>
            <img src={product.image} alt={product.name} />
          </div>

          <div className='product-info'>
            <p className='product-category'>
              {products.category}
            </p>
            <h2>{product.name}</h2>

            <p className='product-price'>
              ₹{product.price}
              </p>

            <button className='add-cart-btn'>
              Add to Cart
            </button>

          </div>

        </div>

      ))}


    </div>
  </div>
    
  )
}

export default Shop