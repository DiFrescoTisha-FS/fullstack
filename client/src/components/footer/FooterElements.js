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
    color: #ac94f4;
`;

export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;

    &:hover {
        color: #ac94f4;
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
`;


export const SocialMediaLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const SocialMediaIcon = styled.img`
    max-width: 65px;
    max-height: 65px;
    margin-bottom: 15px;
    border-radius: 100%;
    border: 2px solid #ac94f4;

    @media screen and (max-width: 480px) {
    flex-direction: column;
    max-width: 55px;
  }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin: 16px 0;
    text-align: center;
    display: block; // This will ensure it centers in its own line
`;
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    color: #ac94f4;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;