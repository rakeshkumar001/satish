import React, { useEffect } from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "../components/Home"
import Cart from "../components/Cart"
import Login from '../components/Login';
// import LandingPage from '../components/LandingPage';

function RoutesComponent() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default RoutesComponent