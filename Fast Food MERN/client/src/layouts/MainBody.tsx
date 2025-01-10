import React from 'react';
import { motion } from "framer-motion"
import BackdropImg from "../assets/images/backgroundddd.jpg";
import { useSelector } from 'react-redux';
import BackgroundImg from "../assets/images/backgroundddd.jpg"
import SidePanel from '../layouts/SidePanel';

interface MainBodyInterface {
    children: React.ReactNode;
}
const MainBody: React.FC<MainBodyInterface> = ({ children }) => {
    const isLoggedIn = useSelector((state: any) => state.UserLoggedInSlice.isLoggedIn);
    return (
        <div>
            <div className='h-screen w-screen overflow-hidden bg-transparent'>
                <div className="background absolute h-full w-full object-contain">
                    <img className='h-full w-full dark:brightness-50' src={BackgroundImg} alt="" />
                </div>
                {
                    isLoggedIn ?
                        <div className='grid grid-cols-5 gap-4 w-full' >
                            <div className='col-span-3'>
                                <motion.aside id="separator-sidebar" className="w-32 fixed top-0 left-0 z-40 h-screen flex justify-center mx-auto px-2 transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar"
                                    initial={{ transform: "translateX(-30px)", opacity: 0 }}
                                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                                    transition={{
                                        delay: 1,
                                        type: "spring",
                                        damping: 5,
                                        mass: 0.75,
                                        stiffness: 100
                                    }}
                                >
                                    <SidePanel />
                                </motion.aside>
                            </div>
                            <div className="p-2   w-full pl-32 absolute right-0 col-span-4 text-white h-full">
                                <div className="h-[calc(100vh-20px)] z-10 relative overflow-auto">
                                    {children}
                                </div>
                                <div className="h-full absolute top-0 z-0 opacity-[0.1]">
                                    <img src={BackdropImg} alt="BackdropImg" />
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            {children}
                        </>
                }
            </div>
        </div>
    )
}

export default MainBody