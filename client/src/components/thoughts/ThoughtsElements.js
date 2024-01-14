import styled, { keyframes }  from "styled-components";
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { MdFrontHand } from 'react-icons/md';
import { Link } from 'react-scroll';

const tabletBreakpoint = '768px'; 

const moveCloud = keyframes`
  from {
    transform: translateX(calc(100% + 200px)); // Start from the right, off-screen (100% of the viewport width plus the cloud's width)
  }
  to {
    transform: translateX(-100%); // Move to the left, off-screen
  }
`;

export const ThoughtsContainer = styled.div`
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
    min-height: auto; // Remove fixed height to allow content to determine height
  }
`;

export const ThoughtsBg = styled.div`
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
    /* background: red; */
  }

  @media screen and (max-width: 480px) {
    background: url(${props => props.backgroundImageMobile}) no-repeat center center;
  }
`;

export const ThoughtsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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


export const ThoughtsRow = styled.div`
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

export const TrapstarText = styled.p`
color: #fff;
font-size: 16px;
font-weight: 500;
margin-top: 12px;
text-align: left;
`;

export const ImgWrap = styled.div`
  max-width: 455px; // Set max-width to at least 455px
  height: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;

  @media screen and (max-width: ${tabletBreakpoint}) {
    width: 100%; // To make the image take the full width of the container
    margin-bottom: 16px; 
    order: 1;// Add some space between the image and the next element
  }

  @media screen and (max-width: 480px) {
    order: 1; /* Image on top for mobile */
  }
`;

export const TextWrapper = styled.div`
  max-width: 529px; // Explicitly setting the max-width
  width: 100%; // Ensures it takes the full width of the parent
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 50%; // Adjust the max-width to fit the other half of the container
    order: 1;
    margin-bottom: 50px; // Moves the text to the left side
  }

  @media screen and (max-width: 768px) {
    max-width: 100%; /* Full width for smaller screens */
    padding: 0 32px;
    text-align: center; 
    margin-right: 16px;
  }
`;


export const Img = styled.img`
  width: 455px; // Fixed width of 455px
  height: auto; // Maintain aspect ratio
  position: relative;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;
`;

export const TopLine = styled.p`
    color: #fff;
    font-size: 18px;
    position: relative;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 16px;
    text-align: left;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    color: #ac94f4;
    font-size: 44px;
    line-height: 1.1;
    font-weight: 600;
    text-align: left; 

  @media screen and (max-width: 768) {
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
  font-size: 18px;
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
  text-decoration: none;
`;

export const Button = styled(Link)`
    margin-top: 10px;
`;

export const ArrowFilled = styled(MdFrontHand)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleUp)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ThoughtsCloud1 = styled.div`
  background: url("https://i.imgur.com/vOSGaAF.png") no-repeat;
  background-size: contain;
  width: 800px;
  height: 1300px;
  position: absolute;
  top: 5%;
  animation: ${moveCloud} 250s linear infinite; // Adjust time as needed for a complete cycle
  filter: brightness(0.1) blur(3px);
`;

export const ThoughtsCloud2 = styled.div`
  background: url("http://pngimg.com/uploads/cloud/cloud_PNG24.png");
  width: 100%;
  height: 100%;
  top: 350px;
  position: absolute;
  background-repeat: no-repeat;
  transform: translateX(4px); /* Adjust as necessary to position on screen */
  animation: ${moveCloud} 210s infinite;
  animation-fill-mode: both;
  animation-delay: 2s; 
  filter: brightness(0.15) blur(3px);
`;

export const ThoughtsCloud3 = styled.div`
  background: url("https://i.imgur.com/ouYtyE1.png");
  width: 100%;
  height: 100%;
  top: 300px;
  position: absolute;
  background-repeat: no-repeat;
  transform: translateX(90px); /* Adjust as necessary to position on screen */
  animation: ${moveCloud} 240s infinite;
  animation-fill-mode: both;
  animation-delay: 3s; 
  filter: brightness(0.15) blur(3px);
`;

export const ThoughtsCloud4 = styled.div`
  background: url("https://i.imgur.com/Ex2kygq.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 75px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 200s infinite;
  filter: brightness(0.1) blur(3px);
  animation-delay: 4s; 
`;

export const ThoughtsCloud5 = styled.div`
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

export const ThoughtsCloud6 = styled.div`
  background: url("https://i.imgur.com/vOSGaAF.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 200px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 170s infinite;
  filter: brightness(0.2) blur(3px);
  animation-delay: 1s; 
`;
