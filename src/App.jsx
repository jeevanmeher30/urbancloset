import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Home from "./pages/public/Home";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Adminlogin from './pages/admin/Adminlogin';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>  
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/admin/login" element ={<Adminlogin/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
