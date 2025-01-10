import React from 'react'
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutMe from '../Components/AboutMe';
import Home from '../Components/Home';
import ErrorPage from '../Components/ErrorPage';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter={true} initial={false}>
            <Routes key={location.pathname} location={location}>
                <Route path="/no_Page_found" element={<ErrorPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about_me" element={<AboutMe />} />
                <Route path="/" element={<Navigate to="/no_Page_found" replace />} />

                <Route
                    path="*"
                    element={<Navigate to="/no_Page_found" replace />}
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes