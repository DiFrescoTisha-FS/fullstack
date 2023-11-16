import styled from "styled-components";

export const GoogleSignInIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 10px;
  font-size: 16px;

  svg {
    margin-right: 10px; // This adds 10px space between the icon and the text
  }

  &:hover {
    text-decoration: underline;
  }
`;


