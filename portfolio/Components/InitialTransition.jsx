import React from 'react';
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import LoadingScreen from './LoadingScreen';
import { parentContainer, childItems } from "../Framer Motion/framerMotionConfigs";


function InitialTransition({ loadingCount, showloadingScreen }) {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      bottom: -1000,
      transition: {
        when: "afterChildren",
        duration: 3,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    closed: {
      display: 'none',
    }
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0.1,
      scale: [1, 10],
      transition: {
        delay:5,
        duration: 5,
        when: "afterChildren",
      },
    },
    exit: {
      scale: [0],
      height: 0,
    }
  };
  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const info = {
    initial: {
      opacity: 0,
      y: -100
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring", stiffness: 100,
        delay: 1,
      },

    },
    exit: {
      transition: {
        y: -100,
        opacity: 0,
        duration: 1
      }
    },
    hidden: { opacity: 0 },
  }


  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute z-1 flex items-center justify-center w-full bg-gradient-to-tr from-secondary to-primary"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <motion.div variants={info} className="myself_intro min-w-400 absolute top-20 flex justify-between items-baseline ">
          <p className=' text-white justify-center text-[15px] md:text-[20px] font-bold'> Hi, Myself . . .</p>
          <AnimatedText />
        </motion.div>
        {/* PORTFOLIO */}
        <motion.div variants={textContainer}>
          <motion.h1
            style={{ display: "flex", overflow: "hidden" }}
            variants={parentContainer}
            initial="hidden" animate="show"
            className="p-10"
          >
            {["P", "O", "R", "T", "F", "O", "L", "I", "O"].map((letter, index) => (
              <motion.span key={index} variants={childItems} className="text-5xl font-bold text-white">
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        {/* <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
          >
            <rect className="w-full h-full fill-white" />
            <motion.rect variants={text} className="w-full h-full text-[primary] fill-white" />
          </pattern>
          <motion.text
            className="text-5xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, type: "spring", stiffness: 100 } }}
          >
          </motion.text>
        </motion.svg> */}
      </motion.div>
      {showloadingScreen && <LoadingScreen loadingCountText={loadingCount} />}
    </div>
  )
}

export default InitialTransition