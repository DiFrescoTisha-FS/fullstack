import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
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
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    window.google.accounts.id.disableAutoSelect();
    setUser(null);
    navigate("/login");
  };

  const handleCredentialResponse = (response) => {
    const decodedToken = jwtDecode(response.credential);
    const userData = {
      name: decodedToken.name,
      email: decodedToken.email,
      imageUrl: decodedToken.picture,
    };
    setUser(userData);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      window.google.accounts.id.initialize({
        client_id:
          "630469049970-161iihf5mjh96rt6mj963asetm2cv665.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        { theme: "outline", size: "large" }
      );
    };

    if (window.google && window.google.accounts) {
      initializeGoogleSignIn();
    } else {
      // Wait for the Google Sign-In library to load.
      window.onload = initializeGoogleSignIn;
    }
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#e1affd" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
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
              <NavItem>
                <NavLinks
                  to="feedback"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Feedback
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {user && (
                <div className="relative">
                  <button
                    className="flex items-center bg-black space-x-4 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
                    onClick={handleToggleDropdown}
                  >
                    <img
                      className="rounded-full w-8 h-8"
                      src={user.imageUrl}
                      alt=""
                    />
                    <h3 className="text-gray-400">{user.name}</h3>
                    <FaChevronDown
                      className="h-3"
                      style={{ color: "rgb(128, 128, 128)" }}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-38 bg-gray-300 rounded-lg shadow-lg z-10">
                      <button
                        className="block px-2 py-1 text-gray-800 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
