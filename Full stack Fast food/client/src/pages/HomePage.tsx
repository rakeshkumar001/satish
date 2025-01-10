import React from 'react'
import MenuCategory from '../components/MenuCategory'
import PopularProducts from '../components/PopularProducts'
import { motion } from "framer-motion"
import { SA_childItems, SA_mainContainer } from '../Utlity/SwaggerAnimation'
import { FireIcon } from '@heroicons/react/20/solid'

const Homepage = () => {
    return (
        <div>
            <div className="promotionalBanner">
                <div className="salutation text-gray-700 px-2 pb-3 dark:text-gray-300">
                    <h1 className='text-2xl  font-semibold drop-shadow-md'>Welcome, <b className='ml-1 text-orange-500'>User</b></h1>
                    <p className='text-xs flex'>Discover what your taste buds craving for... <FireIcon className='h-4 w-4 text-orange-400 drop-shadow-md' /></p>
                </div>
                <div className="h-20 w-20 absolute animate-pulse"></div>
                <motion.ul variants={SA_mainContainer(1)} initial="hidden" animate="show" className='flex justify-between items-center'>
                    {
                        [1, 2, 3].map((val) => {
                            return (
                                <motion.li key={val} variants={SA_childItems} className='m-2 rounded-md overflow-clip'>
                                    <img src={require("../assets/images/banner" + val + ".png")} alt="" />
                                </motion.li>
                            )
                        })
                    }
                </motion.ul>
            </div>
            <MenuCategory />
            <PopularProducts />
        </div>
    )
}

export default Homepage