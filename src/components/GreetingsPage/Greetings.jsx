import React, { createContext, useState, useEffect } from 'react';

import "./Greetings.css";
import Logo from "./Assets/hero.gif"
import Navbar from "./NavBar";
import MainPage from "./MainPage";
import Footer from "./Footer";
// export const ThemeContext = createContext();



const Home = ({ children }) => {
  const [showWriteUp, setShowWriteUp] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const handleToggleClick = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setShowWriteUp(true);
  };

  const handleCloseClick = () => {
    setShowWriteUp(false);
  };
  useEffect(() => {
    // Change body background color when the component is mounted
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'yellow';

    // Revert body background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';

    };
  }, []);


  return (
    
    // <div className={`containerFirst ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    
      <div className="BcontainerFirst">
      <Navbar />
      <div className="heroSection">
      <div className="navbar-logo">
          <img className='logo' src={Logo}/>
        </div>

        
      </div>
      <div className="BmainPage">
        <MainPage />
        <Footer />
      </div>
    </div>
    
  );
};

export default Home;
