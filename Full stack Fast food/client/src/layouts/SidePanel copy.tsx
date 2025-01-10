import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logoBig-original.png"
import MenuItemsList from "../assets/Json/MenuItems.json"
import { motion } from 'framer-motion';
import Icons from '../components/Icons';

const SidePanel = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(1)
    return (
        <div className="h-full ">
            <div className='bg-white  flex items-center justify-center my-2 mx-2 p-3 rounded-md shadow'>
                <div className="logo w-20 max-w-32 drop-shadow-md">
                    <img src={Logo} alt="logo" className='drop-shadow-md' />
                </div>
            </div>
            <div className="bg-white overflow-y-auto rounded-md w-28 mx-auto h-[calc(100vh-80px)] shadow-md dark:bg-slate-800">
                <ul className="space-y-1 font-medium py-2">
                    {
                        MenuItemsList.map((item: { id: number, redirectLink: string, text: string, _iconName: string }) => {
                            return (<motion.li key={item.id}
                                className={` py-2 w-24 rounded-md mx-auto text-xs hover:cursor-pointe ` +
                                    `${activeMenuItem == item.id ? ' text-orange font-medium transition-colors shadow-md duration-300 ease-in bg-gradient-to-r from-orange-100 to-red-100' : ' font-normal '}`}

                            >
                                <Link to={item.redirectLink} className={` flex items-center w-3/5 mx-auto` + `${activeMenuItem == item.id ? ` text-orange-500 ` : ` hover:drop-shadow-md hover:text-orange-500 text-gray-400`}`}
                                    onClick={() => setActiveMenuItem(item.id)}>
                                    <span className='mr-2'>
                                        <Icons iconName={item._iconName} />
                                    </span>
                                    {item.text}
                                </Link>
                            </motion.li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SidePanel