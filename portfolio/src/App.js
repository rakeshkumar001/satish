import './App.scss';
import './assets/styles/styles.scss'
import LoadingScreen from './Components/LoadingScreen';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './Routes/AnimatedRoutes';
import InitialTransition from './Components/InitialTransition';
import { AnimatePresence } from "framer-motion";
import SideBar from './Components/SideBar';

function App() {
  const [loadingScreen, setLoadingScreen] = useState(true)
  const [loadingCount, setLoadingCount] = useState(0)

  useEffect(() => {
    // counter from 1 to 100 
    countup(0, 100, 5000);
    function countup(start, end, time) {
      let i = start;
      let interval = setInterval(function () {
        if (++i < end) {
          setLoadingCount(i)
        } else {
          clearInterval(interval);
        }
      }, time / (end - start));
    }
    // set timeout to remove loading screen
    setTimeout(() => {
      setLoadingScreen(false)
    }, 12000);
  }, [loadingScreen])

  return (
    <AnimatePresence exitBeforeEnter={true} >
      <div className='App '>
        <ul className={`circles h-screen w-screen absolute ${!loadingScreen && 'loading_screen'}`}>
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
        </ul>
        <InitialTransition loadingCount={loadingCount} showloadingScreen={loadingScreen} />
        {!loadingScreen &&
          <div className="main-container h-screen w-screen z-20 absolute">
            <Router>
              <div className='absolute'>
                <SideBar />
              </div>
              <AnimatedRoutes />
            </Router>
          </div>
        }
      </div>
    </AnimatePresence>

  );
}

export default App;
