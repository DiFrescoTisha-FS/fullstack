import styled from 'styled-components';
import backgroundImage from "../../images/velvet.png";
import { SectionContainer } from '../SectionContainer';

// ... other components ...

export const CommentSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  min-height: 860px;
  position: relative;
  z-index: 1;

    @media screen and (max-width: 768px) {
    min-height: auto; // or some value smaller than 500px if that's too much space
    padding: 50px 0;
  }
`;

export const CommentsBg = styled.div`
  position: absolute; // Changed from fixed to absolute
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000 url(${require("../../images/sparklycomments.png")}) no-repeat center center;
  /* background-size: cover; */
  z-index: -1; // Ensure this is behind the content of the ArtistInfoContainer

  @media screen and (max-width: 768px) {
    /* Update the background image for mobile devices */
    background: #000 url(${require("../../images/mobilebackup.png")}) no-repeat center center; /* Replace 'mobile_image.png' with your mobile image's filename */
    background-size: cover; /* This will cover the available area */
  }

  @media screen and (max-width: 480px) {
    /* Update the background image for mobile devices */
    background: #000 url(${require("../../images/mobilebackup.png")}) no-repeat center center; /* Replace 'mobile_image.png' with your mobile image's filename */
    background-size: cover; /* This will cover the available area */
  }
`;


export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Use space-between to place children on opposite ends of the container
  /* height: 860px; */
  height: auto;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    /* padding: 50px 0; // Reduced from 100px to 50px, adjust as needed */
  }
`;

export const CommentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


export const ImgWrap = styled.div`
  max-width: 455px; // Adjust the width as necessary
  height: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;

  @media screen and (max-width: 1024px) {
    max-width: 350px; /* Adjusted max-width for medium screens */
  }
   // Add some space between the image and the text content
   @media screen and (max-width: 768px) {
    order: 2;
     // Will ensure the image is below the text/form
  }

  /* @media screen and (max-width: 768px) {
    max-width: 300px; // Smaller max-width for mobile devices
    width: 95%; // Optionally you can use percentage to be more responsive
    height: auto; // Maintain aspect ratio
  } */
`;

export const Img = styled.img`
    max-width: 100%;
    height: auto;
    position: relative;
    /* margin: 0 0 10px 0; */
    padding-right: 0;
    border-radius: 10px;
    border: 2px solid #e1affd;
    z-index: 10;


`;

export const TextWrapper = styled.div`
  max-width: 540px;
  position: relative;

  @media screen and (max-width: 768px) {
    order: 1;

    @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 60%;
  }
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
    text-align: left; /* Add text-align property here */
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    color: #e1affd;
    font-size: 44px;
    line-height: 1.1;
    font-weight: 600;
    text-align: left; /* Add text-align property here */

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
    text-align: left; /* Add text-align property here */
`;


export const ComboImage = styled.img`
  position: absolute;
  top: 200px; /* Adjust the top position as needed */
  left:400px; /* Adjust the left position as needed */
  z-index: -1; /* Set a higher z-index value to ensure it's above the twinkling stars */

  /* Adjust the size of the Saturn image */
  width: 1000px; /* Adjust the width to make it larger */
  height: auto; /* Automatically adjust the height to maintain aspect ratio */

  /* Apply any other styling as needed */
`;

export const FormWrap = styled.form`
    position: relative;
    /* border: 2px solid red; */
    /* background: lightblue; */
    z-index: 10;

    @media screen and (max-width: 768px) {
    order: 1; // Ensures that the form will be placed above the image
  }

`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: vertical; // Allows the user to resize the textarea vertically
`;

export const CommentBtnWrapper = styled.button`
  display: flex;
  background: #e1affd;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 0;
  border-radius: 50%; // Set to 0 or a smaller value if necessary

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px; // Ensure it's also 0 for smaller screens
  }
`;

// ... other components ...
