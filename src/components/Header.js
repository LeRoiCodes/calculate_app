import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu, IoClose } from 'react-icons/io5'

function Header() {
  const [view, setView] = useState(false)
  return (
    <div className='header-container'>
      <div className='header'>
        <Link to='/' className='home-logo'>
          LeRoiCalc
        </Link>

        <div
          className={`header-right ${view ? 'header-show' : 'header-hidden'}`}
        >
          <Link to='/'>Home</Link>
          <Link to='/gpa-calc'>Calculate percentage</Link>
          <Link to='/gpa-calc'>Calculate gpa</Link>
          <button className='close-btn' onClick={() => setView(false)}>
            <IoClose />
          </button>
        </div>
        <button onClick={() => setView(true)} className='menu'>
          <IoMenu />
        </button>
      </div>
    </div>
  )
}

export default Header
