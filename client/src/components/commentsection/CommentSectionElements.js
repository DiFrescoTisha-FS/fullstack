import styled from 'styled-components';

export const CommentSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  min-height: 860px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-height: auto;
    padding: 50px 0;
  }
`;

export const CommentsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000 url(${require("../../images/shiny.png")}) no-repeat center center;
  z-index: -1;

  @media screen and (max-width: 768px) {
    background: #000 url(${require("../../images/cloudymoon.png")}) no-repeat center center;
    background-size: cover; 
  }

  @media screen and (max-width: 480px) {
    background: #000 url(${require("../../images/m8.png")}) no-repeat center center;
    background-size: cover;
  }
`;


export const CommentWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: auto;
max-width: 1100px;
margin: 0 auto;
padding: 0 

@media screen and (max-width: 768px) {
flex-direction: column;
align-items: center;
justify-content: center;
/* padding: 0 15px; */
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
  max-width: 100%; // Allows it to be as wide as possible on larger screens
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100%; // Full width on smaller medium screens
    order: 2;
    padding: 25px;
  }
`;

export const Img = styled.img`
  width: 455px; // Fixed width of 455px
  height: auto; // Maintain aspect ratio
  position: relative;
  border-radius: 10px;
  border: 2px solid #e1affd;
  z-index: 10;
`;


export const TextWrapper = styled.div`
  max-width: 529px; // Explicitly setting the max-width
  width: 100%; // Ensures it takes the full width of the parent
  position: relative;
  /* padding: 0 24px; */

  @media screen and (max-width: 768px) {
    max-width: 100%; // Full width on smaller medium screens
    order: 1;
    padding: 0 24px;
  }
`;


export const TopLine = styled.p`
  font-size: 18px;
  color: #fff;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: left;
`;

export const Heading = styled.h1`
  /* margin-bottom: 20px; */
  color: #e1affd;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
margin-top: 15px;
  /* max-width: 440px; */
  margin-bottom: 15px;
  
  font-size: 18px;
  line-height: 26px;
  color: #fff;
  text-align: left;
  font-family: "Open Sans", sans-serif;


  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const FormWrap = styled.form`
  position: relative;
  z-index: 10;

  @media screen and (max-width: 768px) {
    order: 1;
  }
`;

export const TextArea = styled.textarea`
margin-top: 15px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: vertical;
`;

export const CommentBtnWrapper = styled.button`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;
`;

