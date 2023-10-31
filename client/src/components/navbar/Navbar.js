import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import * as jwtDecode from "jwt-decode";
// import Login from "../Login";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../images/logo.jpg";
import GoogleLoginButton from "../GoogleLoginButton"; // Import the GoogleLoginButton component

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [user, setUser] = useState(null);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // Define the handleSignOut function
  const handleSignOut = () => {
    // Implement your sign-out logic here
    // For example, clear user data from state or local storage
    setUser(null);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#e1affd" }}>
        <Nav>
          <NavbarContainer>
            <motion.div
              initial={{
                x: -100, // Initial X position
                opacity: 0,
              }}
              animate={{
                x: 0, // Final X position
                opacity: 1,
              }}
              transition={{
                duration: 0.8, // Animation duration
                delay: 0.2, // Delay before animation starts
              }}
            >
              <NavLogo to="/" onClick={toggleHome}>
                <NavIcon as={motion.img} src={logo} /> {/* Animate the logo */}
              </NavLogo>
            </motion.div>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
                                        {/* Conditionally render the GoogleLoginButton */}
              <NavItem>
                <GoogleLoginButton user={user} setUser={setUser} />
              </NavItem>
              {/* Add a conditional rendering for the GoogleLoginButton */}
              <NavItem>
                    <NavLinks 
                      to='bio'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80} 
                    >
                      Bio</NavLinks>
                  </NavItem>
                  <NavItem>
                  <NavLinks 
                      to='music'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80} 
                    >
                      Music</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to='new'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    New</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to='thoughts'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                      Thoughts</NavLinks>
                  </NavItem>

              <NavItem>
                {/* Conditionally render the GoogleLoginButton */}
                {!user ? <GoogleLoginButton /> : null}
              </NavItem>
              {/* Add more menu items */}
            </NavMenu>
            <NavBtn>
              {user ? (
                /* Show user profile and sign out button when user is logged in */
                <div onClick={handleSignOut}>Sign Out</div>
              ) : null}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
