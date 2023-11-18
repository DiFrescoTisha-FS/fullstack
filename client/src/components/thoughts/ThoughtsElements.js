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
  padding: 0px;
  min-height: 860px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-height: auto;
    padding: 50px 0;
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
  overflow: hidden;
  background: #000 url(${require("../../images/alteredthoughts.png")}) no-repeat center center;
  z-index: -1;

@media screen and (max-width: 768px) {
  background: #000 url(${require("../../images/mediumthoughts.png")}) no-repeat center center;
  background-size: cover; 
}

@media screen and (max-width: 480px) {
  background: #000 url(${require("../../images/mobileplanets.png")}) no-repeat center center;
  background-size: cover; 
}
`
  

export const ThoughtsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: auto;
max-width: 1100px;
margin: 0 auto;
padding: 0 24px;

@media screen and (max-width: 768px) {
flex-direction: column;
align-items: center;
justify-content: center;
}
`;

export const ThoughtsRow = styled(MusicRow)`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
  flex-direction: column;
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

  @media screen and (max-width: 1024px) {
    max-width: 100%; // Full width for smaller screens
  }

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

export const Img = styled.img`
  width: 455px; // Fixed width of 455px
  height: auto; // Maintain aspect ratio
  position: relative;
  border-radius: 10px;
  border: 2px solid #e1affd;
  z-index: 10;
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


export const ArrowFilled = styled(MdFrontHand)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleUp)`
    margin-left: 8px;
    font-size: 20px;
`;
