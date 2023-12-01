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
`;


export const SocialMediaLogo = styled(Link)`
    color: #e1affd;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const SocialMediaIcon = styled.img`
    width: 75px;
    height: 75px;
    color: #e1affd;
    display: block;
    justify-content: space-around;
    
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    text-align: center;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    color: #e1affd;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;