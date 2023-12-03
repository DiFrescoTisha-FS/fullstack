import React from 'react';
import styled, { keyframes } from 'styled-components';
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
import { SaturnImage, NeptuneImage, EarthImage } from '../hero/HeroElements';
import { SingleImage } from '../artistInfo/ArtistElements';
import { MusicImage } from '../music/MusicElements';
import { YouTubeImage } from '../new/NewElements';
import { ThoughtsImage } from '../thoughts/ThoughtsElements';
import { CommentsImage } from '../commentsection/CommentSectionElements';


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

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: url('https://i.imgur.com/1DkwMgN.png') no-repeat center center fixed;
  background-size: cover;
  z-index: -2;
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
  animation: ${moveTwinkBack} 600s linear infinite;
`;

// const Clouds = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   display: block;
//   background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat top center;
//   z-index: 20;
//   opacity: 0.4;
//   animation: ${moveCloudsBack} 200s linear infinite;
// `;

// The main component
const TwinklingBackground = ({ commentsImage, thoughtsImage, youTubeImage, singleImage, musicImage, saturnImage, neptuneImage, earthImage }) => (
  <BackgroundContainer>
    <Stars />
    <Twinkling />
    {saturnImage && <SaturnImage src={saturnImage} alt="Saturn" />}
    {neptuneImage && <NeptuneImage src={neptuneImage} alt="Neptune" />}
    {earthImage && <EarthImage src={earthImage} alt="Earth" />}
    {singleImage && <SingleImage src={singleImage} alt="Planet" />}
    {musicImage && <MusicImage src={musicImage} alt="Music" />}
    {youTubeImage && <YouTubeImage src={youTubeImage} alt="Planets" />}
    {thoughtsImage && <ThoughtsImage src={thoughtsImage} alt="Planets" />}
    {commentsImage && <CommentsImage src={commentsImage} alt="Planets" />}
    {/* <Clouds /> */}
    {/* {title && <Title>{title}</Title>} */}
  </BackgroundContainer>
);



export default TwinklingBackground;


