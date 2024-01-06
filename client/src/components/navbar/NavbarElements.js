import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease; // Corrected the spelling here
    }
`;


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const NavIcon = styled.img`
    width: auto; // Adjust to maintain aspect ratio
    max-width: 65px; // Set max width to prevent stretching
    max-height: 65px; // Set max height to prevent stretching
    position: relative;
    border-radius: 100%;
    border: 1px solid #ac94f4;

    @media screen and (max-width: 768px) {
      margin-top: 15px;
      width: auto; // Adjust to maintain aspect ratio
      max-width: 75px; // Set max width to prevent stretching
      max-height: 75px; // Set max height to prevent stretching

  }

  @media screen and (max-width: 480px) {
    max-width: 65px; // Set max width to prevent stretching
    max-height: 65px; // Set max height to prevent stretching
    border: 2px solid #ac94f4;
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1px;
    right: 1px;
    transform: translate(-100%, 60%);
    font-size: 2.8rem;
    cursor: pointer;
    z-index: 21;
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px; // Adjust if needed
    left: 0;
    background: #000;
    z-index: 10;
    padding-top: 20px; // Add padding to prevent sticking to the top
  }
`;

export const NavItem = styled.li`
  @media screen and (max-width: 768px) {
    width: 100%; // Make sure the item takes full width
    margin-bottom: 10px; // Adjust spacing between menu items
  }

  &.mobile-sign-in {
    display: none; // Hide by default

    @media screen and (max-width: 768px) {
      display: block; // Show only in mobile view
      width: 100%; // Take full width
    }
  }
`;


export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration:none;
    padding: 0 2rem; // Adjust padding for larger screens
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #ac94f4; // Your purple bottom border
        width: 60%; // Adjust this value to your preference
        margin-left: auto; // This will center the border
        margin-right: auto; // This will center the border
    }

    @media screen and (max-width: 768px) {
        padding: 0 1rem; // Combine both media query adjustments here
        margin-left: auto; // Center the line
        margin-right: auto; // Center the line

        &.active {
        border-bottom: 3px solid #ac94f4;
        width: 10%; // Make the line narrower
    }
  }

  @media screen and (max-width: 480px) {
        padding: 0 1rem; // Combine both media query adjustments here
        width: 10%; // Make the line narrower
        margin-left: auto; // Center the line
        margin-right: auto; // Center the line

        &.active {
        border-bottom: 3px solid #ac94f4;
        width: 20%; // Make the line narrower
    }
  }
`;

export const NavGoogleBtn = styled.div`
  justify-self: flex-end;
  cursor: pointer;
  display: none; // By default, it's not displayed
  align-items: center;
  margin-left: 24px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 16px;
  color: white;
  margin-left: 4px;
  margin-top: 9px;
  border: 1px solid #ac94f4;
  padding-rignt: 10px;
  padding-rignt: 2px;

  @media screen and (min-width: 769px) {
    display: flex; // It shows only in desktop view
  }

  @media screen and (max-width: 768px) {
    display: none; // Ensures it's hidden in mobile view
  }
`;


export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #ac94f4;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #010606;
        color: #ac94f4;
        border: 1px solid #ac94f4;
        outline: 1px solid #ac94f4;
}
`;