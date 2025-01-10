import React from 'react'
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AboutMe from '../Components/AboutMe';
import Home from '../Components/Home';
import ErrorPage from '../Components/ErrorPage';
import Works from '../Components/Works';
import Contact from '../Components/Contact';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import LoginPage from '../Components/LoginPage';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <Routes key={location.pathname} location={location}>
            <Route path="/no_Page_found" element={<ErrorPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/my_works" element={<Works />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
                path="*"
                element={<Navigate to="/no_Page_found" replace />}
            />
        </Routes>
    )
}

export default AnimatedRoutes