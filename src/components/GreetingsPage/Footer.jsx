import React from "react";
// import './Footer.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="GcontainerF">
      <div className="GbtnF">
        <a href="https://opensea.io" className=" pensea">
            
        </a>
        <a href="https://discord.gg/W3kFSWBYCy" className=" iscord"></a>

        <a href="https://x.com/PanicNFTs" className=" Xx"></a>
      </div>
      
      <div className="GbtnFo">
      <Link to='/AboutUs' className="Abu">
      </Link>
          
        
        <a href="mailto:panic@panicnft.xyz" className="Don"></a>

        <a href="." className=" QA"></a>
      </div>


      <p className="copywrite">&copy; Hitch2024</p>
    </div>
  );
}

export default Footer;
