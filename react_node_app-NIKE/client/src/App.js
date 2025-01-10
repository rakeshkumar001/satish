
import AnimatedRoutes from './Routes/AnimatedRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './layouts/Header/Header';
import "./utils/themeToggler";
import Footer from './layouts/Footer/Footer';


function App() {
  return (
    <div className="main-container h-screen w-screen z-20 absolute overflow-x-hidden font-Poppins dark:text-white dark:bg-gray-900">
      <Router>
        <Header />
        <div className='h-[70px]'></div>
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
