import styled, { keyframes } from 'styled-components';
import { FaRocket, FaArrowAltCircleDown } from 'react-icons/fa';

const maxWidth = '700px'; // Common max-width for various components

const moveCloud = keyframes`
  from {
    transform: translateX(calc(100% + 200px)); // Start from the right, off-screen (100% of the viewport width plus the cloud's width)
  }
  to {
    transform: translateX(-100%); // Move to the left, off-screen
  }
`;

// Hero Container
export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px; // Adjust as needed
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 50px 0; // Adjust padding as needed
    flex-direction: column;
    justify-content: center; // Centers content vertically in the column
    align-items: center; // Centers content horizontally in the column
    height: 100%; // Remove fixed height to allow content to determine height
  }

  @media screen and (max-width: 768px) {
    margin-top: 100px;
    padding: 50px 0; // Adjust padding as needed
    flex-direction: column;
    justify-content: center; // Centers content vertically in the column
    align-items: center; // Centers content horizontally in the column
    height: 100%; // Remove fixed height to allow content to determine height
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  z-index: -1;

  @media screen and (max-width: 768px) {
    background: url(${props => props.backgroundImageMobile}) no-repeat center center;
    background-size: cover;
    background-position: center 1px;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%);
      z-index: 3; // Above the background image but below the content
    } // Missing closing brace for &:after
  } // Missing closing brace for @media

  @media screen and (max-width: 480px) {
    background: url(${props => props.backgroundImageMobile}) no-repeat center center;
    background-size: cover;
    background-position: center 1px;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%);
      z-index: 3; // Above the background image but below the content
    } // Missing closing brace for &:after
  } // Missing closing brace for @media
`;
// Hero Content
export const HeroContent = styled.div`
  z-index: 22;
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
`;

// Paragraph within Hero Content
export const HeroP = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: ${maxWidth};
  width: 100%;


  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
  }
`;

export const SaturnImage = styled.img`
  position: absolute;
  top: 300px;
  right: 300px;
  z-index: 3;
  width: 50px;
  height: auto;

  // Hide Saturn on tablet and mobile views
  @media screen and (max-width: 768px) {
    width: 65px;
    top: 70%;
    left: 15%;
    transform: translateX(-50%);
  }
`;

export const NeptuneImage = styled.img`
  position: absolute;
  top: 60px;
  left: 100px;
  z-index: 3;
  width: 500px;
  height: auto;

  // Adjust Neptune size on tablet view
  @media screen and (max-width: 768px) {
    width: 350px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const EarthImage = styled.img`
  position: absolute;
  top: 500px;
  right: 400px;
  z-index: 3;
  width: 150px;
  height: auto;

  // Hide Earth on tablet and mobile views
  @media screen and (max-width: 768px) {
    width: 50px;
    left: 80%;
    transform: translateX(-50%);
  }
`;

export const CometImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: auto;
  z-index: 60; 


  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 480px) {
    display: block; // Show on mobile
  }
`;

export const CometImage2 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 150px;
  height: auto;
  z-index: 60; 


  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 480px) {
    display: block; // Show on mobile
  }
`;

export const CometImage3 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  height: auto;
  z-index: 60; 


  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 480px) {
    display: block; // Show on mobile
  }
`;


// Hero Button Wrapper
export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

// Icons
export const ArrowFilled = styled(FaRocket)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroCloud1 = styled.div`
  background: url("https://i.imgur.com/vOSGaAF.png") no-repeat;
  background-size: contain;
  width: 800px;
  height: 1300px;
  position: absolute;
  top: 20%;
  animation: ${moveCloud} 60s linear infinite; // Adjust time as needed for a complete cycle
  filter: brightness(0.15) blur(3px);
`;

export const HeroCloud2 = styled.div`
  background: url("http://pngimg.com/uploads/cloud/cloud_PNG24.png");
  width: 100%;
  height: 100%;
  top: 400px;
  position: absolute;
  background-repeat: no-repeat;
  transform: translateX(4px); /* Adjust as necessary to position on screen */
  animation: ${moveCloud} 120s infinite;
  animation-fill-mode: both;
  animation-delay: 2s; 
  filter: brightness(0.15) blur(3px);
`;

export const HeroCloud3 = styled.div`
  background: url("https://i.imgur.com/ouYtyE1.png");
  width: 100%;
  height: 100%;
  top: 300px;
  position: absolute;
  background-repeat: no-repeat;
  transform: translateX(90px); /* Adjust as necessary to position on screen */
  animation: ${moveCloud} 90s infinite;
  animation-fill-mode: both;
  animation-delay: 3s; 
  filter: brightness(0.15) blur(3px);
`;

export const HeroCloud4 = styled.div`
  background: url("https://i.imgur.com/Ex2kygq.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 75px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 170s infinite;
  filter: brightness(0.15) blur(3px);
  animation-delay: 4s; 
`;

export const HeroCloud5 = styled.div`
  background: url("https://i.imgur.com/874Clt6.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 400px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 150s infinite;
  filter: brightness(0.15) blur(3px);
  animation-delay: 2s; 
`;

export const HeroCloud6 = styled.div`
  background: url("https://i.imgur.com/MSGrJ9r.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 200px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 130s infinite;
  filter: brightness(0.15) blur(3px);
  animation-delay: 1s; 
`;
