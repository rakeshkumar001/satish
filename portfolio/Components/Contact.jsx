import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransition, childItems, tickle, glideDown } from "../Framer Motion/framerMotionConfigs";
import Call_avatar from "../assets/images/casual-life-3d-man-using-laptop-and-talking-on-the-phone.png"
import contact_bg from "../assets/images/contact_bg.png";
import plane from "../assets/images/3d-fluency-paper-plane.png";
import loudSpeaker from "../assets/images/3d-fluency-commercial.png";
import chat from "../assets/images/3d-fluency-chat-message.png";
import envelope from "../assets/images/3d-fluency-opened-envelope.png";
import contact from "../assets/images/3d-fluency-address-book.png";
import DotPattern from "../assets/images/pink-watercolor-brushes.png";
import plant1 from "../assets/images/jaconda-plant-1.gif";

function Contact() {
  const parentContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
        delay: 2,
        when: "beforeChildren"
      }
    }
  }
  const childItemsIcon = {
    hidden: { opacity: 0, y: 100, x: 50 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring", stiffness: 200, duration: 0.2
      }
    },

  }
  return (
    <>
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className='overflow-hidden'
      >
        <div className="contactUsScreen h-screen  w-screen flex items-center justify-center p-5 md:p-8 lg:p-10  overflow-hidden mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <motion.div className='lg:bg-secondary  relative overflow-hidden  rounded-2xl grid grid-cols-1 h-full lg:grid-cols-2 threeD_card'>
            <motion.div className="hidden lg:block contact_bg absolute left-24 lg:left-52 h-2/4 w-[100vw] lg:h-full " initial={{ x: 300 }} animate={{ x: -350, transition: { delay: 1, duration: 5, type: "spring", stiffness: 100, } }} >
              <img src={contact_bg} className="h-full scale-110" alt="" />
            </motion.div>
            {/* LEFT SIDE */}
            <div className="flex text-white items-center justify-center  sm:flex-row-reverse lg:pl-10 mr-0 m-auto lg:mr-24 ">
              <div className='relative z-10  w-3/4 lg:w-full'>
                <motion.div variants={glideDown}>
                  <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold leading-tight mb-4 font-Caveat z-10 relative">
                    Let's talk !!
                  </h2>
                  <img className="absolute w-32 -top-10  z-0 -rotate-[20deg] scale-[170%] -left-8" src={DotPattern} alt="" />
                  <div className="text-gray-700  w-full">
                    To request a quote or want to meet  up for coffee. Contact me directly or fill out the form and I'll will get back to you promptly.
                  </div>
                  <div className="text-gray-700  w-full">
                    Hate forms? Send us an <span className="underline">email</span> instead.
                  </div>
                </motion.div>
                <div className="text-center w-full mt-0 md:mt-36 scale-[0.7] md:scale-100 top-14 md:top-0 relative">
                  <motion.div className="contact_icons relative z-10" variants={parentContainer} initial="hidden" animate="show">
                    <motion.span variants={childItemsIcon} className='w-12 absolute left-0 '><motion.img variants={tickle} initial="initial" whileHover="transition" className='drop-shadow-imgDropShadow full' src={chat} /></motion.span>
                    <motion.span variants={childItemsIcon} className='w-12 absolute left-10 -top-16'><motion.img variants={tickle} initial="initial" whileHover="transition" className='drop-shadow-imgDropShadow w-full' src={loudSpeaker} /></motion.span>
                    <motion.span variants={childItemsIcon} className='w-12 absolute left-28 -top-24'><motion.img variants={tickle} initial="initial" whileHover="transition" className='drop-shadow-imgDropShadow w-full' src={contact} /></motion.span>
                    <motion.span variants={childItemsIcon} className='w-12 absolute left-44 -top-16'><motion.img variants={tickle} initial="initial" whileHover="transition" className='drop-shadow-imgDropShadow w-full' src={plane} /></motion.span>
                    <motion.span variants={childItemsIcon} className='w-12 absolute left-60'><motion.img variants={tickle} initial="initial" whileHover="transition" className='drop-shadow-imgDropShadow w-full' src={envelope} /></motion.span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: [0.7, 1.2, 0.9, 1.1, 1], transition: { delay: 1, type: "spring", stiffness: 200, } }} className="plants" >
                    <motion.span><img className='w-24 drop-shadow-imgDropShadow absolute left-32 rotate-[30deg] -top-10' src={plant1} /></motion.span>
                    <motion.span><img className='w-24 drop-shadow-imgDropShadow absolute left-10 -rotate-[30deg] -top-10' src={plant1} /></motion.span>
                    <motion.img src={Call_avatar} className=" h-[200px] pl-16  my_dropShadow" alt="" />
                  </motion.div>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <motion.div className="flex bg-bgForContent items-center justify-center pl-0 lg:pl-24">
              <motion.div variants={parentContainer} initial="hidden" animate="show" transition={{ delay: 3 }} className='z-10 w-3/4'>
                <motion.div variants={childItems}>
                  <span className=" text-sm text-gray-600 font-Poppins">Full Name</span>
                  <input className="w-full bg-gray-300 text-gray-900 mt-2 p-2 md:p-3 rounded-lg focus:outline-none shadow-inputBoxShadow focus:shadow-innerShadow"
                    type="text" placeholder="" />
                </motion.div>
                <motion.div variants={childItems} className="mt-2 md:mt-8">
                  <span className=" text-sm text-gray-600 font-Poppins">Email</span>
                  <input className="w-full bg-gray-300 text-gray-900 mt-2 p-2 md:p-3 rounded-lg focus:outline-none shadow-inputBoxShadow focus:shadow-innerShadow"
                    type="text" />
                </motion.div>
                <motion.div variants={childItems} className="mt-2 md:mt-8">
                  <span className=" text-sm text-gray-600 font-Poppins">Message</span>
                  <textarea
                  placeholder='Type something if you want ....'
                    className="w-full h-24  bg-gray-300 text-gray-900 mt-2 p-2 md:p-3 rounded-lg focus:outline-none shadow-inputBoxShadow focus:shadow-innerShadow"></textarea>
                </motion.div>
                <motion.div variants={childItems} className="mt-4">
                  <Link to="/home">
                    <motion.button variants={childItems} whileHover={{ scale: [1, 0.9, 1.1, 1] }} className="text-gray  primaryBtn   md:right-auto mt-0 md:mt-4 lg:w-auto my-2 mx-0 border rounded md py-2 px-4  md:py-4 md:px-8 text-center bg-indigo-600 threeD_card text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                      Send Message
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact