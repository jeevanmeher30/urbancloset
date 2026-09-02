import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext, useEffect,useState } from 'react';
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';


const ProductDetails = () => {
    const {id} = useParams();
    
    const { cart ,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart } = useContext(CartContext);

    // console.log(cart);

    const[product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [addedMessage, setAddedMessage] = useState(false);

    // const API_URL = "https://urbancloset-api.onrender.com/products";

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

    const cartItem = cart.find(
        (item) => 
            item.id === product?.id && 
        item.selectedSize === selectedSize
    );

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

            <div className='size-selection'>
                <h5>Select Size</h5>

                <div className='size-options'>
                    {product.sizes?.map((size) => (
                        <button 
                        key = {size}
                        className={
                            selectedSize === size
                            ? "size-btn selected"
                            : "size-btn"
                        }
                        onClick={()=> setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <br />
            
              {cartItem ? (
                <>
                  <div className="quantity-controls">
                      <button
                          onClick={() => decreaseQuantity(cartItem.id , cartItem.selectedSize)}
                      >
                          −
                      </button>

                      <span>{cartItem.quantity}</span>

                      <button
                          onClick={() => increaseQuantity(cartItem.id, cartItem.selectedSize)}
                      >
                          +
                      </button>
                  </div>
                  <button className='remove-product-btn'
                  onClick={() =>
                    removeFromCart(cartItem.id,cartItem.selectedSize)
                  }
                  >
                    Remove
                  </button>
                  </>
                  
              ) : (

              <button 
              className = "add-to-cart-btn"
              onClick={() => {
                  if (!selectedSize) {
                      alert("Please select a size");
                      return;
                  }
                  addToCart({
                      ...product,
                      selectedSize: selectedSize,
                  });

                  setAddedMessage(true);
                  setTimeout(() =>{
                    setAddedMessage(false);
                  }, 2500);
              }}
              >
                  Add to Cart
              </button>

            )}
              {addedMessage && (
                  <div className="added-message">
                      ✓ Added to cart
                  </div>
              )}

        </div>
      
    </div>
  )
}

export default ProductDetails
