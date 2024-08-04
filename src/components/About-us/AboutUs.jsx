import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About us</h2>
      <div className="profile">
        <div className="profile-pic hitch"></div>
        <div className="profile-info">
          <h3>Hitch</h3>
          <p>Co-founder. Artist. Designer.</p>
          <p>–Pixel art, Concept making, Writing Story&Prose. Studied Design in Tokyo for 8 years, 2019 graduated Master's degree. Hitch has some prize competitions with handmade art books and graphic art in Tokyo.</p>
        </div>
      </div>
      <div className="profile">
        <div className="profile-pic spicyD"></div>
        <div className="profile-info">
          <h3>SpicyD</h3>
          <p>Co-founder. CTO.</p>
          <p>–Background in chemistry and over 20 years of experience in startup and innovation technologies. He is passionate about leveraging cutting–edge solutions to drive positive change and believes in technology's potential to advance Humanity.</p>
        </div>
      </div>
      <div className="profile">
        <div className="profile-pic spiral"></div>
        <div className="profile-info">
          <h3>Spiral</h3>
          <p>Collaboration Manager.</p>
          <p>–Spiral is our collaboration manager with a lot of passion and nostalgia for 8–bit games and consoles, particularly SEGA and Nintendo. Spiral expertise is connecting with fitting Web3 projects and organizing shared public AMA sessions and Twitter Spaces.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
