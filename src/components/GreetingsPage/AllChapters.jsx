import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./GAllChapters.css"; // Import the CSS file
import Img from "./Assets/pch1.png";
import Img1 from "./Assets/pch2.png";
import Img2 from "./Assets/pch3.png";
import Img3 from "./Assets/pch4.png";
import Img4 from "./Assets/pch5.png";
import Img5 from "./Assets/pch6.png";
import Fcol from "./Assets/male-survvor.gif";
import Fscol from "./Assets/female-survvor.gif";

const ChapterOne = () => {
  const items = [
    { id: 1, imgSrc: "", title: "Surv!vor" },
    { id: 2, imgSrc: "", title: "Surv!vor" },
    { id: 3, imgSrc: "", title: "???" },
    { id: 4, imgSrc: "", title: "???" },
  ];

  return (
    <div className="Gcontainer">
      <div className="row-container">
        <h2>Chapter 1</h2>
        <h3>?an!c</h3>
        <Link to="/Chapter1">
        <div className="see-more Bch1">
          {/* <a href="#">Read the story</a> */}
        </div>
        </Link>

        <div className="items">
          {/* {items.map(item => ( */}
          <div className="item">
            <img className="fcol" src={Fscol} alt="Surv!vor" />
            <h2>♀Surv!vor</h2>
          </div>
          <div className="item">
            <img className="fcol" src={Fcol} alt="Surv!vor" />
            <h2>♂Surv!vor</h2>
          </div>
          <div className="item">
            <img className="asizeb" src={Img} alt="Surv!vor" />
            <h2>???</h2>
          </div>
          <div className="item">
            <img className="asizeb" src={Img} alt="Surv!vor" />
            <h2>???</h2>
          </div>
          {/* ))} */}
        </div>
      </div>
      <div className="row-container">
        <h2>Chapter 2</h2>
        <h3>?????????</h3>
        <Link to="/Chapter2">
        <div className="see-more Bch2">
          {/* <a href="#">Read the story</a> */}
        </div>
        </Link>
        <div className="items">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img className="asizebr" src={Img1} alt={item.title} />
              <h2>???</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="row-container">
        <h2>Chapter 3</h2>
        <h3>?????????</h3>
        <Link to="/Chapter3">
        <div className="see-more Bch3">
          {/* <a href="#">Read the story</a> */}
        </div>
        </Link>
        <div className="items">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img className="asizebr" src={Img2} alt={item.title} />
              <h2>???</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="row-container">
        <h2>Chapter 4</h2>
        <h3>?????????</h3>
        <Link to="/Chapter4">
        <div className="see-more Bch4">
          {/* <a href="#">Read the story</a> */}
        </div>
        </Link>
        <div className="items">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img className="asizebr" src={Img3} alt={item.title} />
              <h2>???</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="row-container">
        <h2>Chapter 5</h2>
        <h3>?????????</h3>
        <Link to="/Chapter5">
        <div className="see-more Bch5">
          {/* <a href="#">Read the story</a> */}
        </div>
        </Link>
        <div className="items">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img className="asizebr" src={Img4} alt={item.title} />
              <h2>???</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="row-container">
        <h2>Chapter 6</h2>
        <h3>?????????</h3>
        <Link to="/Chapter6">
        <div className="see-more Bch6">
          {/* <a href="#">Read the story</a> */}
        </div>
        </Link>

        <div className="items">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img className="asizebr" src={Img5} alt={item.title} />
              <h2>???</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterOne;
