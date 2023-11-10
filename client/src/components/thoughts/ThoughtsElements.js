import styled from "styled-components";
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { MdFrontHand } from 'react-icons/md';
import { Link } from 'react-scroll';
import backgroundImage from "../../images/lassothoughts.png"

export const ThoughtsContainer = styled.div`
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
    }

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const ThoughtsBg = styled.div`
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
  z-index: -1; // Ensure this is behind the content of the ArtistInfoContainer
`;

export const ThoughtsWrapper = styled.div`
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
    /* margin-bottom: 40px; Adjust the margin as needed */
`;

export const ThoughtsRow = styled.div`
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

export const TrapstarText = styled.p`
color: #fff;
font-size: 16px;
font-weight: 500;
margin-top: 12px;
text-align: left;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 20px; /* Adjust the padding as needed */
    text-align: center; /* Center text horizontally */
`;



export const ImgWrap = styled.div`
    max-width: 455px;
`;

export const Img = styled.img`
    max-width: 100%;
    height: auto;
    /* margin: 0 0 10px 0; */
    padding-right: 0;
    border-radius: 10px;
    border: 2px solid #e1affd;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Button = styled(Link)`
    margin-top: 10px;
`
// export const Button = styled(Link)`
//     /* Your button styling here */
//     /* Example styling: */
//     border-radius: 50px;
//     background: ${({ primary }) => (primary ? '#e1affd' : '#010606')};
//     border: ${({ dark }) => (dark ? '#010606' : '#e1affd')};
//     white-space: nowrap;
//     padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
//     color: ${({ dark }) => (dark ? '#010606' : '#e1affd')};
//     font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
//     outline: none;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: all 0.2s ease-in-out;

//     &:hover {
//         /* Your hover styling here */
//         /* Example styling: */
//         background: ${({ dark }) => (dark ? '#010606' : '#e1affd')};
//         color: ${({ primary }) => (primary ? '#e1affd' : '#010606')};
//         outline: 1px solid #010606;
//         border: 1px solid #e1affd;
//     }
// `;

export const TopLine = styled.p`
    color: #fff;
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: left; /* Add text-align property here */
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    color: #e1affd;
    font-size: 44px;
    line-height: 1.1;
    font-weight: 600;
    text-align: left; /* Add text-align property here */
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 14px;
    line-height: 26px;
    color: #fff;
    text-align: left; /* Add text-align property here */
`;


export const ArrowFilled = styled(MdFrontHand)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleUp)`
    margin-left: 8px;
    font-size: 20px;
`;
