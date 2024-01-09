import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
import cloudsImage from "../../images/clouds.png";
// import cometImage from "../../images/comet.png";

// Define animations using keyframes
const moveTwinkBack = keyframes`
  from { background-position: 0 0; }
  to { background-position: -10000px 5000px; }
`;

const moveClouds = keyframes`
  0% { transform: translateX(0%) translateY(0%); }
  25% { transform: translateX(2.5%) translateY(-2%); }
  50% { transform: translateX(5%) translateY(2%); }
  75% { transform: translateX(7.5%) translateY(-1%); }
  100% { transform: translateX(10%) translateY(0%); }
`;

const generateFallAnimation = (startLeft, startTop, endLeft) => keyframes`
  from { transform: translate(${startLeft}vw, ${startTop}vh); opacity: 1; }
  to { transform: translate(${startLeft + endLeft}vw, 100vh); opacity: 0; }
`;

// Styled components
const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #000 url(${starsImage}) repeat top center;
  z-index: 1;
`;

const Twinkling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: transparent url(${twinklingImage}) repeat top center;
  z-index: 2;
  opacity: 1;
  animation: ${moveTwinkBack} 300s linear infinite;
`;

export const Clouds = styled.div`
  position: absolute;
  top: -1;
  left: 0;
  right: 0;
  bottom: -1;
  width: 100vm;
  max-width: 100%;
  height: 100%;
  background: transparent url(${cloudsImage}) repeat top center;
  z-index: 10; 
  opacity: 1;
  animation: ${moveClouds} 60s linear infinite;
  filter: brightness(1.2) contrast(1.1);
  console.log('Clouds component rendering');
`;

const StyledComet = styled.img`
  width: ${props => props.size}px;
  position: absolute;
  left: ${props => props.startLeft}vw; 
  top: ${props => props.startTop}vh;
  will-change: transform, opacity;
  animation: ${props => generateFallAnimation(props.startLeft, props.startTop, props.endLeft)}
    ${props => props.duration}s linear ${props => props.delay}s forwards;
`;

const FallingComet = ({ comet, cometImage }) => {
  // console.log("Rendering Comet:", comet, "With Image:", cometImage);

  return (
    <StyledComet
      src={cometImage}
      alt="Comet"
      size={comet.size}
      startLeft={comet.startLeft}
      startTop={comet.startTop}
      endLeft={comet.endLeft}
      duration={comet.duration}
      delay={comet.delay}
    />
  );
};


// Helper function to create random comet properties
const createRandomComet = () => {

  const comet = {
    
  }
  const randomValue = (min, max) => Math.random() * (max - min) + min;
  console.log("New Comet Created:", comet);
  return {

    id: Math.random(),
    size: randomValue(20, 100),
    startLeft: randomValue(0, 100),
    startTop: randomValue(-100, -50),
    endLeft: randomValue(-30, 30),
    duration: randomValue(5, 20),
    delay: randomValue(0, 20)
  };
};

// The main component
const TwinklingBackground = ({ saturnImage, neptuneImage, earthImage, cometImage }) => {
  // console.log("Saturn Image URL:", saturnImage);
  // console.log("Neptune Image URL:", neptuneImage);
  // console.log("Earth Image URL:", earthImage);
  // console.log("Comet Image URL:", cometImage);

  const [comets, setComets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setComets(currentComets => [...currentComets, createRandomComet()]);
    }, 2000); // Adjust interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContainer>
    <Stars />
    <Twinkling />
    <Clouds />
    {comets.map(comet => (
      <FallingComet 
        key={comet.id} 
        comet={comet} 
        cometImage="https://i.imgur.com/kW59Usj.png" // Hardcoded image for testing
      />
    ))}
      {/* console.log("Comet Image URL in TwinklingBackground:", cometImage); */}
      {/* Other images here */}
    </BackgroundContainer>

  );
};

export default TwinklingBackground;
