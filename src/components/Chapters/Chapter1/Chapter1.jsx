import React, {useEffect} from 'react'
import './styles.css'
import Fcol from "../Assets/male-square48.gif";
import Fscol from "../Assets/female-square48.gif";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Chapter1() {
  useEffect(() => {
    // Change body background color when the component is mounted
    document.body.style.backgroundColor = '#ff501e';

    // Revert body background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  return (
    <div className="conta1">
     <div className="introP">
          <p>
            Chapter 1 – ?an!c
            <br />
            <br />
            <br />
            At the end of the centry,
            {/* <br /> */}
            ?an!c (?an!c) happened.
            <br />
            <br />
            Contours are blurry and clear,
            {/* <br /> */}
             a parallel universe becomes
pixelated.
            <br />
            <br />
            Ordinary incidents of daily life are
            <br />
            irreplaceable. <br /> They could break anywhere,
            {/* <br /> */}
            at any moment.
            <br />
            <br />
            Who does your life belong to ?
            <br />
            <br />
            The "Surv!vors" are planning to move
            to space.
            <br /><br />
            We are starting an adventure–
         
          </p>
        </div>
      <Link to="/"><div className='ch1backhome'></div></Link>
        <div className="CHcontainer">
      <div className="box">
        <img src={Fscol} alt="Survivor 1" className="image" />
        <p className="text">♀Surv!ver</p>
      </div>
      <div className="boxb">
        <img src={Fcol} alt="Survivor 2" className="image" />
        <p className="text">♂Surv!ver</p>
      </div>
    </div>
    </div>
  )
}

export default Chapter1