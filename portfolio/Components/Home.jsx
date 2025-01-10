import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { pageTransition, glideDown, fadeinPopout, parentContainer, childItems } from "../Framer Motion/framerMotionConfigs";
import { FaBell, FaThermometerHalf, FaBellSlash, FaBatteryHalf, FaCog, FaHome, FaUser, FaMailBulk, FaLayerGroup, FaPhone, FaLaptopCode, FaFileDownload, FaLinkedinIn, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import coffee_cup from "../assets/images/coffee_cup.png";
import stickyNotes from "../assets/images/stickyNotes.png";
import Blob from "../assets/images/blobanimation.svg"
import Hi_avatar from "../assets/images/casual-life-3d-side-view-of-young-man-wearing-smart-watch-and-holding-book.png"
import { Link } from 'react-router-dom';
import DotPattern from "../assets/images/pink-watercolor-brushes.png"
// import MotionConfig from '../Animation/MotionConfig';

function Home() {
  const [muteNotification, setMuteNotification] = useState(false)
  const [currentTime, setCurrentTime] = useState(null)
  const [currentDate, setCurrentDate] = useState(null)
  const [currentStatus, setCurrentStatus] = useState("Morning")
  // const [temperature, setTemperature] = useState(null)


  useEffect(() => {
    setCurrentDate(new Date().toDateString().split("2022")[0])
    // https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139
    // https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
    getCurrentTime();
    // getPosition();
  })

  // const getPosition = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   }
  //   function showPosition(position) {
  //     let Latitude = position.coords.latitude;
  //     let Longitude = position.coords.longitude;
  //     console.log(Latitude, Longitude, "Longitude")
  //   }
  //   return null
  // }
  const getCurrentTime = () => {
    setInterval(() => {
      let time = new Date().toLocaleTimeString();
      time.includes("PM") ? setCurrentStatus("Evening") : setCurrentStatus("Morning")
      setCurrentTime(time)
    }, 1000);
  }
  const slashMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "spring", stiffness: 200, y: 50 },
    hover: {
      y: 0, opacity: 1, transition: { delay: 0.2, type: "spring", stiffness: 200, duration: 1 }
    }
  }
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className='overflow-hidden'
    >
      <div className="home_wrapper  h-screen  w-screen flex items-center justify-center p-5 md:p-8 lg:p-10  overflow-hidden  ">
        <motion.div variants={fadeinPopout} className=" h-full w-full rounded-2xl bg-card p-5 overflow-hidden overflow-y-hidden threeD_card">
          {/* HEADER */}
          <motion.div variants={glideDown} className="header flex items-center justify-between">
            <div className='font-Caveat text-xs'><p className='font-semi-bold font-Poppins'>Good <span>{currentStatus}</span> !!.. <span className="inline-block ml-0 md:ml-3 date">{currentDate}</span></p></div>
            <div className=' flex items-center justify-between  font-Caveat text-xs'>
              <span className="notification cursor-pointer">{!muteNotification ? <FaBell onClick={() => setMuteNotification(!muteNotification)} /> : <FaBellSlash onClick={() => setMuteNotification(!muteNotification)} />}</span>
              <span className="time mx-3">{currentTime}</span>
              {/* <span className="temperature"> 29 &deg;C  <FaThermometerHalf className=' inline-block mr-3' /></span> */}
              <span className='text-lg'><FaBatteryHalf /></span>
            </div>
          </motion.div>
          {/* BODY */}
          <div className='main_body grid grid-cols-1 overflow-y-auto md:overflow-y--hidden lg:grid-cols-3 h-full'>
            <motion.div className='flex items-center'>
              <motion.ul class='circle-container mt-10 md:mt-28 lg:mt-0 h-full ' variants={parentContainer} initial="hidden" animate="show">
                <motion.li variants={childItems} >
                  <button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-gray hover:text-secondary ml-4 hover:border-primary  focus:outline-none font-medium rounded-lg text-[10px] lg:text-sm px-5 py-2.5 text-center relative left-[8%]  top-28 md:top-60  lg:top-0 lg:left-0 lg:mt-10 flex items-center hover:scale-110"><FaUser className='mr-2' /><Link to="/about_me">ABOUT</Link></button>
                </motion.li>
                <motion.li variants={childItems} >
                  <button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-gray hover:text-secondary ml-4 hover:border-primary  focus:outline-none font-medium rounded-lg text-[10px] lg:text-sm px-5 py-2.5 text-center relative left-[15%]  top-14 md:top-36 md:left-[20%]   lg:top-[25%] lg:-left-16 lg:mt-10  flex items-center hover:scale-110"><FaCog className='mr-2' /><Link to="/skills">SKILLS</Link></button>
                </motion.li>
                <motion.li variants={childItems} >
                  <button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-gray hover:text-secondary ml-4 hover:border-primary  focus:outline-none font-medium rounded-lg text-[10px] lg:text-sm px-5 py-2.5 text-center relative left-[30%] top-0  md:top-16 md:left-[45%]  lg:top-[50%] lg:-left-44 lg:mt-10  flex items-center hover:scale-110"><FaLaptopCode className='mr-2' /> <Link to="/experience">EXPERIENCE</Link></button>
                </motion.li>
                <motion.li variants={childItems} >
                  <button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-gray hover:text-secondary ml-4 hover:border-primary  focus:outline-none font-medium rounded-lg text-[10px] lg:text-sm px-5 py-2.5 text-center relative left-[55%] top-14 md:top-36 md:left-[70%]    lg:top-[75%] lg:-left-28 lg:mt-10  flex items-center hover:scale-110"><FaMailBulk className='mr-2' /> <Link to="/contact">CONTACT ME</Link></button>
                </motion.li>
                <motion.li variants={childItems} >
                  <button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-gray hover:text-secondary ml-4 hover:border-primary  focus:outline-none font-medium rounded-lg text-[10px] lg:text-sm px-5 py-2.5 text-center relative left-[65%] top-28 md:top-60 md:left-[85%]  lg:top-[100%] lg:left-0 lg:mt-10  flex items-center hover:scale-110"><FaLayerGroup className='mr-2' /><Link to="/my_works">WORKS</Link></button>
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div className='flex items-center h-44 lg:h-full'>
              <div className="center_image w-full h-full relative md:my-10 ">
                <object className='absolute z-10 md:h-[250%] lg:h-full w-full left-0 flex items-center -top-12 scale-[100%] md:scale-[100%] md:-top-36 lg:-top-0 lg:scale-[100%] ' type="image/svg+xml" data={Blob}>svg-animation</object>
                <div className="h-full flex items-center justify-center w-full absolute z-50 ">
                  <motion.img src={Hi_avatar} initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [0.5, 1.3, 0.9, 1.1], transition: { delay: 1, type: "spring", stiffness: 200, } }} className=" h-[200px] md:h-[300px] w-300  my_dropShadow" alt="" />
                  <motion.span animate={{ opacity: 0, transition: { delay: 4, duration: 0.5 } }}>
                    <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 2, type: "spring", stiffness: 200, duration: 1 } }} className='speech-bubble absolute left-12  md:left-44 -top-10 md:-top-16 lg:top-10 lg:left-10 shadow-myBS font-bold'>Oh... Hi !!!</motion.span>
                  </motion.span>
                  <motion.span animate={{ opacity: 0, transition: { delay: 8, duration: 0.5 } }}>
                    <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 5, type: "spring", stiffness: 200, duration: 1 } }} className='speech-bubble absolute left-12  md:left-44 -top-10 md:-top-16 lg:top-10 lg:left-10 shadow-myBS font-bold'>Welcome</motion.span>
                  </motion.span>
                  <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 9, type: "spring", stiffness: 200, duration: 1 } }} className='speech-bubble absolute left-12  md:left-44 -top-10 md:-top-16 lg:top-10 lg:left-10 shadow-myBS font-bold max-w-["160px"] break-normal'>Welcome to my <br /><strong className='text-secondary'>PORTFOLIO..</strong></motion.span>
                </div>
              </div>
            </motion.div>
            <motion.div className='flex items-center '>
              <motion.div className="my_info ml-3 px-2 h-3/4 w-full mt-24 lg:mt-0">
                <motion.div className="relative" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 1, type: "spring", stiffness: 200, } }} >
                  <h1 className='text-[25px] md:text-[35px] font-bold font-Poppins text-primary relative z-10 drop-shadow-md'>{"<"} RAKESH KUMAR {'/>'}</h1>
                  <img className="absolute w-32 -top-10  z-0 -rotate-[20deg] scale-[170%] -left-8" src={DotPattern} alt="" />
                </motion.div>
                <motion.p className='whitespace-normal text-baseTextColor font-Poppins text-sm mt-2' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.2, type: "spring", stiffness: 200, } }}>
                  Senior Software Developer with 5+ years of experience [ REACT JS | Redux | HTML | CSS | JS | GIT | JIRA , etc. ] in
                  building responsive websites for various Telecom, Hospitals, Real-estates and Investment sector industries. Proficient with CSS ,
                  Flexbox ,SASS and other JS Frameworks/ plugins with good knowledge of UX too.
                </motion.p>
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.5, duration: 0.5, type: "spring", stiffness: 200, } }}>
                  <motion.button type="button" whileHover={{ scale: [1, 0.9, 1.1, 1] }} class="text-gray hover:text-secondary mt-5 hover:border-primary  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center">
                    <FaFileDownload className='mr-2' />Download Resume
                  </motion.button>
                </motion.div>
                <div className="socialIcons mt-10 mb-24 md:mb-0">
                  <p className='text-sm text-secondary font-semi-bold font-Poppins'>Find me in...</p>
                  <motion.ul className=" flex items-start" variants={parentContainer} initial="hidden" animate="show">
                    <motion.li className='mr-5' variants={childItems} hover="hover">
                      <motion.button whileHover={{ scale: [1, 0.8, 1.3, 1], duration: 0.2 }} type="button" class=" hover:text-secondary mt-5 hover:scale-110 hover:border-primary  focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center flex items-center">
                        <FaLinkedinIn />
                      </motion.button>
                    </motion.li>
                    <motion.li className='mr-5' variants={childItems}>
                      <motion.button whileHover={{ scale: [1, 0.8, 1.3, 1], duration: 0.2 }} type="button" class=" hover:text-secondary mt-5 hover:scale-110 hover:border-primary  focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center flex items-center">
                        <FaInstagram />
                      </motion.button>
                    </motion.li>
                    <motion.li className='mr-5' variants={childItems}>
                      <motion.button whileHover={{ scale: [1, 0.8, 1.3, 1], duration: 0.2 }} type="button" class=" hover:text-secondary mt-5 hover:scale-110 hover:border-primary  focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center flex items-center">
                        <FaGooglePlusG />
                      </motion.button>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="overlay_vectorImage fixed w-screen">
        <motion.span initial={{ y: 500 }} animate={{ y: 0, transition: { delay: 2, duration: 0.5, type: "spring", stiffness: 100, } }} className="absolute  -bottom-[20px] -right-10 md:-right-12 w-[150px] md:w-[200px]">
          <motion.img src={coffee_cup} alt="" className='origin-bottom -rotate-[20deg] w-full' animate={{ y: [0, -10, 0, 10, 0], rotate: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
          <motion.div variants={slashMotion} className="absolute h-full w-full top-0 cursor-pointer" initial="rest" whileHover="hover" animate="rest">
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1, type: "spring", stiffness: 200, duration: 1 } }} className='speech-bubble absolute -left-24 md:-left-[100px] -top-20 md:top-34 shadow-myBS text-sm font-normal font-Poppins w-[200px]'>Wanna grab a cup of coffee ?</motion.span>
          </motion.div>
        </motion.span>
        <motion.span initial={{ x: -200 }} animate={{ x: 0, transition: { delay: 3, duration: 0.5, type: "spring", stiffness: 100, } }} className='absolute bottom-0 left-0 w-[80px] md:w-[140px] '>
          <motion.div animate={{ y: [0, -10, 0, 10, 0], rotate: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="flex justify-center items-center ">
            <motion.p className='absolute z-10 w-[70px] h-[30px] rounded-lg  top-5 md:top-12 text-[11px] md:text-xs left-[18px] md:left-[50px] cursor-pointer ' whileHover={{ scale: 1.2, rotate: 20 }}>
              Wanna Hire me ??
            </motion.p>
            <motion.img src={stickyNotes} alt="" className='origin-center rotate-[15deg] w-full' />
          </motion.div>
        </motion.span>
      </div>
    </motion.div>
  )
}

export default Home