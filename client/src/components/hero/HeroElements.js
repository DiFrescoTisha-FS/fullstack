import styled from "styled-components";
import { FaRocket } from 'react-icons/fa'
import { FaArrowAltCircleDown } from 'react-icons/fa';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  z-index: 1;
  width: 100%; // Full width
  min-height: 860px; // Minimum height for larger screens

  /* Center content vertically */
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  /* Reduce the min-height on smaller screens */
  @media screen and (max-width: 768px) {
    min-height: 600px; // Smaller height for medium screens
  }

  @media screen and (max-width: 480px) {
    min-height: 400px; // Even smaller height for small screens
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
  background-size: cover; // This will cover the entire area
  z-index: -1;

  /* Adjust background-size on smaller screens */
  @media screen and (max-width: 768px) {
    background-size: contain; // Contain the background within the available space without cutting off
  }

  @media screen and (max-width: 480px) {
    background-size: contain; // Adjust as needed for very small screens
  }
`;


const maxWidth = '1100px';

export const HeroContent = styled.div`
  z-index: 3; // Adjusted for stacking context
  max-width: ${maxWidth}; // Use the max-width variable
  width: 100%; // Ensure it spans the full width of its parent
  margin: 0 auto; // Center the content
  padding-bottom: 0; // Set to 0 or a smaller value if necessary
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // This centers the content vertically

  @media screen and (max-width: 768px) {
    padding: 0 50px; // Increase padding for smaller screens
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 0; // Adjust padding for very small screens
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
  max-width: ${maxWidth}; // Ensure the max-width is consistent
  width: 100%; // Ensure it spans the full width of its container

  @media screen and (max-width: 768px) {
    font-size: 16px; // Adjust font size for readability on smaller screens
  }

  @media screen and (max-width: 480px) {
    font-size: 16px; // Further adjust font size for very small screens
  }
`;

export const SaturnImage = styled.img`
  position: absolute;
  top: 500px; // Position for large screens
  right: 300px; // Position for large screens
  z-index: 2;
  width: 150px; // Default width
  height: auto;

  @media screen and (max-width: 768px) {
    display: none;// Reset the top property
  }
`;

export const NeptuneImage = styled.img`
  position: absolute;
  top: 50px;
  left: 100px;
  z-index: 3;
  width: 500px; // Default size for larger screens
  height: auto;

  @media screen and (max-width: 768px) {
    width: 350px; // Smaller size for medium screens
    left: 50%; // Center horizontally
    transform: translateX(-50%); // Adjust for exact center
    right: auto; // Remove any previously set right value
  }

  @media screen and (max-width: 480px) {
    width: 350px; // Same size for small screens, adjust if necessary
    left: 50%; // Center horizontally
    transform: translateX(-50%); // Adjust for exact center
    right: auto; // Ensure right is not affecting the position
  }
`;



export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0; // Set to 0 or a smaller value if necessary

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px; // Ensure it's also 0 for smaller screens
  }
`;


export const ArrowFilled = styled(FaRocket)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
    margin-left: 8px;
    font-size: 20px;
`;