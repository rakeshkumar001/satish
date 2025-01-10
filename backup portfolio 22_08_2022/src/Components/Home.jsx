import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.5 }}
  >
      <div className='home_wrapper  h-100 bg-red'>
        <Link className="nav-link " to="/about_me">
          about me
        </Link>
        <Link className="nav-link " to="/abcd">
          ABCD
        </Link>
      </div>
    </motion.div>
  )
}

export default Home