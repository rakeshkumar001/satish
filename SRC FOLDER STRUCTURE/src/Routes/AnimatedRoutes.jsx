import React from 'react'
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import NoPageFound from '../pages/404/NoPageFound';
import AboutUs from '../pages/About Us/AboutUs';
import Contact from '../pages/Contact/Contact';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Product from '../pages/Product/Product';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <Routes key={location.pathname} location={location}>
            <Route path="/no_page_found" element={<NoPageFound />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<Product />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/orders" element={<Contact />} />
            <Route path="/profile" element={<Contact />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/no_page_found" replace />}/>
        </Routes>
    )
}

export default AnimatedRoutes