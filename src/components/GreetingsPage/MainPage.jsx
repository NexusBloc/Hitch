import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./GMainPage.css";
// import Background from './Background'
// import Background from './panic_bg.png'
// import ThemeProvider from './ThemeContext';
// import { ThemeContext } from '../ThemeContext';
import ChapterOne from "./AllChapters";
import HitchBy from './Assets/byhitch1.PNG';


function MainPage() {


  return (
    <>
      <div className="Gcont">
      <div className="homenavs">
      <div className="homebtn"></div>
        <div className="btn">
          <a href="https://discord.gg/W3kFSWBYCy" className="discN">
          </a>
          <div className=" btn2">
          <Link to="/"><img src={HitchBy}/></Link>
          </div>
        </div>
      </div>
        <div className="Gintro">
          <p className='p' >
          Greetings, <br/>
          Hi, I'm Hitch. Creator of ?an!c,
            <br />
            <br />
            To all the dear fans, welcome to the ?ortal,
            Please join to our Discord channel.
            <br />
            <br />
            What is ?an!c-
-?an!c, we always have it in all our l!ves.
            <br />
            <br />
            After experiencing a life crisis in any form,
Our out look on life but the story continues.
            <br />
            <br />
            Beginning of the story "Surv!vors" are
characters that survived ?an!c.
            <br />
            <br />
            Let's start a journey with your character
            exploring new collections.
            <br />
            <br />
            Collect your characters and enter a journey of ?an!c stories.
          </p>
        </div>
        <ChapterOne />
      </div>
    </>
  );
}

export default MainPage;
