import React, { useState } from 'react';
import './YNavBar.css';
// import YelloMkp from './mktp.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="ynavbar">
        {/* <a href="#" className="navbar-logo">Logo</a> */}
      <div className="navbar-container">
          <a href="#" className="mkt ">
          {/* <div className='marketplc'></div> */}
          {/* <img src={YelloMkp} /> */}
            
          </a>
          <Link to='/Chapter1' className="col">
      </Link>
          
          <a href="#" className="mint"></a>
          <a href="#" className="con"></a>
        </div>
        {/* <div className={`navbar-buttons ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
