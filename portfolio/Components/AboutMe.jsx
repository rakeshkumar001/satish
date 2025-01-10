import React from 'react';
import { Link } from "react-router-dom";
import { pageTransition } from "../Framer Motion/framerMotionConfigs";
import { CgScrollV } from "react-icons/cg";
import rocks from "../assets/images/aboutUs/rocks.png";
import forest from "../assets/images/aboutUs/forest.png";
import bird1 from "../assets/images/aboutUs/bird1.png";
import bird2 from "../assets/images/aboutUs/bird2.png";
import water from "../assets/images/aboutUs/water.png";
import {
    motion,
    useScroll,
    useTransform,
} from 'framer-motion';

function AboutMe() {
    const speed = 1 / 1.5;
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, (value) => value * speed);
    console.log(y, "<<<<<<<<<<")
    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className='about_me_wrapper h-full bg-blue w-full flex items-center justify-center overflow-x-hidden'
        >
            <div className='bg-fade-base-color h-screen'>
                <section className='landingPageEffect relative w-full h-screen flex justify-center items-center bg-bgForContent'>
                    <motion.div className="backgroundParallax h-full w-full">
                        <img className='absolute left-0 bottom-0 z-[1]' src={bird1} alt="" />
                        <img className='absolute left-0 bottom-0 z-[1]' src={bird2} alt="" />
                        <motion.div style={{ y: y * 5 }} className="absolute w-full h-full">
                            <motion.img className='absolute left-0 bottom-0 z-[2]' src={forest} alt="" />
                        </motion.div>
                        <motion.div style={{ y: y * 2 }} className="absolute w-full h-full">
                            <motion.img className='absolute left-0 bottom-10 z-[3]' src={rocks} alt="" />
                        </motion.div>
                        <img className='absolute left-0 bottom-0 z-[4]' src={water} alt="" />
                    </motion.div>
                    <h2 id="text" className=" text-primary text-center text-2xl leading-none fixed top-[5vh]">
                        Welcome to my
                        <motion.p  className='block text-[10vw] font-Caveat'>About Us</motion.p>
                    </h2>
                    <button className='rounded-lg flex absolute z-10 items-center justify-center primaryBtn translate-y-[100px] shadow-myBS'>Scroll Down <span className='ml-2'><CgScrollV /></span></button>
                    <div className='absolute bottom-0  z-10 h-44 w-full bg-gradient-to-t from-waterColor to-transparent'></div>
                </section>
                <section className='sec relative p-10 bg-waterColor text-white '>
                    <h2 className='text-4xl'>Parallax </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur adipisci nam officiis tempore illum in hic, rerum omnis sed modi et architecto laborum non magni quam quibusdam impedit officia.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur adipisci nam officiis tempore illum in hic, rerum omnis sed modi et architecto laborum non magni quam quibusdam impedit officia.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur adipisci nam officiis tempore illum in hic, rerum omnis sed modi et architecto laborum non magni quam quibusdam impedit officia.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur adipisci nam officiis tempore illum in hic, rerum omnis sed modi et architecto laborum non magni quam quibusdam impedit officia.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur adipisci nam officiis tempore illum in hic, rerum omnis sed modi et architecto laborum non magni quam quibusdam impedit officia.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur adipisci nam officiis tempore illum in hic, rerum omnis sed modi et architecto laborum non magni quam quibusdam impedit officia.</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur adipisci nam officiis tempore illum in hic, rerum omnis sed modi et architecto laborum non magni quam quibusdam impedit officia.</p>
                </section>
            </div>
        </motion.div>
    )
}

export default AboutMe