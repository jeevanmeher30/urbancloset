import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import "../index.css";
import { CartContext } from '../Context/CartContext';

const Nav = () => {

  const { user, setUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
  );
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <nav>
      <div className='logo'>
        URBAN CLOSET
      </div>

      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>


      <div className='nav-actions'>
        {user ? (
          <>
          <span>Hello, {user.name}</span>
          
          <button onClick={handleLogout}>
            Logout
          </button>
          </>
        ):(
          <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
          </>
        )}
        
        <Link to="/cart" className='cart-icon'>
        🛒
        {totalItems > 0 && (
          <span className='cart-count'>
            {totalItems}
          </span>
        )}
        </Link>
      </div>

    </nav>
  )
}

export default Nav
