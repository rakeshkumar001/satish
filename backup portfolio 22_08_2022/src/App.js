import './App.scss';
import './assets/styles/styles.scss'
import LoadingScreen from './Components/LoadingScreen';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './Routes/AnimatedRoutes';
import { motion } from "framer-motion";
import { blackBox, text, textContainer, logoConfig } from "./Framer Motion/framerMotionConfigs"
import logo from "./assets/images/logo.svg";
import InitialTransition from './Components/InitialTransition';

function App() {
  const [loadingScreen, setLoadingScreen] = useState(true)
  const [loadingCount, setLoadingCount] = useState(0)

  // useEffect(() => {
  //   // counter from 1 to 100 
  //   countup(0, 100, 2000);
  //   function countup(start, end, time) {
  //     let i = start;
  //     let interval = setInterval(function () {
  //       if (++i < end) {
  //         setLoadingCount(i)
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, time / (end - start));
  //   }
  //   // set timeout to remove loading screen
  //   setTimeout(() => {
  //     setLoadingScreen(false)
  //   }, 5000);
  // }, [loadingScreen])


  return (
    <div className='App'>
      {/* <ul className={!loadingScreen ? "circles loading_screen" : "circles"}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
      <InitialTransition>
        {loadingScreen && <LoadingScreen loadingCountText={loadingCount} />}
      </InitialTransition>
      {!loadingScreen &&
        <div className="main-container">
          <Router>
            <AnimatedRoutes />
          </Router>
        </div>
      }
      <motion.div
        className=" fixed justify-center w-full h-full flex items-center justify-center"
        variants={blackBox}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
