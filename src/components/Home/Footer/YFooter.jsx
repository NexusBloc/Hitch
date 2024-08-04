import React from "react";
// import './Footer.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AboutUs from '../../About-us/AboutUs.jsx'

function Footer() {
  return (
    <div className="containerF">
      <div className="YbtnF btnxs">
        <a href="https://opensea.io" className=" pensea">
            
        </a>
        <a href="https://discord.gg/W3kFSWBYCy" className=" iscord"></a>

        <a href="https://x.com/PanicNFTs" className=" Xx"></a>
      </div>
      
      <div className="YbtnFo">
      
      <Link to='/AboutUs' className="Abu">
      </Link>
        
        <a href="mailto:panic@panicnft.xyz" className="Don"></a>
        
        <Link to='/QandA' className="QA"></Link>
      </div>


      <p className="Ycopywrite">&copy; Hitch2024</p>
    </div>
  );
}

export default Footer;
