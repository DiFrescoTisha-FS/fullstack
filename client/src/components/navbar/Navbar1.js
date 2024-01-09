import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserComponent from "../UserComponent";
import { FcGoogle } from "react-icons/fc";
import logo from "../../images/purple_logo.png";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  GoogleSignInButton,
} from "./NavbarElements";

const Navbar1 = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  const changeNav = () => {
    if (window.scrollY > +80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent the default action (navigation in this case)
    event.stopPropagation(); // Stop the event from bubbling up to parent elements
    window.location.href = "http://localhost:4000/auth/google";
  };

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await fetch("http://localhost:4000/auth/logout", {
        credentials: "include",
      });
      setCurrentUser(null);
      navigate.push("/"); // This will navigate to the home route
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    // Function to check if the user is authenticated
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/auth/status", {
          credentials: "include", // This is important for cookies to be sent and received
        });
        const data = await response.json();

        if (data.isAuthenticated) {
          // Update your state with user data
          setCurrentUser(data.user);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
      }
    };

    // Call the function
    checkAuthStatus();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#ac94f4" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon src={logo} onClick={toggleHome} />
            </NavLogo>
            <MobileIcon onClick={isMobile ? toggle : undefined}>
              <FaBars />
            </MobileIcon>

            <NavMenu isOpen={isOpen} onClick={closeMobileMenu}>
            {['home', 'bio', 'music', 'new', 'thoughts', 'comments'].map((item, index) => (
                <motion.li key={index}>
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
              {isOpen && !currentUser && (
                <NavItem className="mt-auto">
                  <GoogleSignInButton
                    onClick={(event) => handleSignIn(event)}
                    className="..."
                  >
                    <FcGoogle size={26} className="mr-2" />
                    Sign in with Google
                  </GoogleSignInButton>
                </NavItem>
              )}
            </NavMenu>
            <NavBtn>
              <UserComponent
                currentUser={currentUser}
                onSignIn={(user) => setCurrentUser(user)}
                onSignOut={() => setCurrentUser(null)}
                isMobile={isMobile}
              />
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar1;
