import React from 'react';
import {Link} from 'react-router-dom';
import "../index.css"

const Nav = () => {
  return (
    <nav>
      <div className='logo'>
        URBAN CLOSET
      </div>
      
      <div className='nav-links'>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      </div>


      <div className='nav-actions'>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/admin/login">Admin </Link>
      <Link to="/cart">Cart </Link>
      </div>
     
    </nav>
  )
}

export default Nav
