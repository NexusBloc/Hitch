import React from 'react';
import './AboutUs.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About us</h2>
      <div className="profile">
        <div className="profile-pic hitch"></div>
        <div className="profile-info">
          <h3>Hitch</h3>
          <p>Co–founder, artist, and storyteller.</p>
          <p>With a Master's degree in
Design from Tokyo and a knack for creating award-winning art,
Hitch brings the Panic universe to life.</p>
        </div>
      </div>
      <div className="profile">
        <div className="profile-pic spicyD"></div>
        <div className="profile-info">
          <h3>SpicyD</h3>
          <p>Co–founder. CTO.</p>
          <p>With a background in chemistry and over
20 years of experience in tech startups. Passionate about using
cutting–edge solutions to drive positive change.</p>
        </div>
      </div>
      <div className="profile">
        <div className="profile-pic spiral"></div>
        <div className="profile-info">
          <h3>Spiral</h3>
          <p>Collaboration Manager.</p>
          <p>With a love for 8–bit games. Expert in
connecting with Web3 projects and organizing community
events.</p>
        </div>
      </div>
      <Link to="/"><div className='ch1backhome1'></div></Link>
    </div>
  );
};

export default AboutUs;
