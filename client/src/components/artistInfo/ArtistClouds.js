import styled, { keyframes } from "styled-components";
import { Cloud1, Cloud2, Cloud3, Cloud4, Cloud5 } from '../twinklingbackground/TwinklingBackground';

const moveCloud = keyframes`
  from {
    transform: translateX(1500px);
  }
  to {
    transform: translateX(-1100px);
  }
`;

export const ArtistCloud1 = styled(Cloud1)`
  background: url("http://pngimg.com/uploads/cloud/cloud_PNG24.png");
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 120s infinite;
  filter: brightness(0.15) blur(3px);
`;

export const ArtistCloud2 = styled(Cloud2)`
  background: url("http://pngimg.com/uploads/cloud/cloud_PNG24.png");
  width: 100%;
  height: 100%;
  top: 400px;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 150s infinite;
  filter: brightness(0.15) blur(3px);
  animation-delay: 3s; 
`;

export const ArtistCloud3 = styled(Cloud3)`
  background: url("https://i.imgur.com/ouYtyE1.png");
  width: 100%;
  height: 100%;
  top: 300px;
  position: absolute;
  background-repeat: no-repeat;
  animation: ${moveCloud} 160s infinite;
  filter: brightness(0.2) blur(3px);
`;

export const ArtistCloud4 = styled(Cloud4)`
  background: url("https://i.imgur.com/Ex2kygq.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 75px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 300s infinite;
  filter: blur(3px);
  filter: brightness(0.3) blur(3px);
  animation-delay: 1s; 
`;

export const ArtistCloud5 = styled(Cloud5)`
  background: url("https://i.imgur.com/874Clt6.png");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 300px;
  background-repeat: no-repeat;
  animation: ${moveCloud} 150s infinite;
  filter: blur(3px);
  filter: brightness(0.15) blur(3px);
  animation-delay: 3s; 
`;




