import React from "react";
// import Bio from "../../images/bio.jpg";
import { Button } from "../ButtonElements";
import { FaArrowAltCircleDown } from "react-icons/fa";
// import { Twinkling, Stars, Clouds } from '../twinkling/TwinklingNightSkyElements';

import {
  ArtistInfoContainer,
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
// import TwinklingNightSky from "../twinkling/TwinklingNightSky";

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
      {/* <Stars />
      <Twinkling />
      <Clouds /> */}
      <ArtistInfoContainer backgroundImage={backgroundImage} id={id}>
        {/* <BioBg>
          <BioImg src={Bio} alt="celestial scene" />
        </BioBg> */}
        <ArtistInfoWrapper>
          <ArtistInfoRow imageStart={imgStart}>
            <TextWrapper>
              <TopLine>{topline}</TopLine>
              <Heading>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="music"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true ? "true" : "false"}
                  dark={true ? "true" : "false"}
                  dark2={true ? "true" : "false"}
                  //   primary={primary ? 1 : 0}
                  //   dark={dark ? 1 : 0}
                  //   dark2={dark2 ? 1 : 0}
                >
                  {"See More"}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                </Button>
              </BtnWrap>
            </TextWrapper>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </ArtistInfoRow>
        </ArtistInfoWrapper>
      </ArtistInfoContainer>
    </>
  );
};

export default ArtistInfo;
