import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { glideUp } from "../Framer Motion/framerMotionConfigs";
// import wave from "../assets/images/wave.svg"
import ExampleSVG from "../assets/images/animatedWave.svg"
import { Link } from 'react-router-dom';


const links = [
    { name: "Home", to: "home", id: 1 },
    { name: "About Me", to: "about_me", id: 2 },
    { name: "Expeirence", to: "experience", id: 3 },
    { name: "Skills", to: "skills", id: 4 },
    { name: "My Works", to: "my_works", id: 5 },
    { name: "Contact Me", to: "contact", id: 6 },
];

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

function SideBar() {
    const [showMenu, setshowMenu] = useState(false);

    return (
        <main className='sidebar_container top-0 fixed z-20 drop-shadow-imgDropShadow h-full '>

            <AnimatePresence>
                {showMenu && (
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{
                            width: 300
                        }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.1, duration: 0.1 }
                        }}
                        className="bg-bgForContentFade "
                    >
                        <motion.div
                            className="container relative overflow-hidden h-full "
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            <motion.div className="bgEffect " variants={glideUp} initial="initial" animate="animate">
                                {/* <img className='absolute bottom-24 right-0 scale-[5]' src={wave} /> */}
                                <object className='absolute bottom-8 right-0 scale-[1.5]'  type="image/svg+xml" data={ExampleSVG}></object>
                            </motion.div>
                            {links.map((val) => (
                                <Link to={val.to}>
                                    <motion.div
                                        className='textGradient sideBarMenu'
                                        key={val.id}
                                        whileHover={{ scale: 1.1 }}
                                        variants={itemVariants}
                                        onClick={() => setshowMenu(!showMenu)}
                                    >
                                        {val.name}
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            <div className="btn-container fixed z-30">
                <button className='rounded-[50%] h-11 w-11 flex items-center justify-center' onClick={() => setshowMenu(!showMenu)}>{showMenu ? <MdClose /> : <GiHamburgerMenu />}</button>
            </div>
        </main>
    );
}

export default SideBar


