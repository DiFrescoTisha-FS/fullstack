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
  width: 60px; // You may adjust this as necessary
  height: 60px; // Or keep it auto if you want to maintain the aspect ratio
  box-shadow: 0 0 20px white; // This adds a glow effect
  border: 3px solid #ac94f4; // A white border for contrast
  border-radius: 50%; // To maintain the circular shape
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
    background-color: #ac94f4; // Border color
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
    margin-bottom: 14px;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px; // Space between text and icon
    border-radius: 4px; // Google buttons usually have less rounded corners
    background: #ffffff; // White background
    white-space: nowrap;
    padding: 10px 22px;
    color: #5F6368; // Google's text color
    font-size: 16px;
    font-weight: 500; // Google font weight
    outline: none;
    border: 1px solid #DADCE0; // Light grey border
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25); // Subtle shadow
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        background-color: #F8F9FA; // Light grey background on hover
        border-color: #C6C6C6; // A slightly darker border on hover
        box-shadow: 0 0 3px 3px rgba(66,133,244,0.3); // Blue shadow on hover
        color: #5F6368; // Text color remains the same
    }
`;

export const GoogleSignInButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px; // Space between text and icon
    border-radius: 4px; // Google buttons usually have less rounded corners
    background: #ffffff; // White background
    white-space: nowrap;
    padding: 10px 22px;
    color: #5F6368; // Google's text color
    font-size: 16px;
    font-weight: 500; // Google font weight
    outline: none;
    border: 1px solid #DADCE0; // Light grey border
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25); // Subtle shadow
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        background-color: #F8F9FA; // Light grey background on hover
        border-color: #C6C6C6; // A slightly darker border on hover
        box-shadow: 0 0 3px 3px rgba(66,133,244,0.3); // Blue shadow on hover
        color: #5F6368; // Text color remains the same
    }
`;