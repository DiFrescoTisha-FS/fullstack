import styled from "styled-components";

export const GoogleSignInIcon = styled.button`
  display: flex;
  justify-content: center; // Centers the button horizontally
  align-items: center;
  width: 100%; // Takes the full width of the container
  padding: 10px 0; // Adds vertical padding
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;

  svg {
    margin-right: 10px;
  }

  &:hover {
    text-decoration: underline;
  }
`;


