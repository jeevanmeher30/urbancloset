import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^[A-Za-z0-9]{8,}$/;
  const addressRegex = /^[a-zA-Z0-9\s.,]{10,}$/

  const API_URL= "http://localhost:5000/user";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address || !password || !confirmpassword) {
      alert("Please fill all the details");
      return;
    }

    if(!nameRegex.test(name)){
    alert("name should contain only letters");
    return;
    }

    if(!emailRegex.test(email)){
    alert("enter a valid email address");
    return;
    }

    if(!phoneRegex.test(phone)){
    alert("Phone no. must contain 10 digit");
    return;
    }

    if(!addressRegex.test(address)){
    alert("Address should be more than 10 characters")
    return;
   }

    if(!passwordRegex.test(password)){
    alert("Password must contain 8 characters");
    return;
    }

    if(password !== confirmpassword){
      alert("Passwords do not match");
      return;
    }


    const newUser={
      name,
      email,
      phone,
      address,
      password
    }

    axios.get(API_URL)
      .then((response) => {
        const emailExists = existingUsers.some(
            (user) => user.email === email
        );

    if(emailExists){
        alert("Email already exists , Try again")
        return;
      }


    axios.post(API_URL, newUser)
      .then((response) => {
        console.log(response.data);
        alert("Registration Successfull")
      })

      .catch((error) =>{
        console.log(error)
        alert("Registration Failed")
      });
    })

      .catch((error) =>{
        console.log(error)
        alert("Could not check existing user");
      });
    
  };


  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} /> <br />

        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> <br />

        <input type="tel" placeholder='Phone' onChange={(e) => setPhone(e.target.value)} /> <br />

        <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} /> <br />

        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> <br />

        <input type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} /> <br />

        <button type="submit">Create Account</button>

      </form>

    </div>
  )
}

export default Signup
