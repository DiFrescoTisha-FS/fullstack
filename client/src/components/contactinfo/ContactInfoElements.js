import styled, { css } from 'styled-components';

// Base button styles
export const ButtonBaseStyles = css`
  border-radius: 50px;
  background: #e1affd; // Default background
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
    color: #e1affd; // Hover text color
  }
`;

// Custom button with specific overrides
export const CustomButton = styled.button`
  ${ButtonBaseStyles} // Apply base styles
  background-color: #010606; // Custom background color: ;
  color: #e1affd;
  border: 2px solid #e1affd;

  &:hover {
    background-color: #e1affd; // Custom hover background color
    color: #010606; // Custom hover text color: ;

  }
`;


export const Icon = styled.img`
width: 40px; // Adjust size as needed
height: 40px;
border-radius: 50%; // Circular shape
`;

export const ContactInfoContainer = styled.div`
background-color: #010606; 
color: #e1affd;
padding: 15px;
border-radius: 5px;
margin-top: 10px;
border: 1px solid #e1affd;
`;