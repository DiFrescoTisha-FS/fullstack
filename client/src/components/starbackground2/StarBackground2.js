import React from 'react'
import "../starbackground2/StarBackground2.css"

const StarBackground2 = () => {
  return (
    <div className="background-container">
      {/* Starry background */}
      <div className="stars"></div>
      
      {/* Twinkling effect */}
      <div className="twinkling"></div>

      {/* Planets or other elements go here */}
      {/* Example planet */}
          <img src="https://i.imgur.com/XyBATJD.png" alt="Planet" className="planet" style={{ right: '1050px', top: '100px' }} />
          <img src="https://i.imgur.com/5aEkLuY.png" alt="Planet" id="planet2" style={{ left: '1050px', top: '400px' }} />
          
      {/* You can add more planets with different inline styles or classes */}
      
      {/* Clouds moving in front of the stars and planets */}
      <div className="clouds"></div>
    </div>
  )
}

export default StarBackground2;
