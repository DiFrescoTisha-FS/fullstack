import styled from "styled-components";
// import backgroundImage from "../../images/single.png";
// import { SectionContainer } from '../SectionContainer'; 

export const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  min-height: 860px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-height: auto;
    padding: 50px 0;
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
  overflow: hidden;
  background: #000 url(${require("../../images/single.png")}) no-repeat center center;
  z-index: -1;

  @media screen and (max-width: 768px) {
    background: #000 url(${require("../../images/mobilesingle.png")}) no-repeat center center;
    background-size: cover; 
  }

  @media screen and (max-width: 480px) {
    /* Update the background image for mobile devices */
    background: #000 url(${require("../../images/mobilereverse.png")}) no-repeat center center; /* Replace 'mobile_image.png' with your mobile image's filename */
    background-size: cover; /* This will cover the available area */
  }
`;

export const MusicWrapper = styled.div`
  display: flex;
  align-items: center; // Vertically aligns children in the middle
  justify-content: center; // Horizontally centers children
  height: auto;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center; // Keeps content centered horizontally
    justify-content: center; // Keeps content centered vertically
    height: 100%; // Takes full height of the parent container
    padding: 50px 25px; // Adds padding to the top and bottom
  }
`;


export const MusicRow = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  max-width: 100%; // Allows it to fill the container on larger screens
  position: relative;

  @media screen and (max-width: 1024px) {
    max-width: 100%; // Full width on medium screens
  }

  @media screen and (max-width: 768px) {
    max-width: 100%; // Full width on smaller medium screens
    order: 1;
    padding: 0 24px; // Add padding to maintain some space around the text
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
  color: #e1affd;
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
  font-family: "Open Sans", sans-serif;


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
  margin-bottom: 28px;
`;

export const MusicDiv = styled.div`
  max-width: 455px; // Allows it to be as wide as possible on larger screens
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100%; // Full width on smaller medium screens
    order: 2;
  }
`;

export const MusicImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  max-width: 100%;
  height: auto;
  width: 80%; // Use a percentage of the width to make it responsive

  @media screen and (max-width: 768px) {
    width: 70%; // Adjust size for smaller screens if needed
  }

  @media screen and (max-width: 480px) {
    display: none; // Hide on very small screens
  }
`;

export const Music = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding-right: 0;
  border-radius: 10px;
  border: 2px solid #e1affd;

  @media screen and (max-width: 768px) {
    max-width: 85%; /* Full width for smaller screens */
    /* padding: 0 24px; */
    text-align: center; 
  }
`;
