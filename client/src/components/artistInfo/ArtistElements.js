import styled from "styled-components";
import { FaArrowAltCircleDown, FaBusAlt } from 'react-icons/fa';
import { MusicWrapper } from "../music/MusicElements";
import { Link } from 'react-scroll';

const tabletBreakpoint = '768px'; 

export const ArtistInfoContainer = styled.div`
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

export const ArtistBg = styled.div`
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
  /* background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%), url(${props => props.backgroundImageMobile}); */


  @media screen and (max-width: 768px) {
    background: url(${props => props.backgroundImageTablet}) no-repeat center center;
    background-size: cover;
    background-position: center 1px; // Adjust this to shift the background slightly

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%);
      z-index: 3; // Above the background image but below the content
    }
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
    }// Adjust this to shift the background slightly
  }

`;

export const ArtistInfoWrapper = styled(MusicWrapper)`
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

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


export const ArtistInfoRow = styled.div`
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

export const ImgWrap = styled.div`
  max-width: 455px; // Set max-width to at least 455px
  height: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;
  margin-left: 20px;

  @media screen and (max-width: ${tabletBreakpoint}) {
    width: 100%; // To make the image take the full width of the container
    margin-bottom: 16px; 
    order: 1;
    margin-left: 0; /* Reset for smaller screens if needed */
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    order: 1; /* Image on top for mobile */
  }
`;

export const TextWrapper = styled.div`
  max-width: 529px; // Explicitly setting the max-width
  width: 100%; // Ensures it takes the full width of the parent
  position: relative;
  margin-right: 40px;

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
  min-width: 455px; // Ensure it doesn't scale down
  height: auto; // Maintain aspect ratio
  position: relative;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;

  @media screen and (max-width: 480px) {
    width: 100%; // On smaller screens, take up full container width
    min-width: 0; // Override min-width for small screens if needed
  }
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
  font-size: 20px;
  line-height: 26px;
  color: #fff;
  text-align: left;
  /* font-family: "Open Sans", sans-serif; */


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

export const ArrowFilled = styled(FaBusAlt)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;
