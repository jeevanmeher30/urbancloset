import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const addressRegex = /^[a-zA-Z0-9\s.,]{10,}$/

  const navigate = useNavigate();

  const API_URL = "https://urbancloset-api.onrender.com/user";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address || !password || !confirmpassword) {
      alert("Please fill all the details");
      return;
    }

    if (!nameRegex.test(name)) {
      alert("name should contain only letters");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("enter a valid email address");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Phone no. must contain 10 digit");
      return;
    }

    if (!addressRegex.test(address)) {
      alert("Address should be more than 10 characters")
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must contain 8 characters");
      return;
    }

    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }


    const newUser = {
      name,
      email,
      phone,
      address,
      password
    };

    try {
      const response = await axios.get(API_URL);

      const existingUser = response.data.find(
        (user) => user.email === email
      );

      if (existingUser) {
        alert("Email already exists , Try again")
        return;
      }


      const postResponse = await axios.post(
        API_URL,
        newUser
      );

      console.log(postResponse.data);
      alert("Registration Successfull");
      navigate("/login")


      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setPassword("");
      setConfirmPassword("");


    } catch (error) {
      console.log(error)
      alert("Registration Failed")
    }

  };


  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <div className='auth-form-section'>
          <div className='auth-content'>
            <div className='auth-brand'>
              URBANCLOSET
            </div>
            <h1 className='auth-title'>Create Account</h1>

            <form onSubmit={handleSubmit}>
              <div className='auth-input-group'>
                <input type="text"
                  placeholder='Name'
                  value={name} onChange={(e) => setName(e.target.value)} />

                <input type="email"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />

                <input type="tel"
                  placeholder='Phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} />

                <input type="text"
                  placeholder='Address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} />

                <div className='password-input'>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                  <button
                    type="button"
                    className='eye-button'
                    onClick={() => setShowPassword(!showPassword)}>

                    {showPassword ? "◉" : "◌"}
                  </button>
                </div>

                <div className='password-input'>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder='Confirm Password'
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                  <button
                    type="button"
                    className='eye-button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? "◉" : "◌"}
                  </button>
                </div>
              </div>
              <button className='auth-button' type="submit">Create Account</button>
            </form>
            <p className='auth-footer'>
              Already have an account?
              <Link to="/login"> Login </Link>
              <br />
              Are you admin?
              <Link to="/admin"> Admin</Link>
            </p>
            
          </div>
        </div>
        <div className="auth-image-section">
          <img src="/Signupimg.jpg" alt="UrbanCloset fashion" />
        </div>
      </div>
    </div>
  )
}

export default Signup
