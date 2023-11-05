import styled, { keyframes } from 'styled-components';

// Import your images here
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
import cloudsImage from '../../images/clouds.png';

const moveTwinkBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
`;

const moveCloudsBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
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
  z-index: 0;
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
  z-index: 1;
  opacity: 1;
  animation: ${moveTwinkBack} 200s linear infinite;
`;

const Clouds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: transparent url(${cloudsImage}) repeat top center;
  z-index: 2;
  opacity: 0.4;
  animation: ${moveCloudsBack} 200s linear infinite;
`;

const Title = styled.h1`
  /* Add your title styles here */
  font-size: 36px;
  font-family: 'Lato', sans-serif;
  margin-top: 10em;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #ffffff;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  display: block;
  position: relative;
  z-index: 3;
`;


export { Stars, Twinkling, Clouds, Title };