import React, { useState } from 'react';
import './NavBar.css';
// import YelloMkp from './mktp.png'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
        {/* <a href="#" className="navbar-logo">Logo</a> */}
      <div className="navbar-container">
          <a href="#" className="Gmkt">
          {/* <div className='marketplc'></div> */}
          {/* <img src={YelloMkp} /> */}
            
          </a>
          <Link to='/Chapter1' className="Gcol">
          </Link>
          <a href="#" className="Gmint"></a>
          <a href="#" className="Gcon"></a>
        {/* <div className={`navbar-buttons ${menuOpen ? 'open' : ''}`}>
        </div>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          ☰
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
