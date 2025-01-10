import Header from './Header'
import Router from '../router/router'
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import FooterLayout from './Footer';

const MainLayout = () => {
    return (
        <div>
            <BrowserRouter basename="/">
                <Header />
                <div className="mt-14 px-4 lg:px-14">
                    <React.Suspense fallback={<>...</>}>
                        <Router />
                    </React.Suspense>
                </div>
                <FooterLayout />
            </BrowserRouter>
        </div>
    )
}

export default MainLayout
