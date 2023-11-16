import styled from "styled-components";
import { FaArrowAltCircleDown, FaBusAlt } from 'react-icons/fa';
// import { SectionContainer } from "../SectionContainer";
// import MobileImg from "../../images/mobileplanets.png"
// import backgroundImage from "../../images/bio.jpg"

export const ArtistInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 860px;
  height: 100%;
  padding: 0;
  z-index: 1;
  background: url(${require("../../images/bio.jpg")}) no-repeat center center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    /* Update the background image for mobile devices */
    background: #000 url(${require("../../images/mobileflipped.png")}) no-repeat center center; /* Replace 'mobile_image.png' with your mobile image's filename */
    background-size: cover;
  }
`;

export const ArtistInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Use space-between to place children on opposite ends of the container
  height: auto;
  /* height: 860px; */
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const ArtistInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
    // Select the first child of ThoughtsRow and remove its top margin/padding
    &:first-child {
      margin-top: 0;
      padding-top: 0;
      flex-direction: column; 
    }
  }

    /* Add a media query for mobile devices */
    @media screen and (max-width: 480px) {
    flex-direction: column; // Stack items vertically on mobile
    gap: 20px; // Adjust gap for smaller screens
  }
`;

export const ImgWrap = styled.div`
  max-width: 455px;
  width: 100%; // Ensures it takes the full width of its parent
  display: flex;
  justify-content: center; // This will center the child Img horizontally
  align-items: center; // This will center the child Img vertically
  position: relative;
  z-index: 10;
  margin-left: 50px; // You might want to adjust this for different screen sizes

  @media screen and (max-width: 768px) {
    margin-left: 0; // Remove the margin to allow for proper centering
    justify-content: center; // Ensure the image stays centered
    max-width: none; // Allow the image to take up the necessary space
  }
`;

export const TextWrapper = styled.div`
  max-width: 100%; /* Default max-width */
  position: relative;

  @media screen and (max-width: 1024px) {
    max-width: 100%; /* Increased width for medium screens */
    padding: 0 24px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%; /* Full width for smaller screens */
    padding: 0 24px;
    text-align: center; 
  }
`;


export const Img = styled.img`
  width: 60%; /* Ensure image takes up the width of its container */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Optional: if you want rounded corners */
  border: 1px solid #e1affd; /* Optional: adds a purple border */
  /* Optional: drop-shadow for visual depth (you can adjust or remove this) */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Ensure the image is centered and scales down within its container */
  object-fit: contain;
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
    color: #e1affd;
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
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 26px;
    color: #fff;
    /* color: ${({ lightText }) => (lightText ? '#fff' : '#010606')}; */
    text-align: left;


  @media screen and (max-width: 768px) {
    font-size: 22px; // Smaller font size for medium screens
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    /* text-align: left; */
    /* margin-top: 20px; // Even smaller font size for small screens */
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

export const ArrowFilled = styled(FaBusAlt)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;
