import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import * as jwtDecode from "jwt-decode";
// import Login from "../Login";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../images/logo.jpg";
import UserComponent from "../UserComponent";
// import GoogleLoginButton from "../GoogleLoginButton";
// import ProfileDropdown from "../ProfileDropdown";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  // NavBtn,
  NavLinks,
  NavGoogleBtn,
} from "./NavbarElements";

const Navbar = ({ toggle, onSignIn, onSignOut }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // Replace the 'user' prop with 'currentUser' for sign-in logic
  const handleSignIn = (userData) => {
    setCurrentUser(userData); // Set the user data to currentUser
    if (onSignIn) {
      onSignIn(userData); // If there is a sign-in handler passed as a prop, call it
    }
  };

  // Update the sign-out logic to use 'setCurrentUser'
  const handleSignOut = () => {
    setCurrentUser(null); // Clear the currentUser state
    if (onSignOut) {
      onSignOut(); // If there is a sign-out handler passed as a prop, call it
    }
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
              {/* <NavItem>
                <GoogleLoginButton user={user} setUser={setUser} />
              </NavItem> */}
              {/* Add a conditional rendering for the GoogleLoginButton */}
              <NavItem>
                <NavLinks
                  to="bio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Bio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="music"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Music
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="new"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  New
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="thoughts"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Thoughts
                </NavLinks>
              </NavItem>


              {/* Add more menu items */}
            </NavMenu>

              <NavGoogleBtn>
                <UserComponent
                  currentUser={currentUser}
                  onSignIn={handleSignIn}
                  onSignOut={handleSignOut}
                />
              </NavGoogleBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
