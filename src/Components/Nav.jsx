import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import "../index.css"

const Nav = () => {

  const { user, setUser } = useContext(AuthContext);
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
        
        <Link to="/admin/login">Admin </Link>
        <Link to="/cart">🛒</Link>
      </div>

    </nav>
  )
}

export default Nav
