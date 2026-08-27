import React from 'react'
import {BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from './Components/Nav';
import Home from "./pages/public/Home";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Adminlogin from './pages/admin/Adminlogin';
import Shop from './pages/public/Shop';
import ProductDetails from './pages/public/ProductDetails';



  const AppContent = () =>{
  const location = useLocation();

  const hideNav = 
  location.pathname === "/login" || 
  location.pathname === "/signup";

  return (
    <>
    {!hideNav && <Nav/>}
    <Routes>  
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/admin/login" element ={<Adminlogin/>}/>
        <Route path= "/shop" element = {<Shop />}/>
        <Route path="/product/:id" element = {<ProductDetails />}/>
        
      </Routes>
    </>
  );
};



const App = () => {

  return (
    <div>
      <BrowserRouter>
      <AppContent/>
      </BrowserRouter>
    </div>
  )
}

export default App
