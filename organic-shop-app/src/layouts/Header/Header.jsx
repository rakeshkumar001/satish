import React, { useEffect, useState } from 'react';
import { faBars, faSun, faMoon, faPersonRifle, faBook, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BrandLogo from "../../assets/images/BrandLogo.png";
import { Link, useLocation } from "react-router-dom";
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
    const [currentLocation, setCurrentLocation] = useState("home")
    const location = useLocation();
    useEffect(() => {
        setCurrentLocation((location.pathname).split("/")[1])
    }, [location])

    return (
        <nav id="Header" className="shadow-box-shadow bg-white px-2 sm:px-4 py-1 dark:bg-gray-900 fixed w-full z-50 top-0 left-0">
            <div className="container shadow-xl flex flex-wrap items-center justify-between mx-auto">
                <span href="#" className="flex items-center h-10">
                    <img src={BrandLogo} alt="" className="h-full" />
                </span>
                <div className="flex md:order-2 items-center">
                    <button type="button" className="text-primary bg-transparent hover:bg-primary hover:text-white hover:border-transparent border-solid border-2 border-primary focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  dark:hover:bg-primary dark:focus:ring-blue-800">Start Order</button>
                    <button data-tooltip-target="tooltip-default" id="theme-toggle" type="button" className="text-gray-500 h-full w-10  mx-2 dark:text-gray-400   dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        <span id="theme-toggle-dark-icon" className='hidden'>
                            <FontAwesomeIcon icon={faMoon} className='hover:text-secondary' />
                        </span>
                        <span id="theme-toggle-light-icon" className='hidden' >
                            <FontAwesomeIcon icon={faSun} className='hover:text-secondary' />
                        </span>
                    </button>
                    <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block  text-xs px-2 py-1 font-normal text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Toggle theme
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button type="button" className="text-gray-500 h-8 w-8  mx-2 dark:text-gray-400   dark:focus:ring-gray-700 rounded-full text-sm focus:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="border border-border-element rounded-lg ">
                            <FontAwesomeIcon icon={faUserAlt} />
                        </span>
                    </button>
                    <div className="z-50 w-32 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 drop-shadow-xl" id="user-dropdown">
                        <div className="px-4 py-3 border-b-2">
                            <span className="block text-sm font-medium  text-gray-900 dark:text-white">Hi, User</span>
                            <span className="block text-xs text-gray-500 truncate dark:text-gray-400">welcome back</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <Link to='profile' className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</Link>
                            </li>
                            <li>
                                <Link to='orders' className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders</Link>
                            </li>
                            <li>
                                <Link to='login' className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex  items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <FontAwesomeIcon icon={faBars} className="color-primary" />
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 cursor-pointer">
                        <li>
                            <Link to='home' className={currentLocation == "home" ? "text-primary" : "" + `block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to='products' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
                        </li>
                        <li>
                            <Link to='about_us' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
                        </li>
                        <li>
                            <Link to='contact' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header