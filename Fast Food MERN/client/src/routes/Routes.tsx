import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Homepage from '../pages/Homepage/Homepage';
import { useSelector } from 'react-redux';
import History from '../pages/History';
import Contact from '../pages/Contact';
import Favourites from '../pages/Favourites';


function RootRoutes() {
    const isLoggedIn = useSelector((state: any) => state.UserLoggedInSlice.isLoggedIn);
    return (
        <Routes>
            <Route path='/' element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/order_history' element={<History />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Homepage />} />
        </Routes>
    )
}

export default RootRoutes