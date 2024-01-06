import React, { useState } from "react";
import { useAuth } from "../../AuthContext";
import { FaTimes, FaBars } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../images/purple_logo.png";
import TempLogoutButton from "../TempLogoutButton";
import UserComponent from "../UserComponent";
import { GoogleSignInIcon } from "../GoogleSignInIcon";
import axios from "axios";

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

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  console.log("User state in Navbar:", user);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

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

  return (
    <IconContext.Provider value={{ color: "#ac94f4" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <motion.div {...logoAnimation}>
              <NavIcon src={logo} />
            </motion.div>
          </NavLogo>
          <MobileIcon onClick={handleToggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu $isOpen={isOpen}>
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
            {isOpen && !user && (
              <NavItem className="mobile-sign-in">
                <GoogleSignInIcon onClick={handleLogin}>
                  <FcGoogle size="24" className="mr-4" />
                  <span>Sign in with Google</span>
                </GoogleSignInIcon>
              </NavItem>
            )}
          </NavMenu>
          {user ? (
            <>
              <UserComponent user={user} />
              
              <TempLogoutButton />
              <button onClick={logout} className="text-white">Logout</button>
            </>
          ) : (
            <NavGoogleBtn onClick={handleLogin}>
              <FcGoogle size={24} style={{ marginRight: "8px" }} />
              Sign in with Google
            </NavGoogleBtn>
          )}
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
