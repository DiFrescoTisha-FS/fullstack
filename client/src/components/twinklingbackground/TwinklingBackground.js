import styled, { keyframes } from 'styled-components';
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
// import cloudsImage from "../../images/clouds.png";
// import CometImage from "../../images/cometImage.png";
// import neptuneImageMobile from "../../images/heroMobile.png";
import { SaturnImage, NeptuneImage, EarthImage, CometImage } from '../hero/HeroElements';

const moveTwinkBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
`;

// Keyframes for individual cloud movement
const moveCloud = keyframes`
  from {
    transform: translateX(1500px);
  }
  to {
    transform: translateX(-1100px);
  }
`;

const fallComet = keyframes`
  0% {
    transform: translateX(0) translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateX(50vw) translateY(100vh); // Adjust the translation values to control the starting and ending position
    opacity: 0;
  }
`;

const Cloud1 = styled.div`
  background: url("http://pngimg.com/uploads/cloud/cloud_PNG24.png");
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 120s infinite;
  filter: brightness(0.1) blur(3px);
`;

const Cloud2 = styled.div`
  background: url("http://pngimg.com/uploads/cloud/cloud_PNG24.png");
  width: 100%;
  height: 100%;
  top: 400px;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 150s infinite;
  filter: brightness(0.1) blur(3px);
`;

const Cloud3 = styled.div`
  background: url("https://i.imgur.com/ouYtyE1.png");
  width: 100%;
  height: 100%;
  top: 300px;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 160s infinite;
  filter: blur(3px);
  filter: brightness(0.1) blur(3px);
`;

const Cloud4 = styled.div`
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

const Cloud5 = styled.div`
  background: url("https://i.imgur.com/874Clt6.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 400px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 150s infinite;
  filter: blur(3px);
  filter: brightness(0.1) blur(3px);
`;


const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1; /* Ensure this is below the ArtistBg */
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #000 url(${starsImage}) repeat top center;
  z-index: 1;
`;

const Twinkling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: transparent url(${twinklingImage}) repeat top center;
  z-index: 2;
  opacity: 1;
  animation: ${moveTwinkBack} 300s linear infinite;
`;

// export const Clouds = styled.div`
//   position: absolute;
//   top: -1;
//   left: 0;
//   right: 0;
//   bottom: -1;
//   width: 100%;
//   height: 100%;
//   background: transparent url(${cloudsImage}) repeat top center;
//   z-index: 10; 
//   opacity: 1;
//   animation: ${moveClouds} 600s linear infinite;
//   filter: brightness(1.2) contrast(1.1);
// `;

// export const FallingComet = styled(CometImage)`
// animation: ${fallComet} 5s linear infinite; // Adjust the timing as needed
// position: fixed; // Use fixed or absolute depending on how you want it positioned
// top: 0;
// left: 50%; // Start at the middle of the screen
// transform: translateX(-50%); // Adjust this to control the starting horizontal position
// `;

// export const SecondComet = styled(CometImage)`
// animation: ${fallComet} 2s linear infinite; // Adjust the timing as needed
// position: fixed; // Use fixed or absolute depending on how you want it positioned
// top: 0;
// left: 20%; // Start at the middle of the screen
// transform: translateX(-40%); // Adjust this to control the starting horizontal position
// `;

// The main component
const TwinklingBackground = ({ saturnImage, neptuneImage, earthImage, neptuneImageMobile }) => {

  return (
  <BackgroundContainer>
    <Stars />
      <Twinkling />
      {/* <Cloud1 style={{zIndex: '10'}} />
      <Cloud2 style={{zIndex: '10'}} />
      <Cloud3 style={{zIndex: '10'}} />
      <Cloud4 style={{ zIndex: '10' }} />
      <Cloud5 style={{ zIndex: '10' }} /> */}
    {/* <Clouds /> */}
    {saturnImage && <SaturnImage src={saturnImage} alt="Saturn" />}
    {neptuneImage && (
  <NeptuneImage
    src={neptuneImage}
    mobileImage={neptuneImageMobile} // Pass the mobile image as a prop
    alt="Neptune"
  />
)}
    {earthImage && <EarthImage src={earthImage} alt="Earth" />}
    {/* {cometImage && <FallingComet src={cometImage} alt="Comet" />}
    {cometImage && <SecondComet src={cometImage} alt="Comet" />} */}
  </BackgroundContainer>
  );
  }

export default TwinklingBackground;