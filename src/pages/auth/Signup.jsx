import React from 'react'
import { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  
  const nameRegex = /^[A-Za-z ]+$/;


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
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(address);
    console.log(password);
    console.log(confirmpassword);
    console.log("Form Submitted");

    
  
  }


  

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
