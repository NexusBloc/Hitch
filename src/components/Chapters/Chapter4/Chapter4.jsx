import React from 'react'
import './styles.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Chapter4() {
  return (
    <div className="conta4">
      <Link to="/"><div className='backhome'></div></Link>
    </div>
  )
}

export default Chapter4