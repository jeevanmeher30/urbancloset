import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/user";


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(API_URL);
      
      const user = response.data.find(
        (user) => 
          user.email === email &&
          user.password === password
      );
      if(user){
        alert("Login Successfull");
        navigate("/shop")
      }
      else{
        alert("Invalid email or password");
      }
    }

    catch(error){
      console.log(error)
      alert("Something went wrong")
    }
    console.log(email);
    console.log(password);

  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input type="email" 
        placeholder='Email'
        value={email}
        onChange = {(e) => setEmail(e.target.value)} /> <br />

        <input type="password"
        placeholder='Password'
        value = {password}
        onChange={(e) => setPassword(e.target.value)} /> <br />

        <button type = "submit">
          Login
        </button>

      </form>

    </div>
  )
}

export default Login
