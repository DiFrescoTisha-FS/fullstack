import styled, { keyframes } from "styled-components";

const moveCloud = keyframes`
  from {
    transform: translateX(1500px);
  }
  to {
    transform: translateX(-1100px);
  }
`;

const tabletBreakpoint = '768px'; 

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
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%);
      z-index: 3; // Above the background image but below the content
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
  flex-direction: row; // Ensure the direction is row by default
  width: 100%;

  @media screen and (max-width: ${tabletBreakpoint}) {
    flex-direction: column-reverse; // Stack them on top of each other, text first
    justify-content: center; // Centers content vertically
    align-items: center; // Centers content horizontally
  }
`;

export const TextWrapper = styled.div`
  max-width: 529px;
  width: 100%;
  position: relative;
  margin-right: 40px; // This ensures there is space between the text and the music player

  @media screen and (max-width: ${tabletBreakpoint}) {
    order: 1; // Ensure the text content appears before the music player on smaller screens
    margin-right: 0; // Reset margin since it will be full width
    margin-bottom: 50px; // Add some space below the text content
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
    font-size: 16px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  /* margin-bottom: 28px; */
`;

export const MusicDiv = styled.div`
  max-width: 455px;
  height: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;
  margin-right: 40px;

  @media screen and (max-width: ${tabletBreakpoint}) {
    width: 100%; // Full width on smaller screens
    order: 2; // Ensure the music player appears after the text content
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
    /* margin-right: 5px; */
  }
`;

export const MusicCloud1 = styled.div`
  background: url("https://i.imgur.com/1ZY7lOo.png");
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 120s infinite;
  filter: brightness(0.15) blur(3px);
`;

export const MusicCloud2 = styled.div`
  background: url("http://pngimg.com/uploads/cloud/cloud_PNG24.png");
  width: 100%;
  height: 100%;
  top: 100px;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 150s infinite;
  animation-delay: 1s; 
  filter: brightness(0.15) blur(3px);
`;

export const MusicCloud3 = styled.div`
  background: url("https://i.imgur.com/LMZ2p87.png");
  width: 100%;
  height: 100%;
  top: 300px;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 210s infinite;
  filter: brightness(0.15) blur(3px);
  animation-delay: 3s; 
`;

export const MusicCloud4 = styled.div`
  background: url("https://i.imgur.com/Ex2kygq.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 75px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 300s infinite;
  filter: brightness(0.2) blur(3px);
  animation-delay: 3s; 
`;

export const MusicCloud5 = styled.div`
  background: url("https://i.imgur.com/874Clt6.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 200px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 140s infinite;
  filter: brightness(0.1) blur(3px);
  animation-delay: 2s; 
`;

export const MusicCloud6 = styled.div`
  background: url("https://i.imgur.com/vOSGaAF.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top:200px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 160s infinite;
  filter: brightness(0.2) blur(3px);
  animation-delay: 3s; 
`;
