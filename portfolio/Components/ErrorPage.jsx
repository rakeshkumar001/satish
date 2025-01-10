import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransition, parentContainer, childItems } from "../Framer Motion/framerMotionConfigs";
import fourZeroFour from "../assets/images/jaconda-17.gif"
import LookImage from "../assets/images/casual-life-3d-three-quarter-back-view-standing-with-dog.png"

function ErrorPage() {
    return (
        <>
            <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                className='error_wrapper pl-0 md:pl-44 md:pt-44 lg:pt-0 h-full bg-blue w-full flex items-start lg:items-center justify-center bg-fade-white overflow-hidden'
            >
                <motion.div className="p-4" variants={parentContainer} initial="hidden" animate="show">
                    <motion.div className='' variants={childItems}>
                        <motion.img className='my_dropShadow scale-75 md:scale-100' src={fourZeroFour} />
                    </motion.div>
                    <motion.div className="my-0 md:my-10 relative -mt-10 md:mt-0" variants={childItems}>
                        <motion.h1 className="my-2 text-gray-800 font-bold text-md md:text-2xl" variants={childItems}>
                            Looks like you've found the
                            doorway to the great nothing
                        </motion.h1>
                        <motion.p variants={childItems} className="mb-0 md:mb-10 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</motion.p>
                        <Link to="/home">
                            <motion.button variants={childItems} whileHover={{ scale: [1, 0.9, 1.1, 1] }} className="text-gray  primaryBtn  absolute md:relative right-0 md:right-auto mt-10 lg:w-auto my-2 border rounded md py-2 px-4  md:py-4 md:px-8 text-center bg-indigo-600 threeD_card text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                                Take me there!
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.img initial={{ x: -300 }} animate={{ x: 0, transition: { delay: 1.5, duration: 0.5, type: "spring", stiffness: 100, } }} className='drop-shadow-xl absolute -bottom-10 md:bottom-10 left-0 md:left-10 scale-75 md:scale-100 ' src={LookImage} />
        </>
    )
}

export default ErrorPage