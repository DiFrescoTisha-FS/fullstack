import styled from "styled-components";
import { FaBus } from 'react-icons/fa'
import { FaArrowAltCircleDown } from 'react-icons/fa';

export const HeroContainer = styled.div`
    /* background: #0c0c0c; */
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    height: 800px;
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
`;

export const HeroBg =styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    background: linear-gradient(180deg, rgb(169, 169, 169, 0.2))
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 5;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #e1affd;
    font-size: 44px;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 768) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 16px;
    color: #fff;
    font-size: 18px;
    letter-spacing: .1rem;
    text-align: center;
    max-width: 600px;
    x-index: 5;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const SaturnImage = styled.img`
  position: absolute;
  top: 200px; /* Adjust the top position as needed */
  left: 600px; /* Adjust the left position as needed */
  z-index: -5; /* Set a higher z-index value to ensure it's above the twinkling stars */

  /* Adjust the size of the Saturn image */
  width: 400px; /* Adjust the width to make it larger */
  height: auto; /* Automatically adjust the height to maintain aspect ratio */

  /* Apply any other styling as needed */
`;

export const NeptuneImage = styled.img`
  position: absolute;
  top: -200px; /* Adjust the top position as needed */
  left: -300px; /* Adjust the left position as needed */
  z-index: -1; /* Set a higher z-index value to ensure it's above the twinkling stars */

  /* Adjust the size of the Saturn image */
  width: 500px; /* Adjust the width to make it larger */
  height: auto; /* Automatically adjust the height to maintain aspect ratio */

  /* Apply any other styling as needed */
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowFilled = styled(FaBus)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
    margin-left: 8px;
    font-size: 20px;
`;