import { createContext, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Cart = () => {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      alert("Please login to continue checkout");

      navigate("/login")
    } else {
      alert("Order placed successfully");
      clearCart();
    }
  };


  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  console.log(cart)
  return (
    <div className='cart-page'>
      <h1>Your Cart </h1>

      {cart.length === 0 ? (

        <div className='empty-cart'>

          <h2>Your cart is empty.</h2>

          <p>Looks like you haven't added anything yet.</p>

          <Link to="/shop" className='continue-shopping'>
            Continue Shopping
          </Link>

        </div>
      ) : (
        <div className='cart-items'>

          {cart.map((product) => (

            <div className='cart-item' key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />
              <div>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <p>₹{product.price}</p>
                <div className='cart-actions'>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(product.id)}>
                      -
                    </button>

                    <span>
                      {product.quantity}
                    </span>

                    <button onClick={() => increaseQuantity(product.id)}>
                      +
                    </button>

                  </div>
                  <button className='remove-btn' onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </div>


              </div>

            </div>

          ))}
        </div>
      )}
      {cart.length > 0 && (
        <>
        <h2 className='cart-total'>
        Total: ₹{total}
      </h2>

      <button className='checkout-btn'
        onClick={handleCheckout}>
        Checkout
      </button>
      </>
      )}
    </div>
  );
};

export default Cart
