import styled from "styled-components";
import { Link } from 'react-router-dom';


export const FooterContainer = styled.footer`
    background-color: #010606;
`;

export const FooterWrap =  styled.div`
    padding-top: 46px 0 24px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 20px; 
    }
`;

export const FooterLinkItems =styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    flex-wrap: nowrap;
    margin-bottom: 20px;
    margin-top: 40px;
    color: #e1affd;
`;

export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;

    &:hover {
        color: #e1affd;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto;
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column; // Keep the column direction
    align-items: center; // Center-align the items
    /* justify-content: space-between; */
  }
`;

export const SocialMediaLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    order: 0; // Logo will be second-to-last item
    align-self: center; // Center logo
  }
`;

export const SocialMediaIcon = styled.img`
  max-width: 65px;
  max-height: 65px;
  border-radius: 100%;
  border: 1px solid #e1affd;

  @media screen and (max-width: 480px) {
    max-width: 45px; // Adjust the logo size for mobile view
    order: 1; // Keep the logo with its wrapper
    margin-left: 20px;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  text-align: center;
  display: block;

  @media screen and (max-width: 480px) {
    order: 1; // Rights text will be last item
    width: 100%; // Take up full width
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 480px) {
    width: 100%; // Take up full width on mobile
    justify-content: center; // Center icons
    margin-top: 20px; // Space between contact info and icons
    gap: 12px;
  }
`;

// Adjust SocialMediaLogo and WebsiteRights to be in the same container for mobile view
export const LogoRightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; // Take full width to separate logo and text

  @media screen and (max-width: 480px) {
    flex-direction: row; // Ensure they are in a row
    justify-content: space-between; // Spread logo and text on opposite ends
    margin-top: 20px; // Space between icons and this container
    padding: 0 20px; // Padding on the sides
    justify-content: space-between;
  }
`;

// Now wrap the SocialMediaLogo and WebsiteRights inside LogoRightsContainer
// Assuming that CustomButton is used within SocialMediaWrap and is styled separately

// Apply these styles to the CustomButton or its wrapper
export const CustomButtonWrapper = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%; // Take up full width
    display: flex; // Use flex to center the button
    justify-content: center; // Center the button
    margin-top: 20px; // Space at the top
  }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;