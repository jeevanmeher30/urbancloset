import React from 'react'
import {BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from './Components/Nav';
import Home from "./pages/public/Home";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Adminlogin from './pages/admin/Adminlogin';
import Shop from './pages/public/Shop';
import ProductDetails from './pages/public/ProductDetails';
import Cart from './pages/public/Cart';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import EditProduct from './pages/admin/EditProduct';
import AddProduct from './pages/admin/AddProduct';



  const AppContent = () =>{
  const location = useLocation();

  const hideNav = 
  location.pathname === "/login" || 
  location.pathname === "/signup" || 
  location.pathname.startsWith("/admin");

  return (
    <>
    {!hideNav && <Nav/>}
    <Routes>  
        <Route path="/" element ={<Home/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/signup" element ={<Signup/>} />

        <Route path="/admin/login" element ={<Adminlogin/>} />
        <Route path="/admin/dashboard" element ={<AdminDashboard/>} />
        <Route path="/admin/products" element ={<AdminProducts/>} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        <Route path="/admin/add-product" element={<AddProduct />} />


        <Route path= "/shop" element = {<Shop />} />
        <Route path="/product/:id" element = {<ProductDetails />} />
        <Route path="/cart" element = {<Cart/>} />
        
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
