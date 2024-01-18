import styled, { keyframes } from "styled-components";
// import backgroundImage from "../../images/single.png";
// import { SectionContainer } from '../SectionContainer'; 

const tabletBreakpoint = '768px'; 

const moveCloud = keyframes`
  from {
    transform: translateX(calc(100% + 200px)); // Start from the right, off-screen (100% of the viewport width plus the cloud's width)
  }
  to {
    transform: translateX(-100%); // Move to the left, off-screen
  }
`;

export const MusicContainer = styled.div`
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
`;

export const MusicBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.backgroundImageDesktop}) no-repeat center center;
  background-size: cover;
  z-index: 2; // Above the TwinklingBackground

  @media screen and (max-width: 768px) {
    background: url(${props => props.backgroundImageTablet}) no-repeat center center;
    background-size: cover;
    background-position: center 1px;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%);
      z-index: 3; // Above the background image but below the content
    } // Missing closing brace added here
  }

  @media screen and (max-width: 480px) {
    background: url(${props => props.backgroundImageMobile}) no-repeat center center;
    background-size: cover;
    background-position: center 1px;
    
    &:after {
      /* content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%);
      z-index: 3; */
      
    } // Missing closing brace added here
  }
`;


export const MusicWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2; // Above the planet image

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MusicRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${tabletBreakpoint}) {
    flex-direction: column;
    justify-content: center; // Centers content vertically
    align-items: center; // Centers content horizontally
  }

  @media screen and (max-width: 480px) {
    flex-direction: column; /* Stack them on top of each other on mobile */
  }
`;


export const TextWrapper = styled.div`
  max-width: 529px; // Explicitly setting the max-width
  width: 100%; // Ensures it takes the full width of the parent
  position: relative;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    max-width: 50%; // Adjust the max-width to fit the other half of the container
    order: 1;
    margin-bottom: 50px; // Moves the text to the left side
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%; /* Full width for smaller screens */
    padding: 0 32px;
    text-align: center; 
    margin-right: 16px;
  }
`;
    
export const TopLine = styled.p`
  font-size: 18px;
  color: #fff;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: left;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  color: #ac94f4;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 30px;
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 26px;
  color: #fff;
  text-align: left;


  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  /* margin-bottom: 28px; */
`;

export const MusicDiv = styled.div`
  max-width: 455px; // Set max-width to at least 455px
  height: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;
  /* order: 1; */

  @media screen and (max-width: ${tabletBreakpoint}) {
    width: 100%;
    height: 440px; // To make the image take the full width of the container
    margin-bottom: 16px;
    order: 2; // Add some space between the image and the next element
  }

  @media screen and (max-width: 480px) {
    order: 2; /* Image on top for mobile */
  }
`;


export const Music = styled.div`
  width: 455px; // Fixed width of 455px
  height: auto; // Maintain aspect ratio
  position: relative;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;

@media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MusicCloud1 = styled.div`
  background: url("https://i.imgur.com/os3kDfx.png") no-repeat;
  background-size: contain;
  max-width: 600px;
  height: 50%;
  position: absolute;
  top: 5%;
  left: 0;
  animation: ${moveCloud} 10s linear infinite;
  background-repeat: no-repeat;
  /* animation-delay: 2s; */
  filter: brightness(0.2) blur(3px);
`;

export const MusicCloud2 = styled.div`
  background: url("https://i.imgur.com/os3kDfx.png") no-repeat;
  position: absolute;
  top: 10%;
  left: 0;
  background-size: contain;
  width:50%;
  height: 50%;
  animation: ${moveCloud} 90s linear infinite;
  animation-delay: 2s;
  filter: brightness(0.15) blur(3px);
`;

export const MusicCloud3 = styled.div`
  background: url("https://i.imgur.com/os3kDfx.png") no-repeat;
  position: absolute;
  top: 10%;
  left: 0;
  background-size: contain;
  width:100%;
  height:100%;
  animation: ${moveCloud} 75s linear infinite;
  animation-delay: 3s;
  filter: brightness(0.2) blur(3px);
  z-index: 200;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MusicCloud4 = styled.div`
  background: url("https://i.imgur.com/vOSGaAF.png") no-repeat;
  background-size: contain;
  width: 800px;
  height: 50%;
  position: absolute;
  top: 20%;
  left: 0;
  animation: ${moveCloud} 50s linear infinite;
  background-repeat: no-repeat;
  animation-delay: 2s;
  filter: brightness(0.2) blur(3px);
`;

export const MusicCloud5 = styled.div`
  background: url("https://i.imgur.com/FRbxCcc.png") no-repeat;
  position: absolute;
  top: 10%;
  left: 0;
  background-size: contain;
  width: 100%;
  height: 50%;
  animation: ${moveCloud} 100s linear infinite;
  animation-delay: 2s;
  filter: brightness(0.2) blur(3px);
`;

export const MusicCloud6 = styled.div`
  background: url("https://i.imgur.com/os3kDfx.png") no-repeat;
  position: absolute;
  /* top: 15%; */
  top: 10%;
  left: 0;
  background-size: contain;
  width:100%;
  height:50%;
  animation: ${moveCloud} 75s linear infinite;
  animation-delay: 3s;
  filter: brightness(0.2) blur(3px);

  @media screen and (max-width: 480px) {
    display: none;
  }
`;