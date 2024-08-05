import React, {useEffect} from 'react'
import './styles.css'
import Fcol from "../Assets/male-square48.gif";
import Fscol from "../Assets/female-square48.gif";


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
            Chapter 1 - ?an!c
            <br />
            <br />
            At the end of the centry,
            ?an!c ( Panic ) happened.
            <br />
            <br />
            Ordinary incidents of daily life are
            irreplaceable. They could break anywhere, 
            at any moment.
            <br />
            <br />
            Who does your life belong to ?

            The "Surv!vors" are planning to move
            to space.
            We are starting an adventure-
         
          </p>
        </div>
        <div className="CHcontainer">
      <div className="box">
        <img src={Fcol} alt="Survivor 1" className="image" />
        <p className="text">♀Survivor</p>
      </div>
      <div className="boxb">
        <img src={Fscol} alt="Survivor 2" className="image" />
        <p className="text">♂Survivor</p>
      </div>
    </div>
    </div>
  )
}

export default Chapter1