import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutMe() {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='about_me_wrapper h-100 bg-blue'>
                <div>AboutMe</div>
                <Link className="nav-link " to="/home">
                    Home
                </Link>
                <Link className="nav-link " to="/abcd">
                    ABCD
                </Link>
            </div>
        </motion.div>
    )
}

export default AboutMe