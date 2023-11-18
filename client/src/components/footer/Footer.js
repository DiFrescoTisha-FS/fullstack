import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaSoundcloud } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import { BsSnapchat, BsSpotify } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IconContext } from 'react-icons/lib';
import logo from '../../images/logo.jpg'

import { 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterContainer,
    FooterWrap,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialMediaLogo,
    SocialMediaIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterLink
} from "./FooterElements";
import ContactInfo from "../contactinfo/ContactInfo";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };

  return (
<IconContext.Provider value={{ color: '#e1affd' }}>
<FooterContainer>

<FooterWrap>
  <FooterLinksContainer>
    <FooterLinksWrapper>
      <FooterLinkItems>
        <ContactInfo />
      </FooterLinkItems>
    </FooterLinksWrapper>
  </FooterLinksContainer>
</FooterWrap>
</FooterContainer>
    <FooterContainer>
        <FooterWrap>
            <SocialMedia id="social media">
                <SocialMediaWrap>
                    <SocialMediaLogo to='/' onClick={toggleHome}>
                        <SocialMediaIcon src={logo} alt="logo" />
                    </SocialMediaLogo>
                    <WebsiteRights>Trapstar Bam @ {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/trapstarbam" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/trapstar_bam" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                            <BsSpotify />
                        </SocialIconLink>
                        <SocialIconLink href="/"  target="_blank" rel="noopener noreferrer" aria-label="SnapChat">
                            <BsSnapchat />
                        </SocialIconLink>
                        <SocialIconLink href="//https://soundcloud.com/trapstarbam" aria-label="SoundCloud">
                            <FaSoundcloud />
                        </SocialIconLink>  
                        <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" aria-label="SnapChat">
                            <MdEmail />
                        </SocialIconLink>  
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </IconContext.Provider>
  )
}

export default Footer;