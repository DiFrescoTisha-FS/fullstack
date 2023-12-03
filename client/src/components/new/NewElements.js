import styled from "styled-components";
import ReactPlayer from "react-player";
import { FaRocket } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

export const NewContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 860px;
  height: 100%;
  padding: 0;
  margin: 0;
  z-index: 1;
  background: url(${require("../../images/newnew.png")}) no-repeat center center;
  background-size: cover;
  background-position: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    background: #000 url(${require("../../images/m5.png")}) no-repeat center center; /* Replace 'mobile_image.png' with your mobile image's filename */
    background-size: cover; 


  @media screen and (max-width: 480px) {
    /* Update the background image for mobile devices */
    background: #000 url(${require("../../images/m5.png")}) no-repeat center center; /* Replace 'mobile_image.png' with your mobile image's filename */
    background-size: cover; /* This will cover the available area */
  }
`;

export const NewBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`

export const NewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Vertically align content at the top */
  z-index: 1;
  height: auto; /* Change height to auto */
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px; /* Add padding to push content away from the top */
  position: relative;
  /* margin-bottom: 40px; */
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 20px;
  align-self: center; /* Center align the content vertically */
  text-align: center; /* Center align the text horizontally */
`;

// export const NewRow = styled.div`
//     display: grid;
//     grid-auto-columns: minmax(auto, 1fr);
//     align-items: center;
//     grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

//     @media screen and (max-width: 768px) {
//         grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
//     }
// `;

export const TopLine = styled.span`
  margin-top: 8%;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 48px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 8px; /* Adjust the margin-bottom as needed to reduce the space */
  color: ${({ lightText }) => (lightText ? "#fff" : "#fff")};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Heading = styled.h1`
  margin-top: 9%;
  margin-bottom: 20px;
  color: #e1affd;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
margin-top: 30px;
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 26px;
  color: #fff;
  text-align: center;
  /* font-family: "Open Sans", sans-serif; */


  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`;

export const NewDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 20px;
`;

export const CenterVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

export const VideoContainer = styled.div`
  width: 80%;
  /* max-width: px; */
  border-radius: 10px;
  border: 1px solid #e1affd; /* Set the desired maximum width for the video */
`;

export const YouTubeImage = styled.img`
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  max-width: 100%;
  height: auto;
  width: 80%; // Use a percentage of the width to make it responsive

  @media screen and (max-width: 768px) {
    width: 70%; // Adjust size for smaller screens if needed
  }

  @media screen and (max-width: 480px) {
    display: none; // Hide on very small screens
  }
`

// Define a styled component for the player wrapper
export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%; /* Set the width to 100% to match the video width */
  padding-top: 56.25%; /* 16:9 aspect ratio (9 / 16 * 100%) */ /* Center-align the video */ /* 16:9 aspect ratio (9 / 16 * 100%) */
`;

// Define a styled component for the ReactPlayer
export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%; /* Set the desired width for the video */
  height: 80%; /* Set the desired height for the video */
`;

export const New = styled.div`
  color: #010606;
  max-width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  padding-right: 0;
  margin-left: 5%;
  border-radius: 10px;
  border: 1px solid #e1affd;
  box-shadow: 10px 35px 30px -25px #e1affd;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowFilled = styled(FaRocket)`
  margin-left: 8px;
  font-size: 20px;
  color: #e1affd;
`;
