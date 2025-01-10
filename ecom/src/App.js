import './assets/styles/style.scss';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Login from './components/Login';
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from './Routes/RoutesComponent';

export const Auth = React.createContext();

function App() {
  const [theme, setTheme] = React.useState("light");
  const [loadLogin, setLoadLogin] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
 

  const changeTheme = (theme) => {
    setTheme(theme);
  }
  const loadLoginPage = (boolean) => {
    setLoadLogin(boolean)
  }
  const setAuth = (boolean) => {
    setIsLoggedIn(boolean)
  }

  return (
    <Auth.Provider value={isLoggedIn}>
      <Router>
        <div className={theme == "dark" ? "App dark_theme" : "App"}>
          <Header changeTheme={changeTheme} setAuth={setAuth} shouldLoginLoad={loadLogin} setLoadLogin={loadLoginPage} />
          <div className='main_body'>
            {
              loadLogin ?
                isLoggedIn ?
                  <RoutesComponent />
                  :
                  <Login loginClicked={setAuth} />
                :
                <LandingPage />
            }
          </div>
          <Footer />
        </div>
      </Router>
    </Auth.Provider>
  );
}

export default App;
