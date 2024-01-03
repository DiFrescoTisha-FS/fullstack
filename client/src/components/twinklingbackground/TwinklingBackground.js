import React from 'react';
import styled, { keyframes } from 'styled-components';
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
import cloudsImage from "../../images/clouds.png";
// import CometImage from "../../images/cometImage.png";
// import neptuneImageMobile from "../../images/heroMobile.png";
import { SaturnImage, NeptuneImage, EarthImage } from '../hero/HeroElements';

const moveTwinkBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
`;

const moveClouds = keyframes`
  from { background-position: 0 0; }
  to { background-position: 10000px 0; }
`;

const fallComet = keyframes`
  0% {
    transform: translateX(-100vw) translateY(-50vh); // Start off-screen
    opacity: 1;
  }
  100% {
    transform: translateX(100vw) translateY(100vh); // Move across the screen
    opacity: 0;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1; /* Ensure this is below the ArtistBg */
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
  width: 100%;
  height: 100%;
  background: transparent url(${cloudsImage}) repeat top center;
  z-index: 10; 
  opacity: 1;
  animation: ${moveClouds} 1000s linear infinite;
  filter: brightness(1) contrast(1.1);

  /* @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  } */
`;

const Comet = styled.div`
  position: absolute;
  top: -50px; // Start off-screen or adjust
  left: 10%; // Start from the middle or adjust
  width: 30px; // Adjust size as necessary
  height: 30px; // Adjust size as necessary
  background: url('https://i.imgur.com/kW59Usj.png') no-repeat center center;
  background-size: cover;
  animation: ${fallComet} 5s linear infinite; // Adjust timing as necessary
  z-index: 50; // Ensure it's above the background but below other content
`;

const Comet2 = styled(Comet)`
  left: 50%; // Different starting position
  animation: ${fallComet} 12s linear infinite; // Slightly different timing
  width: 20px; // Adjust size as necessary
  height: 20px; // Adjust size as necessary
`;

const Comet3 = styled(Comet)`
  left: 90%; // Different starting position
  animation: ${fallComet} 8s linear infinite; // Slightly different timing
  width: 25px; // Adjust size as necessary
  height: 25px; // Adjust size as necessary
`;

/* export const CloudsVertical = styled(Clouds)`
  animation: ${moveCloudsVertical} 500s linear infinite;
`; */

/* export const CloudsDiagonal = styled(Clouds)`
  animation: ${moveCloudsDiagonal} 600s linear infinite;
`; */

// The main component
const TwinklingBackground = ({ saturnImage, neptuneImage, earthImage, neptuneImageMobile }) => (
  <BackgroundContainer>
    <Stars />
    <Twinkling />
    <Clouds />
    <Comet />
    <Comet2 />
    <Comet3 />
    {saturnImage && <SaturnImage src={saturnImage} alt="Saturn" />}
    {neptuneImage && (
  <NeptuneImage
    src={neptuneImage}
    mobileImage={neptuneImageMobile} // Pass the mobile image as a prop
    alt="Neptune"
  />
)}
    {earthImage && <EarthImage src={earthImage} alt="Earth" />}
    {/* {cometImage && <CometImage src={cometImage} alt="Comet" />} */}
  </BackgroundContainer>
);

export default TwinklingBackground;