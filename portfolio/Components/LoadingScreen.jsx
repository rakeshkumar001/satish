import React from 'react';
import { motion } from "framer-motion";

export default function LoadingScreen({ loadingCountText }) {

    const loading = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring", stiffness: 100,
                delay: 1
            },
        },
    }
    return (
        <div className="loading_screen_wrap text-center h-full w-full absolute flex items-center justify-center" >
            <div className="loading">
                <motion.div animate={{ opacity: 0, y: 100, transition: { delay: 5.5, duration: 1 } }}>
                    <motion.div variants={loading} initial="initial" animate="animate" >
                        <div className="loading-content mt-44">
                            <div className="loading-text text-sm">
                                <span className="loading-text-words">L</span>
                                <span className="loading-text-words">O</span>
                                <span className="loading-text-words">A</span>
                                <span className="loading-text-words">D</span>
                                <span className="loading-text-words">I</span>
                                <span className="loading-text-words">N</span>
                                <span className="loading-text-words">G</span>
                                <span className="loading-text-words">.</span>
                                <span className="loading-text-words">.</span>
                                <span className="loading-text-words">.</span>
                            </div>
                            <motion.div variants={loading} initial="initial"
                                animate={{
                                    opacity: 1,
                                    y: -20,
                                    transition: {
                                        type: "spring", stiffness: 100
                                    },
                                }} >
                                <p className="loadingText text-white text-center font-Poppins font-thin text-2xl">{loadingCountText}%</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div >
    )
}
