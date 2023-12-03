import React from "react";
import { Button } from "../ButtonElements";
import tattooFingers from "../../images/tattoofingers.JPG";
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
  TrapstarText, // Import TrapstarText if needed
} from "./ThoughtsElements"; // Adjust the path as needed

const Thoughts = ({
  id,
  imgStart,
  img,
  backgroundImage,
  lightText, // Add the lightText prop
}) => {
  return (
    <ThoughtsContainer id="thoughts">
      <ThoughtsBg>
        <TwinklingBackground
          thoughtsImage="https://i.imgur.com/twbYyTg.png"

        />
      </ThoughtsBg>
      <ThoughtsWrapper>
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
