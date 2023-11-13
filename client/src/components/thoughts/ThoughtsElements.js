import styled from "styled-components";
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { MdFrontHand } from 'react-icons/md';
import { Link } from 'react-scroll';
// import backgroundImage from "../../images/lassothoughts.png"
import { SectionContainer } from '../SectionContainer'; 
import { MusicRow } from "../music/MusicElements";

export const ThoughtsContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 860px;
  padding: 0;
  z-index: 1;
  background: url(${require("../../images/single.png")}) no-repeat center center;
  /* background-size: cover; */

    /* :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } */

    /* @media screen and (max-width: 768px) {
     min-height: auto; // Remove fixed min-height
    display: flex; // Added to ensure content dictates height
    flex-direction: column; // Stack children vertically
    justify-content: flex-start; // Align content to start, removing excess space
    padding: 50px 0; // Adjust padding if needed // Reduced padding at the top and bottom
    } */
`;

export const ThoughtsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; // This will center the content vertically
    align-items: center; // This will center the content horizontally
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    height: 100%; // Make the container fill the height of the parent

    /* @media screen and (max-width: 768px) {
        height: auto; // Let the container size adjust to the content on smaller screens
        padding: 0 24px; // Adjust padding as necessary
    } */
`;

export const ThoughtsRow = styled(MusicRow)`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
    // Select the first child of ThoughtsRow and remove its top margin/padding
    &:first-child {
      margin-top: 0;
      padding-top: 0;
    }
  }
`;

export const TrapstarText = styled.p`
color: #fff;
font-size: 16px;
font-weight: 500;
margin-top: 12px;
text-align: left;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 100%;
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

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 10px;
  border: 1px solid #e1affd;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

export const Button = styled(Link)`
    margin-top: 10px;
`

export const TopLine = styled.p`
    color: #fff;
    font-size: 18px;
    position: relative;
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
    font-size: 14px;
    line-height: 26px;
    color: #fff;
    text-align: left; /* Add text-align property here */
`;


export const ArrowFilled = styled(MdFrontHand)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleUp)`
    margin-left: 8px;
    font-size: 20px;
`;
