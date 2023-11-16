// SectionContainer.js
import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 860px; // Ensures all sections have at least 860px height
  padding: 0;
  z-index: 1;

  // Adjust background size on smaller screens
  @media screen and (max-width: 768px) {
    background-size: 70%; // Shrinks the image content to 70% of the container's size
  }
  
  // Further adjustments for even smaller screens
  @media screen and (max-width: 480px) {
    background-size: 50%; // Shrinks the image content to 50% of the container's size
  }
`;
