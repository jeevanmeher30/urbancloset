import React from 'react';
import { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const API_URL = "https://urbancloset-api.onrender.com/user";


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(API_URL);

      const user = response.data.find(
        (user) =>
          user.email === email &&
          user.password === password
      );
      if (user) {

        setUser(user);

        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );

        alert("Login Successfull");

        navigate("/")
      }
      else {
        alert("Invalid email or password");
      }
    }

    catch (error) {
      console.log(error)
      alert("Something went wrong")
    }
    console.log(email);
    console.log(password);

  };

  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <div className='auth-form-section'>
          <div className='auth-content'>
            <div className='auth-brand'>
              URBANCLOSET
            </div>

            <h1 className='auth-title'>
              Welcome back
            </h1>
            <p className='auth-subtitle'>
              Sign in to continue shopping
            </p>


            <form onSubmit={handleSubmit}>

              <div className='auth-input-group'>
                <input type="email"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='auth-input-group'>

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
              </div>

              <button className='auth-button' type="submit">
                Login
              </button>
            </form>
            <p className='auth-footer'>
              Don't have an account?
              <Link to="/signup"> Sign up</Link>
              <br />
              Are you admin?
              <Link to="/admin"> Admin</Link>
            </p>
          </div>
        </div>

        <div className='auth-image-section'>
          <img src="/fashion.jpg" alt="UrbanCloset fashion" />
        </div>
      </div>
    </div>
  )
}

export default Login
