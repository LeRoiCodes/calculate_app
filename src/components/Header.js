import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
        <div className="header">
            <a href="#default" className="logo">LeRoiCalc</a>
            <div className="header-right">
            <a className="active" href="#home">Home</a>
            <a href="#contact">Calculate percentage</a>
            <a href="#about">Calculate gpa</a>
        </div>
    </div>
    </div>
  )
}

export default Header