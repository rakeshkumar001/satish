import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AuthPage from '../pages/AuthPage';
import MenuPage from '../pages/MenuPage';
import CartPage from '../pages/CartPage';
import OrderPage from '../pages/OrderPage';
import NotificationPage from '../pages/NotificationPage';
import MainPage from '../pages/MainPage';
import BlogPage from '../pages/BlogPage';
import FAQPage from '../pages/FAQPage';

function RootRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <Routes>
            <Route path='/' element={isLoggedIn ? <Navigate to="/home" />: <MainPage />} />
            <Route path='/login' element={<AuthPage />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/order_history' element={<OrderPage />} />
            {/* <Route path='/notification' element={<NotificationPage />} /> */}
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/faq' element={<FAQPage />} />
        </Routes>
    )
}

export default RootRoutes