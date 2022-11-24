import React, {useState, useEffect} from 'react'
import "./BackgroundSlider.css"
import Footer from './Footer';
import Home from './Home'
// import images from  "./data"
import Header from './Header';

function BackgroundSlider() {

    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5L0jXass-4wCYmXXBf3Cea4pf0STPUNfAInx13iN2Pw&s',
        'https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg?cs=srgb&dl=pexels-pixabay-221433.jpg&fm=jpg',
        'https://expertphotography.b-cdn.net/wp-content/uploads/2019/09/photography-quality-images-exposure-settings.jpg',
        'https://images.unsplash.com/photo-1566618501422-c23b8983e256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHF1YWxpdHl8ZW58MHx8MHx8&w=1000&q=80'
    ]

   const [istate, setIState] = useState(0); 
   useEffect(() => {
    const timer = setTimeout(() => {
        console.log(images[istate])
        if (istate === (images.length - 1)){
            
            setIState(0)
        } else{
            setIState(istate+1)
        }
        
    }, (10000))
    return () => clearTimeout(timer)
   }, [istate,images]);
   const bgImage = {
    backgroundImage: `url(${images[istate]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height:'100%'
   }

  return (
    <div className="container">
        <div className="" style={bgImage}>
        <Header />
        <Footer />
        <Home />
        </div>
        
    </div>
  )
}

export default BackgroundSlider