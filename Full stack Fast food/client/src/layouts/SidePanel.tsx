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
            <div className="  relative rounded-md w-28 mx-auto h-[calc(100vh-80px)] flex items-center dark:bg-slate-800 overflow-hidden">
                <div className='skew-y-12 -rotate-6 w-2/3 shadow-lg bg-red-100 h-[calc(100vh-100px)] right-0 absolute rounded-lg'></div>
                <div className='skew-y-12 rotate-6 w-2/3 shadow-lg bg-yellow-50 h-[calc(100vh-100px)] right-0 absolute rounded-lg'></div>
                <div className='skew-y-12  w-2/3 shadow-[0_5px_5px_rgba(0,0,0,0.25)] bg-orange-100 h-[calc(100vh-100px)] right-0 absolute rounded-lg'></div>
                <div className="space-y-1  mx-auto translate-x-6 font-medium py-2">
                    <div className="profile_icon mb-3">
                        <div className="rounded-full shadow-md transition ease-in-out duration-400 bg-white h-10 w-10 mx-auto overflow-hidden block cursor-pointer hover:scale-110 hover:shadow-orange-300">
                            <img className='w-full' src={"https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"} alt="" />
                        </div>
                    </div>
                    <p className='border-[1px] border-gray-300'></p>
                    <ul className='menu_list pt-1'>
                        {
                            MenuItemsList.map((item: { id: number, redirectLink: string, text: string, _iconName: string }) => {
                                return (
                                    <motion.li key={item.id}
                                        className={`rounded-lg mx-auto text-xs hover:cursor-pointe flex justify-center group/item ` +
                                            `${activeMenuItem === item.id ? ' text-orange font-medium transition-colors duration-300 ease-in '
                                                :
                                                ' font-normal '}`}

                                    >
                                        <Link to={item.redirectLink}
                                            className={`my-1 p-2 rounded-lg relative` + `${activeMenuItem === item.id ? ` text-white bg-orange-500 shadow-md shadow-orange-300 scale-110 transition duration-200 ease-in-out ` : ` bg-white hover:drop-shadow-md border border-transparent hover:border-orange-500 hover:text-orange-500 text-gray-400`}`}
                                            onClick={() => setActiveMenuItem(item.id)}>
                                            <span className='mr-2 flex justify-center items-center'>
                                                <Icons iconName={item._iconName} classname={`h-5 w-5 transition ease-in-out duration-400 translate-x-1 ` + `${activeMenuItem !== item.id ? 'group-hover/item:translate-x-2 ' : ''}`} />
                                            </span>
                                            <p className={`absolute top-2 px-1 opacity-0  bg-gradient-to-r  from-yellow-500 via-yellow-500 to-transparent text-white p-1 rounded-s-lg transition-transform ease-in-out duration-400 `
                                                + `${activeMenuItem !== item.id ? ' w-16 group-hover/item:opacity-100 group-hover/item:-left-12 ' : ''}`}
                                            >
                                                {item.text}
                                            </p>
                                        </Link>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidePanel