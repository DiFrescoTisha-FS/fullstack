import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transitiion: 0.8s all ease;
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
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const NavIcon = styled.img`
    width: 80px;
    height: 80px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration:none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    position: relative; // Required for absolute positioning of the pseudo-element
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); // Center the border
    width: 60%; // Adjust this value to control the border's length
    height: 2px; // Border thickness
    background-color: #e1affd; // Border color
    opacity: 0;
    transition: opacity 0.3s;
    margin-bottom: -4px;
  }

  &:hover::after,
  &.active::after {
    opacity: 1; // Show the border on hover and when active
  }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
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

export const GoogleSignInButton = styled.button`
  // Shared styles for all views
  display: inline-flex;
  align-items: center;
  background: #ac94f4;
  color: white;
  border: none;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 40px;
  &:hover {
    color: #010606;
    background: white;
    // Other hover styles
  }

  // Hide on desktop by default
  /* display: none; */

  // Display button in mobile nav menu
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    margin-top: auto; // Pushes the button to the bottom of the nav menu
    border-bottom: 3px solid #ac94f4; // Active style
  }
`;