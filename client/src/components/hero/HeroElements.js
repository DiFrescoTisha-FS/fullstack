import styled, { keyframes } from "styled-components";
import { FaRocket, FaArrowAltCircleDown } from "react-icons/fa";
import heroCloud1 from "../../images/heroCloud1.png";
import heroCloud2 from "../../images/heroCloud2.png";
import heroCloud3 from "../../images/heroCloud3.png";
import Clouds from "../../images/clouds2.png";
import Clouds2 from "../../images/clouds2reverse.png";


const maxWidth = "700px"; // Common max-width for various components

const moveCloud = keyframes`
  /* 0%
  {
    opacity:0;
    transform: translateY(0);
  } 
  10%, 90% 
  {
    opacity: 1;
  }
  {
    opacity: 100%;
    transform: translateY(-100px);
  }  */
  
  from {
    left: 100%; /* Start off-screen from the right */
  }
  to {
    left: -100%; /* End off-screen on the left */
  }
`;

// Hero Container
export const HeroContainer = styled.div`
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

  @media screen and (max-width: 768px) {
    margin-top: 100px;
    padding: 50px 0; // Adjust padding as needed
    flex-direction: column;
    justify-content: center; // Centers content vertically in the column
    align-items: center; // Centers content horizontally in the column
    height: 100%; // Remove fixed height to allow content to determine height
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
  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  z-index: -1;

  @media screen and (max-width: 768px) {
    background: url(${(props) => props.backgroundImageMobile}) no-repeat center
      center;
    background-size: cover;
    background-position: center 1px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background: linear-gradient(to bottom, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%); */
      z-index: 3;
    } // Missing closing brace for &:after
  } // Missing closing brace for @media

  @media screen and (max-width: 768px) {
    background: url(${(props) => props.backgroundImageTablet}) no-repeat center
      center;
    background-size: cover;
    background-position: center 1px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background: linear-gradient(to bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%); */
      z-index: 3;
    }
  }

  @media screen and (max-width: 480px) {
    background: url(${(props) => props.backgroundImageMobile}) no-repeat center
      center;
    background-size: cover;
    background-position: center 1px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background: linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%); */
      z-index: 3; // Above the background image but below the content
    }
  }
`;
// Hero Content
export const HeroContent = styled.div`
  z-index: 22;
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
`;

// Paragraph within Hero Content
export const HeroP = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: ${maxWidth};
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
  }
`;

export const SaturnImage = styled.img`
  position: absolute;
  top: 300px;
  right: 300px;
  z-index: 3;
  width: 50px;
  height: auto;

  // Hide Saturn on tablet and mobile views
  @media screen and (max-width: 768px) {
    width: 65px;
    top: 70%;
    left: 15%;
    transform: translateX(-50%);
  }
`;

export const NeptuneImage = styled.img`
  position: absolute;
  top: 60px;
  left: 100px;
  z-index: 3;
  width: 500px;
  height: auto;

  // Adjust Neptune size on tablet view
  @media screen and (max-width: 768px) {
    width: 350px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const EarthImage = styled.img`
  position: absolute;
  top: 500px;
  right: 400px;
  z-index: 3;
  width: 150px;
  height: auto;

  // Hide Earth on tablet and mobile views
  @media screen and (max-width: 768px) {
    width: 50px;
    left: 80%;
    transform: translateX(-50%);
  }
`;

// Hero Button Wrapper
export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

// Icons
export const ArrowFilled = styled(FaRocket)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroCloud1 = styled.div`
  background: url(${Clouds}) center center;
  background-size: contain;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 3%;
  left: 100%;
  animation: ${moveCloud} 60s linear infinite;
  background-repeat: no-repeat;
  /* filter: brightness(0.5) blur(3px); */
`;

export const HeroCloud2 = styled.div`
  background: url(${Clouds2}) no-repeat;
  position: absolute;
  width: 700px;
  height: 700px;
  top: 20%;
  left: -100%;
  background-size: contain;
  animation: ${moveCloud} 50s linear infinite;
  /* animation-delay: 2s; */
  /* filter: brightness(0.2) blur(3px); */
`;

export const HeroCloud3 = styled.div`
  background: url(${Clouds}) no-repeat;
  position: absolute;
  top: 30%;
  left: 0;
  background-size: contain;
  width: 80%;
  height: 80%;
  animation: ${moveCloud} 120s linear infinite;
  /* animation-delay: 3s; */

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeroCloud4 = styled.div`
  background: url(${Clouds}) no-repeat;
  background-size: contain;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 300px;
  left: 0;
  animation: ${moveCloud} 70s linear infinite;
  background-repeat: no-repeat;
  animation-delay: -20s;
`;

export const HeroCloud5 = styled.div`
  background: url(${Clouds2}) no-repeat;
  position: absolute;
  top: 150px;
  left: 0;
  background-size: contain;
  width: 60%;
  height: 60%;
  animation: ${moveCloud} 90s linear infinite;
  animation-delay: -5s;
`;

export const HeroCloud6 = styled.div`
  background: url(${Clouds}) no-repeat;
  position: absolute;
  /* top: 15%; */
  top: 75px;
  left: 0;
  background-size: contain;
  width: 900px;
  height: 350px;
  animation: ${moveCloud} 90s linear infinite;
  animation-delay: -10s;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

// export const HeroCloud7 = styled.div`
//   background: url(${heroCloud7}) no-repeat;
//   position: absolute;
//   /* top: 15%; */
//   top: 75px;
//   left: 0;
//   background-size: contain;
//   width: 400px;
//   height: 350px;
//   animation: ${moveCloud} 90s linear infinite;
//   animation-delay: -10s;
//   filter: brightness(0.25) blur(3px);

//   @media screen and (max-width: 480px) {
//     display: none;
//   }
// `;