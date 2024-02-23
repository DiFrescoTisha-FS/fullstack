import styled, { keyframes } from 'styled-components';
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
import cloudImage1 from '../../images/clouds.png';
import cloudImage2 from '../../images/clouds2.png';
import cloudImage3 from '../../images/cloudcheck.png';
import cloudImage4 from '../../images/clouds4.png';

import { SaturnImage, NeptuneImage, EarthImage } from '../hero/HeroElements';

const moveTwinkBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
`;

const meteorAnimation = keyframes`
  0% {
    opacity: 1;
    margin-top: -300px;
    margin-right: -300px;
  }
  12% {
    opacity: 0;
  }
  15% {
    margin-top: 300px;
    margin-left: -600px;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const moveCloud = keyframes`
    from {
    left: 100%; /* Start off-screen from the right */
  }
  to {
    left: -100%; /* End off-screen on the left */
  }
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

const Star = styled.div`
  width: 1px;
  height: 1px;
  background-color: transparent;
  box-shadow: ${({ boxShadow }) => boxShadow};
  z-index: 3;
`;

const Meteor = styled.div`
  position: absolute;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg);
  background-image: linear-gradient(to right, #ac94f4, rgba(255, 255, 255, 0));
  animation: ${meteorAnimation} ${({ duration }) => duration}s linear infinite;
  z-index: 4;

  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    margin-top: -2px;
    background: rgba(172, 148, 244, 0.7);
    box-shadow: 0 0 15px 3px #ac94f4;
  }
`;

// Function to generate random stars
const generateStars = (count) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    stars += `${x}px ${y}px #FFF, `;
  }
  return stars.slice(0, -2); // Remove the trailing comma and space
};

// Function to create meteors
const createMeteors = (count) => {
  const meteors = [];
  for (let i = 0; i < count; i++) {
    const v = Math.random() * 90 + 9;
    const h = Math.random() * 250 + 50;
    const d = Math.random() * 30 + 3;
    meteors.push(
      <Meteor
        key={`meteor-${i}`}
        style={{
          top: `${h}px`,
          left: `${v}%`,
        }}
        duration={d}
      />
    );
  }
  return meteors;
};

// Define the cloud components with animations
export const Cloud1 = styled.div`
  background: url(${cloudImage1}) center center;
  background-size: contain;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 3%;
  left: 100%;
  animation: ${moveCloud} 60s linear infinite;
  background-repeat: no-repeat;
`;

export const Cloud2 = styled.div`
  background: url(${cloudImage2}) no-repeat;
  position: absolute;
  width: 700px;
  height: 700px;
  top: 20%;
  left: -100%;
  background-size: contain;
  animation: ${moveCloud} 50s linear infinite;
`;

// Define the remaining cloud components similarly
export const Cloud3 = styled.div`
  background: url(${cloudImage3}) center center;
  background-size: contain;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 30%; // Adjust the position as needed
  left: 0; // Adjust the position as needed
  animation: ${moveCloud} 120s linear infinite;
  background-repeat: no-repeat;
`;

export const Cloud4 = styled.div`
  background: url(${cloudImage4}) center center;
  background-size: contain;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 450px;
  left: 0;
  animation: ${moveCloud} 70s linear infinite;
  background-repeat: no-repeat;
  animation-delay: -20s; // Adjust the delay as needed
`;

export const Cloud5 = styled.div`
  background: url(${cloudImage2}) no-repeat;
  position: absolute;
  top: 150px; // Adjust the position as needed
  left: 0; // Adjust the position as needed
  background-size: contain;
  width: 60%;
  height: 60%;
  animation: ${moveCloud} 90s linear infinite;
  animation-delay: -5s; // Adjust the delay as needed
`;

export const Cloud6 = styled.div`
  background: url(${cloudImage1}) center center;
  background-size: contain;
  width: 900px;
  height: 350px;
  position: absolute;
  top: 75px; // Adjust the position as needed
  left: 0; // Adjust the position as needed
  animation: ${moveCloud} 90s linear infinite;
  animation-delay: -10s; // Adjust the delay as needed
`;

// The main component
const TwinklingBackground = ({ saturnImage, neptuneImage, earthImage, neptuneImageMobile }) => {
  const starBoxShadow = generateStars(300); // for example 300 stars
  const meteors = createMeteors(5); // for example 25 meteors

 return (
  <BackgroundContainer>
    <Stars />
     {/* <Twinkling />
     <Star boxShadow={starBoxShadow} />
     {meteors} */}
    {saturnImage && <SaturnImage src={saturnImage} alt="Saturn" />}
    {neptuneImage && (
  <NeptuneImage
    src={neptuneImage}
    mobileImage={neptuneImageMobile} // Pass the mobile image as a prop
    alt="Neptune"
  />
)}
     {earthImage && <EarthImage src={earthImage} alt="Earth" />}
     
  {/* <Cloud1 style={{ zIndex: '10' }} />
  <Cloud2 style={{ zIndex: '10' }} />
  <Cloud3 style={{ zIndex: '10' }} />
  <Cloud4 style={{ zIndex: '10' }} />
  <Cloud5 style={{ zIndex: '10' }} /> */}
  {/* <Cloud6 style={{ zIndex: '10' }} /> */}
  </BackgroundContainer>
  );
  }

export default TwinklingBackground;