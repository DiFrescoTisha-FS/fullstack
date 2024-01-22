import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player";
import { FaRocket } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

const moveCloud = keyframes`
  from {
    transform: translateX(1500px);
  }
  to {
    transform: translateX(-1100px);
  }
`;

export const NewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // Distributes space evenly between flex items
  align-items: center;
  padding: 50px 24px; // Adjust this padding as needed
  background-size: cover;
  min-height: 860px;
  position: relative;
  z-index: 1;
`;

export const NewBg = styled.div`
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
      background: linear-gradient(to bottom, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.8) 100%);
      z-index: 3; // Above the background image but below the content
    }
  }
`;

export const NewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  /* padding-top: 20px; */
  align-self: center; /* Center align the content vertically */
  text-align: center; /* Center align the text horizontally */

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const TopLine = styled.h2`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: ${({ lightText }) => (lightText ? "#fff" : "#fff")};
`;

export const Heading = styled.h1`
  color: #ac94f4;
  font-size: 44px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: #fff;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`;

export const NewDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  /* width: 560x; */
  /* margin-top: 20px; */
`;

export const CenterVideo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 100%;
  border: 1px solid #ac94f4; /* Ensure the border is visible */
  border-radius: 20px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    width: 98%;
  }
`;


// Base styles for mobile
export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%; // For 16:9 aspect ratio
  /* margin-top: 100px; */
`;


// Define a styled component for the player wrapper
export const PlayerWrapper = styled.div`
  /* position: relative;
  padding-top: 56.25%; // 16:9 aspect ratio */
  /* width: 100%; */
  /* margin-top: 100px; */
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #ac94f4; /* Add your desired border style here */


`;


export const New = styled.div`
  color: #010606;
  max-width: 100%;
  height: auto;
  /* margin: 0 0 10px 0; */
  padding-right: 0;
  /* margin-left: 5%; */
  border-radius: 10px;
  border: 1px solid #ac94f4;
  box-shadow: 10px 35px 30px -25px #ac94f4;

  @media screen and (max-width: 480px) {
    /* min-width: 382px; */
    width: 100%;
  }
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowFilled = styled(FaRocket)`
  margin-left: 8px;
  font-size: 20px;
  color: #ac94f4;
`;

export const NewCloud1 = styled.div`
  background: url("https://i.imgur.com/1ZY7lOo.png");
  width: 100%;
  height: 75%;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 90s infinite;
  filter: brightness(0.15) blur(3px);
`;

export const NewCloud2 = styled.div`
  background: url("http://pngimg.com/uploads/cloud/cloud_PNG24.png");
  width: 100%;
  height: 100%;
  top: 200px;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 150s infinite;
  animation-delay: 2s; 
  filter: brightness(0.1) blur(3px);
`;

export const NewCloud3 = styled.div`
  background: url("https://i.imgur.com/LMZ2p87.png");
  width: 100%;
  height: 100%;
  top: 300px;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 160s infinite;
  filter: brightness(0.15) blur(3px);
`;

export const NewCloud4 = styled.div`
  background: url("https://i.imgur.com/Ex2kygq.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 75px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 300s infinite;
  filter: blur(3px);
  filter: brightness(0.3) blur(3px);
`;

export const NewCloud5 = styled.div`
  background: url("https://i.imgur.com/vOSGaAF.png");
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: 100px; */
  background-repeat: no-repeat;
  animation: ${moveCloud} 70s infinite;
  filter: brightness(0.1) blur(3px);
`;

export const NewCloud6 = styled.div`
  background: url("https://i.imgur.com/vOSGaAF.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 200px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 140s infinite;
  filter: brightness(0.1) blur(3px);
`;

