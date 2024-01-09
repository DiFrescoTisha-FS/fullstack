// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { IconContext } from "react-icons/lib";
// import { animateScroll as scroll } from "react-scroll";
// import { motion } from "framer-motion";
// import logo from "../../images/purple_logo.png";
// import UserComponent from "../UserComponent";
// import { GoogleSignInIcon } from "../GoogleSignInIcon";
// import useWindowSize from "../../hooks/useWindowSize";

// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   NavIcon,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLinks,
//   MobileSignInButton, 
//   DesktopSignInButton
// } from "./NavbarElements";

// const Navbar = ({ onSignIn, onSignOut }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const size = useWindowSize(); // Use the hook

//   const isMobile = window.innerWidth <= 768;

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//     console.log("Menu toggle, isOpen now:", !isOpen);
//   };

//   const toggleHome = () => {
//     console.log("Toggle clicked");
//     scroll.scrollToTop();
//   };

//   const handleSignIn = (userData) => {
//     setCurrentUser(userData);
//     if (onSignIn) {
//       onSignIn(userData);
//     }
//   };

//   const handleSignOut = () => {
//     setCurrentUser(null);
//     if (onSignOut) {
//       onSignOut();
//     }
//   };

//   const closeMobileMenu = () => {
//     setIsOpen(false);
//   };

//   // Animation for the logo
//   const logoAnimation = {
//     initial: {
//       x: -500,
//       opacity: 0,
//       scale: 0.5,
//     },
//     animate: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     transition: {
//       duration: 1.5,
//     },
//   };

//   // Animation for the nav items and Google button
//   const navItemsAnimation = {
//     initial: {
//       x: 500,
//       opacity: 0,
//       scale: 0.5,
//     },
//     animate: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     transition: {
//       duration: 1.5,
//     },
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#ac94f4" }}>
//         <Nav>
//           <NavbarContainer>
//             <NavLogo to="/" onClick={toggleHome}>
//               <motion.div {...logoAnimation}>
//                 <NavIcon src={logo} />
//               </motion.div>
//             </NavLogo>

//             <MobileIcon onClick={handleToggle}>
//               {isOpen ? <FaTimes /> : <FaBars />}
//             </MobileIcon>

//             <NavMenu isOpen={isOpen} onClick={closeMobileMenu}>
//               {["home", "bio", "music", "new", "thoughts", "comments"].map(
//                 (item, index) => (
//                   <NavItem key={index}>
//                     <NavLinks
//                       to={item}
//                       smooth={true}
//                       duration={500}
//                       spy={true}
//                       exact="true"
//                       offset={-80}
//                       onClick={closeMobileMenu}
//                     >
//                       {item.charAt(0).toUpperCase() + item.slice(1)}
//                     </NavLinks>
//                   </NavItem>
//                 )
//               )}
//               {isOpen && !currentUser && (
//               <NavItem className="mt-auto">
//                 <NavLinks as="button" className="flex w-[100%] p-[10px 20px] bg-[#ac94f4] text-white text-center border-none cursor-pointer hover:bg-white color-[010606]">
//                     Sign in with Google
//                 </NavLinks>
//               </NavItem>
//             )}
//             </NavMenu>
//             <DesktopSignInButton onClick={handleSignIn}>
//             Sign in with Google
//           </DesktopSignInButton>

//             {/* {(!isMobile || isOpen) && (
//               <motion.div {...navItemsAnimation}>
//                 <UserComponent
//                   currentUser={currentUser}
//                   onSignIn={handleSignIn}
//                   onSignOut={handleSignOut}
//                 />
//               </motion.div>
//             )} */}
//           </NavbarContainer>
//         </Nav>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default Navbar;
