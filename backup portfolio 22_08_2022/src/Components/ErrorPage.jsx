import React from 'react'
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className='error_wrapper'>
            <div>ErrorPage
                <Link className="nav-link " to="/home">
                    Home
                </Link>
                <Link className="nav-link " to="/about_me">
                    about me
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage