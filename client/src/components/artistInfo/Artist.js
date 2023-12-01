import React from "react";
import galaxy from "../../images/galaxy.jpg";
import { Button } from "../ButtonElements";
import { FaArrowAltCircleDown } from "react-icons/fa";

// import { Twinkling, Stars, Clouds } from '../twinkling/TwinklingNightSkyElements';

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
  backgroundImage,
  id,
  imgStart,
  topline,
  // lightText,
  headline,
  darkText,
  description,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <ArtistInfoContainer backgroundImage={backgroundImage} id="bio">
      {/* <ArtistInfoContainer  id="bio"> */}
        <ArtistBg>
        </ArtistBg>
        <ArtistInfoWrapper>
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
