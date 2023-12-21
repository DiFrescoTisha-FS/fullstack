import styled from "styled-components";
// import backgroundImage from "../../images/single.png";
// import { SectionContainer } from '../SectionContainer'; 

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
    min-height: auto; // Remove fixed height to allow content to determine height
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
    /* background: red; */
  }

  @media screen and (max-width: 480px) {
    background: url(${props => props.backgroundImageMobile}) no-repeat center center;
  }
`;

export const MusicWrapper = styled.div`
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
    align-items: center;
    justify-content: center;
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
  max-width: 100%; /* Default max-width */
  position: relative;
  margin-right: 28px; /* Adjust the value as needed */

  @media screen and (max-width: ${tabletBreakpoint}) {
    width: 100%; // To make the text take the full width of the container
    margin-bottom: 50px;
  }

  @media screen and (max-width: 480px) {
    order: 2; /* Text below the image for mobile */
    margin-right: 0; 
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
  max-width: 455px; // Set max-width to at least 455px
  height: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;

  @media screen and (max-width: ${tabletBreakpoint}) {
    width: 100%; // To make the image take the full width of the container
    margin-bottom: 16px; // Add some space between the image and the next element
  }

  @media screen and (max-width: 480px) {
    order: 2; /* Image on top for mobile */
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
    max-width: 100%; /* Full width for smaller screens */
    /* padding: 0 24px; */
    text-align: center; 
  }
`;
