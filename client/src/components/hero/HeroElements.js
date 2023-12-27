import styled from 'styled-components';
import { FaRocket, FaArrowAltCircleDown } from 'react-icons/fa';

const maxWidth = '700px'; // Common max-width for various components

// Hero Container
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 860px;
  padding: 0;
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-height: 600px;
  }

  @media screen and (max-width: 480px) {
    min-height: 400px;
    /* background: #000 url(${require("../../images/mobileplanets.png")}) no-repeat center center; */
    background-size: cover;
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
  background-size: cover;
  z-index: -1;

  @media screen and (max-width: 768px) {
    background-size: contain; // Or keep it as 'cover' depending on your design
  }

  @media screen and (max-width: 480px) {
    background: url(${props => props.backgroundImageMobile}) no-repeat center center;
    background-size: cover;
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
  font-family: "Open Sans", sans-serif;

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
    display: none;
  }
`;

export const NeptuneImage = styled.img`
  position: absolute;
  top: 50px;
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

  /* // Change Neptune image on mobile view
  @media screen and (max-width: 480px) {
    content: url(${props => props.mobileImage}); // This will change the image source
    width: 100%; // Adjust width as needed
    top: auto; // Adjust positioning as needed
    left: 0;
    right: 0;
    bottom: 0;
    transform: none;
    z-index: 3;
  } */
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
    display: none;
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
