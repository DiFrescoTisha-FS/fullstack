import styled from "styled-components";
import backgroundImage from "../../images/single.png";

export const MusicContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    height: 860px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }/* Adjust the background position as needed */

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const MusicBg =styled.div`
  position: absolute; // Changed from fixed to absolute
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  background-position: center;
  /* z-index: -1;  */
`;

export const MusicImg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const MusicWrapper = styled.div`
    display: flex; /* Use flex display for a simpler layout */
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center children horizontally */
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 24px;
    justify-content: center;
`;

export const MusicRow = styled.div`
    display: flex; /* Use flex display */
    flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")}; /* Reverse the order if imgStart is true */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    text-align: center; /* Center text horizontally */
    gap: 50px; /* Add gap between columns */
    @media screen and (max-width: 768px) {
        flex-direction: column; /* Stack columns vertically on small screens */
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    /* align-items: center; */
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.p`
    font-size: 18px;
    color: #fff;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: left;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    color: #e1affd;
    font-size: 44px;
    line-height: 1.1;
    font-weight: 600;
    text-align: left; 
    };

    @media screen and (max-width: 768) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 14px;
    line-height: 26px;
    color: #fff;
    text-align: left; 
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
`;

export const MusicDiv = styled.div`
  /* width: 455px; */ /* You can remove this line */
  display: flex;
  margin-right: 50px;
  /* flex-direction: row; */ /* No need to specify this, flex is row by default */
  /* height: auto; */ /* You can remove this line */
`;

export const Music = styled.div` 
    width: 100%;   
    height: auto; 
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10px;
    border: 2px solid #e1affd; 
    box-shadow {
            -webkit-box-shadow: 10px 45px 30px -25px #e1affd;
                -moz-box-shadow: 10px 35px 30px -25px #e1affd;
                    box-shadow: 10px 35px 30px -25px #e1affd;
        }
`;