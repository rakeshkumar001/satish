import React from 'react';
import Logo from "../assets/images/logoBig-original.png"
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.header className='fixed w-screen z-10'
      initial={{ transform: "translateY(-10px)", opacity: 0 }}
      whileInView={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{
        delay: 0.5,
        type: "spring",
        damping: 5,
        mass: 0.75,
        stiffness: 100
      }}
    >
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="logo max-w-32 drop-shadow-md">
            <img src={Logo} alt="logo" className='drop-shadow-md' />
          </div>
          <div className="searchLocation w-40 lg:w-64">
            <form>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-2 px-4 ps-10 pe-10 text-sm text-gray-900 dark:text-white dark:bg-gray-700 shadow-lg rounded-full bg-gray-50" placeholder="Enter the location..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-0 font-medium text-sm p-2">
                  <MapPinIcon className='h-5 w-5  text-orange-500' />
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <div className="tollFree flex items-center dark:text-white  px-3 py-2">
              <PhoneIcon className="h-4 w-4 text-brown-400" />
              <p className='dark:text-white font-medium'>
                 + 91-89623162397
              </p>
            </div>
            <button className="shadow-md text-center mx-2 rounded-full border-0 bg-white px-4 py-2 text-orange-500    transition  hover:bg-orange-100 hover:shadow-orange-400 dark:shadow-orange-900">Log in</button>
            <button className="shadow-md text-center mx-2 rounded-full border-0 bg-orange-400 px-4 py-2 text-base text-white  transition hover:bg-orange-500 hover:shadow-orange-400 dark:shadow-orange-900">Sign Up</button>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
            </button>
          </div>
        </div>
      </nav>
    </motion.header>



  )
}

export default Header