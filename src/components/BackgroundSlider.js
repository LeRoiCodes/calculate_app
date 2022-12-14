import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Home from './Home'
// import images from  "./data"
import Header from './Header'

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5L0jXass-4wCYmXXBf3Cea4pf0STPUNfAInx13iN2Pw&s',
  'https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg?cs=srgb&dl=pexels-pixabay-221433.jpg&fm=jpg',
  'https://expertphotography.b-cdn.net/wp-content/uploads/2019/09/photography-quality-images-exposure-settings.jpg',
  'https://images.unsplash.com/photo-1566618501422-c23b8983e256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHF1YWxpdHl8ZW58MHx8MHx8&w=1000&q=80',
]

function BackgroundSlider() {
  const [data, setData] = useState(images)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < 0) {
      setIndex(data.length - 1)
    }
    if (index > data.length - 1) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [index])
  return (
    <div className='slider-container'>
      {data.map((image, imageIndex) => {
        let position = 'lastSlide'
        if (imageIndex === index) {
          position = 'activeSlide'
        }
        if (
          imageIndex === index - 1 &&
          index === 0 &&
          imageIndex === data.length - 1
        ) {
          position = 'nextSlide'
        }
        return (
          <div
            className={`bg ${position}`}
            key={new Date().getTime().toString()}
          >
            <img src={image} alt='' />
          </div>
        )
      })}
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default BackgroundSlider
