import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Adminlogin = () => {

  const[email,setEmail] = useState("");
  const [password, setPassword] =  useState("");
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if(
      email === "admin@urbancloset.com" &&
      password === "admin123"
    ) {

      localStorage.setItem("admin","true");

      alert("Admin login successful");

      // console.log(email,password)

      navigate('/admin/dashboard');
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className='admin-login-page'>

    <div className='admin-login-box'>
      <h1>Admin Login </h1>
      <p>Login to manage Urban Closet</p>

      <form onSubmit = {handleLogin}>

        <input type="email"
        placeholder='Enter admin email'
        value = {email}
        onChange={(e)=> setEmail(e.target.value)} 
        />

        <input type="password"
        placeholder='Enter admin password'
        value = {password}
        onChange={(e)=> setPassword(e.target.value)} 
        />

        <button type='submit'>
          Login
        </button>
      </form>
      <p className='auth-footer'>
              Are you a user?
          <Link to="/login"> Login</Link>
          <br />
              To open Shop, Click here 
          <Link to="/"> Store</Link>
        </p>
    </div>
    </div>
  )
}

export default Adminlogin
