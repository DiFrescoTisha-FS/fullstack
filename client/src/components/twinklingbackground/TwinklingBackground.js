import styled, { keyframes } from 'styled-components';
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
// import ThreeScene from '../ThreeScene';
// import cloudsImage from '../../images/cloudbase.png';

// import CometImage from "../../images/cometImage.png";
// import neptuneImageMobile from "../../images/heroMobile.png";
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

/* export const Clouds = styled.div`
  position: absolute;
  top: -1;
  left: 0;
  right: 0;
  bottom: -1;
  width: 100%;
  height: 100%;
  background: transparent url(${cloudsImage}) repeat top center;
  z-index: 10; 
  opacity: 1;
  filter: brightness(0.2) contrast(1.1);
`; */

// The main component
const TwinklingBackground = ({ saturnImage, neptuneImage, earthImage, neptuneImageMobile }) => {
  console.log("TwinklingBackground rendering");
  const starBoxShadow = generateStars(300); // for example 300 stars
  const meteors = createMeteors(5); // for example 25 meteors

 return (
  <BackgroundContainer>
    <Stars />
     <Twinkling />
     <Star boxShadow={starBoxShadow} />
     {meteors}
    {saturnImage && <SaturnImage src={saturnImage} alt="Saturn" />}
    {neptuneImage && (
  <NeptuneImage
    src={neptuneImage}
    mobileImage={neptuneImageMobile} // Pass the mobile image as a prop
    alt="Neptune"
  />
)}
    {earthImage && <EarthImage src={earthImage} alt="Earth" />}
  </BackgroundContainer>
  );
  }

export default TwinklingBackground;