import React from 'react'
import Calculator from './Calculator'
import Footer from './Footer'
import Header from './Header'
import './Page.css'

function Page() {
  return (
    <div className='page'>
        <Header />
        <Calculator />
        <Footer />
    </div>
  )
}

export default Page