import React from "react";
import galaxy from "../../images/galaxy.jpg";
import { Button } from "../ButtonElements";
import { FaArrowAltCircleDown } from "react-icons/fa";
import artistDesktopImage from '../../images/artistDesktop2.png';
import artistTabletImage from '../../images/artistTablet.png';
import artistMobileImage from '../../images/artistMobile.png';

import TwinklingBackground from "../twinklingbackground/TwinklingBackground";

import {
  ArtistInfoContainer,
  ArtistBg,
  ArtistInfoWrapper,
  ArtistInfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./ArtistElements";

const ArtistInfo = ({
  darkText,
  alt,
}) => {
  return (
    <>
      <ArtistInfoContainer id="bio">
        <TwinklingBackground />
        <ArtistBg
          backgroundImageDesktop={artistDesktopImage}
          backgroundImageTablet={artistTabletImage}
          backgroundImageMobile={artistMobileImage}
        />
        <ArtistInfoWrapper style={{zIndex: '20'}}>
          <ArtistInfoRow>
            <TextWrapper>
              <TopLine>Approved Bam Bio</TopLine>
              <Heading>Gavin Di Fresco</Heading>
              <Subtitle darkText={darkText}>Gavin Di Fresco, known professionally as Trapstar Bam, is an American rapper, singer, and songwriter who shares his life experiences in his lyrics, inspiring others who can relate to the issues of his generation. Career highlights include a live performance at Innovative Academy prom in Hendersonville, NC, and a sold-out show in his home town of Brevard, NC.'</Subtitle>
              <BtnWrap>
                <Button
                  to="music"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                 $primary="true"
                 $dark="true"
                >
                  {"See More"}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                </Button>
              </BtnWrap>
            </TextWrapper>
            <ImgWrap>
              <Img src={galaxy} alt={alt} />
            </ImgWrap>
          </ArtistInfoRow>
        </ArtistInfoWrapper>
      </ArtistInfoContainer>
    </>
  );
};

export default ArtistInfo;
