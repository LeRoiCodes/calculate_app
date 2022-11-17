import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
        <div class="header">
            <a href="#default" class="logo">LeRoiCalc</a>
            <div class="header-right">
            <a class="active" href="#home">Home</a>
            <a href="#contact">Calculate percentage</a>
            <a href="#about">Calculate gpa</a>
        </div>
    </div>
    </div>
  )
}

export default Header