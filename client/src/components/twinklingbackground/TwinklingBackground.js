import React from 'react';
import styled, { keyframes } from 'styled-components';
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
import cloudsImage from "../../images/clouds.png";
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
  animation: ${moveClouds} 600s linear infinite;
  filter: brightness(1.2) contrast(1.1); // Adjust as needed
`;


// The main component
const TwinklingBackground = ({ saturnImage, neptuneImage, earthImage, neptuneImageMobile }) => (
  <BackgroundContainer>
    <Stars />
    <Twinkling />
    <Clouds />
    {saturnImage && <SaturnImage src={saturnImage} alt="Saturn" />}
    {neptuneImage && (
  <NeptuneImage
    src={neptuneImage}
    mobileImage={neptuneImageMobile} // Pass the mobile image as a prop
    alt="Neptune"
  />
)}
    {earthImage && <EarthImage src={earthImage} alt="Earth" />}
  </BackgroundContainer>
);

export default TwinklingBackground;


