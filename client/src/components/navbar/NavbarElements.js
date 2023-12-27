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
    border: 1px solid #e1affd;
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 2.5rem;
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
        border-bottom: 3px solid #e1affd; // Keep this line and remove the duplicate

    @media screen and (max-width: 768px) {
        padding: 0 1rem; // Combine both media query adjustments here
        border-bottom-width: 2px; // Adjustments for smaller screens
        width: 50%; // Make the line narrower
        margin-left: auto; // Center the line
        margin-right: auto; // Center the line
    }
  }
`;


export const NavGoogleBtn = styled.div`
  justify-self: flex-end;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 500; // This is fine, '500' is equivalent to 'font-weight: normal;'
  text-decoration: none;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')}; // Correct use of prop for conditional CSS
    width: 100%;
    justify-content: center;
    padding: 1rem 0; // Adds padding for spacing
  }
`;





export const NavBtnLink = styled(LinkR)`
    /* border-radius: 50px; */
    /* background: #e1affd; */
    /* white-space: nowrap; */
    /* padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none; */

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #010606;
        color: #e1affd;
        border: 1px solid #e1affd;
        outline: 1px solid #e1affd;
}
`;



