import styled from "styled-components";
import { FaArrowAltCircleDown, FaBusAlt } from 'react-icons/fa';
// import backgroundImage from "../../images/bio.jpg"

export const ArtistInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 860px;
  height: 100%;
  padding: 0;
  z-index: 1;
  background: url(${require("../../images/bio.jpg")}) no-repeat center center;
  background-size: cover;

    /* :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } */

    /* @media screen and (max-width: 768px) {
        min-height: 500px; // Adjusted from 860px to a smaller height
        padding: 50px 0; // Reduced padding at the top and bottom
    } */
`;

// export const BioBg = styled.div`
//   position: absolute; // Changed from fixed to absolute
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   background: url(${backgroundImage}) no-repeat center center;
//   background-size: cover;
//   z-index: -1; // Ensure this is behind the content of the ArtistInfoContainer
// `;



// export const BioImg = styled.img`
//   width: 100%; // Set width to be responsive
//   object-fit: cover; // Ensure the image covers the area without distorting aspect ratio
//   opacity: 0.5; // Set opacity to make text more readable if the image is a background
// `;

export const ArtistInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Use space-between to place children on opposite ends of the container
  height: auto;
  /* height: 860px; */
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  
  /* @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto; // Allow the height to grow as needed on smaller screens
  } */
`;

export const ArtistInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  position: relative;

  @media screen and (max-width: 768px) {
  max-width: 100%; // Adjust this to match the desired width
  padding-left: 24px; // Or any padding that matches the design
  padding-right: 24px;
}

`;

export const TopLine = styled.p`
    color: #fff;
    font-size: 18px;
    position: relative;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: left;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    color: #e1affd;
    font-size: 44px;
    line-height: 1.1;
    font-weight: 600;
    text-align: left; 

  @media screen and (max-width: 768) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    /* color: ${({ lightText }) => (lightText ? '#fff' : '#010606')}; */
    text-align: left;


  @media screen and (max-width: 768px) {
    font-size: 16px; // Smaller font size for medium screens
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    /* text-align: left; */
    /* margin-top: 20px; // Even smaller font size for small screens */
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

export const ImgWrap = styled.div`
  max-width: 455px;
  width: 100%; // Ensures it takes the full width of its parent
  display: flex;
  justify-content: center; // This will center the child Img horizontally
  align-items: center; // This will center the child Img vertically
  position: relative;
  z-index: 10;
  margin-left: 50px; // You might want to adjust this for different screen sizes

  @media screen and (max-width: 768px) {
    margin-left: 0; // Remove the margin to allow for proper centering
    justify-content: center; // Ensure the image stays centered
    max-width: none; // Allow the image to take up the necessary space
  }
`;


export const Img = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 10px;
  border: 1px solid #e1affd;
  /* box-shadow: 10px 35px 30px -25px #e1affd; */
`;

export const ArrowFilled = styled(FaBusAlt)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;
