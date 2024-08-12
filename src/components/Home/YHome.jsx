import React, { createContext, useState, useEffect } from 'react';

import "./YHome.css";
import Logo from "./Logo.png"
import Navbar from "./NavBar/YNavBar";
import MainPage from "./MainPage/YMainPage";
import Footer from "./Footer/YFooter";
// export const ThemeContext = createContext();


const Home = ({ children }) => {
  const [showWriteUp, setShowWriteUp] = useState(false);
  useEffect(() => {
    // Change body background color when the component is mounted
    document.body.style.backgroundColor = '#FFD21E';
    document.body.style.color = 'black'

    // Revert body background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';

    };
  }, []);


  const handleLogoClick = (e) => {
    e.preventDefault();
    setShowWriteUp(true);
  };

  const handleCloseClick = () => {
    setShowWriteUp(false);
  };


  return (
    
    // <div className={`containerFirst ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    
      <div className="YcontainerFirst">
      <Navbar />
      <div className="YheroSection">
      {!showWriteUp ? (
        <a href="." className="navbar-log" onClick={handleLogoClick}>
          <img className='logo' src={Logo}/>
        </a>
      ) : (
        <div className="write-up" onClick={handleCloseClick}>
          <p className="navbar-logo Yshow">–This is the moon, our dreamland.<br/> The land of free beings. <br/>
          One race with many identities. <br/>
          Let's tell their stories–
          </p>
          {/* <p className="navbar-logo show">One race with many identites.</p>
          <p className="navbar-logo show">Let's tell their stories-</p> */}
          
        </div>
      )}

        
      </div>
      <div className="YmainPage">
        <MainPage />
        <Footer />
      </div>
    </div>
    
  );
};

export default Home;
