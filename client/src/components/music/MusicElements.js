import styled from "styled-components";
// import backgroundImage from "../../images/single.png";
// import { SectionContainer } from '../SectionContainer'; 

export const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 860px;
  height: 100%;
  padding: 0;
  z-index: 1;
  background: #000 url(${require("../../images/single.png")}) no-repeat center center; */
  /* background-size: cover;

  @media screen and (max-width: 480px) {
    /* Update the background image for mobile devices */
    background: #000 url(${require("../../images/mobileplanets.png")}) no-repeat center center; /* Replace 'mobile_image.png' with your mobile image's filename */
    background-size: cover; /* This will cover the available area */
  }
`;

export const MusicWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Use space-between to place children on opposite ends of the container
  height: auto;
  /* height: 860px; */
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const MusicRow = styled.div`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  width: 100%;
/*   
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px; // Reduced gap for smaller screens */
    
    // Select the last child of MusicRow and remove its bottom margin/padding
    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
    }

      /* Add a media query for mobile devices */
  @media screen and (max-width: 768px) {
    flex-direction: column; // Stack items vertically on mobile
    gap: 20px; // Adjust gap for smaller screens
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 540px;
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

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  text-align: left;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const MusicDiv = styled.div`
  max-width: 455px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Music = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding-right: 0;
  border-radius: 10px;
  border: 2px solid #e1affd;

`;
