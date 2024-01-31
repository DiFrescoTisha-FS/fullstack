import React from "react";
import { Button } from "../ButtonElements";
import tattooFingers from "../../images/tattoofingers.JPG";
import thoughtsDesktopImage from "../../images/thoughtsDesktop100.png"
import thoughtsTabletImage from "../../images/thoughtsTablet.png"
import thoughtsMobileImage from "../../images/thoughtsMobile.png"
// import { Clouds } from "../twinklingbackground/TwinklingBackground";
import TwinklingBackground from "../twinklingbackground/TwinklingBackground";
import {
  ThoughtsContainer,
  ThoughtsBg,
  ThoughtsWrapper,
  ThoughtsRow,
  BtnWrap,
  ImgWrap,
  Img,
  ArrowFilled,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  TrapstarText,
  ThoughtsCloud1,
  ThoughtsCloud2,
  ThoughtsCloud3,
  ThoughtsCloud4,
  ThoughtsCloud5,
  ThoughtsCloud6,
} from "./ThoughtsElements"; // Adjust the path as needed

const Thoughts = ({
  id,
  imgStart,
  img,
  // backgroundImage,
  lightText, // Add the lightText prop
}) => {

  // const backgroundImage = thoughtsDesktop;

  return (
    <ThoughtsContainer id="thoughts">
      <TwinklingBackground />
      {/* <Clouds style={{zIndex: '10'}} /> */}
        <ThoughtsBg
          backgroundImageDesktop={thoughtsDesktopImage}
          backgroundImageTablet={thoughtsTabletImage}
          backgroundImageMobile={thoughtsMobileImage}
      />
        {/* <ThoughtsCloud1 style={{ zIndex: '10' }} />
        <ThoughtsCloud2 style={{ zIndex: '10' }} />
        <ThoughtsCloud3 style={{ zIndex: '10' }} />
        <ThoughtsCloud4 style={{ zIndex: '10' }} /> */}
        {/* <ThoughtsCloud5 style={{ zIndex: '10' }} /> */}
        {/* <ThoughtsCloud6 style={{ zIndex: '10' }} /> */}
      <ThoughtsWrapper style={{zIndex: '20'}}>
        <ThoughtsRow imgStart={imgStart}>
          <TextWrapper>
            <TopLine>Trapstar Bam Quote</TopLine>{" "}
            {/* Pass lightText prop */}
            <Heading>Thoughts on Music</Heading>
            <Subtitle>
              'Music is a way for me to escape reality. It exposes my flaws, and
              pushes me to be a better person. Always believe in yourself, even
              when no one else does. Do not let life get in the way of following
              your dreams.'
            </Subtitle>{" "}
            {/* Pass lightText prop */}
            <TrapstarText>~TrapstarBam</TrapstarText>
            <BtnWrap>
              <Button
                to="comments"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                textDecoration="none"
                $primary="true"
                $dark="true"
                style={{ marginTop: "20px" }}
              >
                {"Continue"}&nbsp;&nbsp;{<ArrowFilled size={20} />}
              </Button>
            </BtnWrap>
          </TextWrapper>

          <ImgWrap>
            <Img
              src={tattooFingers}
              alt="singer with tattooed fingers on top of his head"
            />
          </ImgWrap>
        </ThoughtsRow>
      </ThoughtsWrapper>
    </ThoughtsContainer>
  );
};

export default Thoughts;
