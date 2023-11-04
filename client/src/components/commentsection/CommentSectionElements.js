import styled from 'styled-components';

// ... other components ...

export const CommentSectionContainer = styled.div`
    position: : relative;
    z-index: 5;
    color: ${({ lightText }) => (lightText ? '#fff' : '#010606')};
    background: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : '#010606')};
    background-size: cover; /* Adjust the background size as needed */
    background-position: center; /* Adjust the background position as needed */
    padding: 100px 0;
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Use space-between to place children on opposite ends of the container
  height: 860px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto; // Allow the height to grow as needed on smaller screens
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
`

export const ImgWrap = styled.div`
  max-width: 555px; // Adjust the width as necessary
  height: auto;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
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
    max-width: 100%;
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
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 14px;
    line-height: 26px;
    color: #fff;
    /* color: ${({ lightText }) => (lightText ? '#fff' : '#010606')}; */
    text-align: left; /* Add text-align property here */
`;

export const FormWrap = styled.form`
    position: relative;
    /* border: 2px solid red; */
    /* background: lightblue; */
    z-index: 10;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: vertical; // Allows the user to resize the textarea vertically
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #e1affd;
  color: white;
  cursor: pointer;
  // add more styling as needed
`;

// ... other components ...
