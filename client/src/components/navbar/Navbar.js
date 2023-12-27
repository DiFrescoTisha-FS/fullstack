import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../images/FINAL_LOGO.png";
import UserComponent from "../UserComponent";
import { GoogleSignInIcon } from "../GoogleSignInIcon";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavGoogleBtn,
} from "./NavbarElements";

const Navbar = ({ toggle, onSignIn, onSignOut }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("Toggling menu", !isOpen);
  };

  const toggleHome = () => {
    console.log("Toggle clicked");
    scroll.scrollToTop();
  };

  const handleSignIn = (userData) => {
    setCurrentUser(userData);
    if (onSignIn) {
      onSignIn(userData);
    }
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    if (onSignOut) {
      onSignOut();
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Animation for the logo
  const logoAnimation = {
    initial: {
      x: -500,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    transition: {
      duration: 1.5,
    },
  };

  // Animation for the nav items and Google button
  const navItemsAnimation = {
    initial: {
      x: 500,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    transition: {
      duration: 1.5,
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#e1affd" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <motion.div {...logoAnimation}>
                <NavIcon src={logo} />
              </motion.div>
            </NavLogo>

            <MobileIcon onClick={handleToggle}>
              <FaBars onClick={() => console.log("test click")} />
            </MobileIcon>

            <NavMenu $isOpen={isOpen} onClick={closeMobileMenu}>
              {["home", "bio", "music", "new", "thoughts", "comments"].map(
                (item, index) => (
                  <NavItem key={index}>
                    <NavLinks
                      to={item}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      onClick={closeMobileMenu}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavLinks>
                  </NavItem>
                )
              )}
              {/* Add the sign-in icon and text as a list item */}
              {isOpen && (
                <UserComponent
                  currentUser={currentUser}
                  onSignIn={handleSignIn}
                  onSignOut={handleSignOut}
                />
              )}
            </NavMenu>

            <NavGoogleBtn $isOpen={isOpen}>
              <motion.div {...navItemsAnimation}>
                <UserComponent
                  currentUser={currentUser}
                  onSignIn={handleSignIn}
                  onSignOut={handleSignOut}
                />
              </motion.div>
            </NavGoogleBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
