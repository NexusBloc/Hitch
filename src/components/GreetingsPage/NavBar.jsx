import React, { useState } from 'react';
import './NavBar.css';
// import YelloMkp from './mktp.png'


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
          <a href="#" className="Gcol"></a>
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
