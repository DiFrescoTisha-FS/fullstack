import styled from "styled-components";
import { FaArrowAltCircleDown, FaBusAlt } from 'react-icons/fa';

export const ArtistInfoContainer = styled.div`
    position: relative;
    color: #fff;
    /* background: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : '#010606')}; */
    background-size: cover; /* Adjust the background size as needed */
    background-position: center;
    margin: 0; /* Adjust the background position as needed */
    /* z-index: 10; */

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const BioBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
`;

export const BioImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  opacity: 1;
`;

export const ArtistInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ArtistInfoRow = styled.div`
  display: flex; /* Change to flex */
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')}; /* Adjust flex direction as needed */
  align-items: center;
  justify-content: space-between;
  /* margin: 10%; */

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Adjust flex direction for smaller screens */
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  position: relative;
`;

export const TopLine = styled.p`
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #fff;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  color: #e1affd;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;

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
  font-size: 18px;
  line-height: 28px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

export const ImgWrap = styled.div`
  max-width: 455px;
  display: flex;
  /* flex-direction: row; */ /* No need to specify this, flex is row by default */
  position: relative;
  z-index: 1;
  margin-left: 50px;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 10px;
  border: 1px solid #e1affd;
  /* box-shadow: 10px 35px 30px -25px #e1affd; */
`;

export const ArrowFilled = styled(FaBusAlt)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;
