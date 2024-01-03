import styled, { css } from 'styled-components';

// Base button styles
export const ButtonBaseStyles = css`
  border-radius: 50px;
  background: #ac94f4; // Default background
  padding: 5px 5px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  gap: 10px;
  min-width: 200px;

  &:hover {
    background: #010606; // Hover background
    color: #ac94f4; // Hover text color
  }

  // Media query for tablet devices
  @media screen and (max-width: 768px) {
    padding: 2px 10px;
    font-size: 14px;
    min-width: 160px; 
  }

  // Media query for mobile devices
  @media screen and (max-width: 480px) {
    padding: 2px 8px;
    font-size: 12px;
    min-width: 140px; // Smaller width on mobile
  }
`;

export const CustomButton = styled.button`
  ${ButtonBaseStyles} // Apply base styles
  background-color: #010606; // Custom background color
  color: #ac94f4;
  border: 1px solid #ac94f4;

  &:hover {
    background-color: #ac94f4; // Custom hover background color
    color: #010606; // Custom hover text color
  }

    // Media query for mobile devices
    @media screen and (max-width: 480px) {
    font-size: 12px; // Smaller font size on mobile
    padding: 2px 2px; // Smaller padding on mobile
    border: 1px solid #ac94f4;
    // Adjust min-width if necessary
  }
`;

export const Icon = styled.img`
width: 40px; // Adjust size as needed
height: 40px;
border-radius: 50%; // Circular shape

@media screen and (max-width: 480px) {
    font-size: 12px; // Smaller font size on mobile
    width: 30px; // Adjust size as needed
    height: 30px;
    /* padding: 8px 16px; // Smaller padding on mobile */
  }
`;

export const ContactInfoContainer = styled.div`
background-color: #010606; 
color: #ac94f4;
padding: 15px;
border-radius: 5px;
margin-top: 10px;
border: 1px solid #ac94f4;
`;