 import React from 'react'
 import { Route, Routes, Navigate } from 'react-router-dom'
 import Home from "../pages/Home"
 import Cart from "../pages/Cart"
 import Checkout from "../pages/Checkout"
 import Login from "../pages/Login"
 import ProductDetails from "../pages/ProductDetails"
 import Shop from "../pages/Shop"
 import Signup from "../pages/Signup"
import Display from '../components/Display/Display'
 
 
 const Router = () => {
   return <Routes>
    <Route path='/' element={<Navigate to={'home'}/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='display' element={<Display/>}/>



   </Routes>
 }
 
 export default Router