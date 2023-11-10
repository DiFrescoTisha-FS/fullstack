import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../../images/logo.jpg';
import UserComponent from '../UserComponent';

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
} from './NavbarElements';

const Navbar = ({ toggle, onSignIn, onSignOut }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const toggleHome = () => {
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
      <IconContext.Provider value={{ color: '#e1affd' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <motion.div {...logoAnimation}>
                <NavIcon src={logo} />
              </motion.div>
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              {['bio', 'music', 'new', 'thoughts', 'comments'].map((item, index) => (
                <motion.li key={index} {...navItemsAnimation}>
                  <NavLinks
                    to={item}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLinks>
                </motion.li>
              ))}
            </NavMenu>

            <NavGoogleBtn>
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
