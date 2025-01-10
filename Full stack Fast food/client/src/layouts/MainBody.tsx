import React from 'react';
import { motion } from "framer-motion"
import SidePanel from './SidePanel';
// import MainHeader from './MainHeader';
import BackdropImg from "../assets/images/backdrop.png"

interface MainBodyInterface {
    children: React.ReactNode;
}
const MainBody: React.FC<MainBodyInterface> = ({ children }) => {
    return (
        <div>
            <div className='h-screen overflow-auto'>
                <motion.aside id="separator-sidebar" className="w-32 fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar"
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
                <div className="p-2 bg-slate-100 dark:bg-gray-900  w-full pl-32 absolute right-0 text-white h-full">
                    <div className="h-[calc(100vh-20px)] z-10 relative rounded-md shadow-md bg-white/80 dark:bg-slate-800/70 p-2 overflow-auto">
                        {children}
                    </div>
                    <div className="h-full absolute top-0 z-0 opacity-[0.1]">
                        <img src={BackdropImg} alt="BackdropImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody