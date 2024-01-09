import React from "react";
import UserComponent from "../UserComponent";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
//   SidebarRoute,
} from "./SidebarElements";

// import { SidebarSignInButton } from "../SidebarSignInButton";

const navItems = ['home', 'bio', 'music', 'new', 'thoughts', 'comments'];


const Sidebar = ({ toggle, isOpen, currentUser, handleSignOut, handleSignIn }) => {
    console.log("Current User in Sidebar:", currentUser); 
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <SidebarWrapper>
    <SidebarMenu>
          {navItems.map((item, index) => (
            <SidebarLink key={index} to={item} onClick={toggle}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <UserComponent
            currentUser={currentUser}
            onSignIn={handleSignIn}
            onSignOut={handleSignOut}
          />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
