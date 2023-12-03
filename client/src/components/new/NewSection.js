import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "../ButtonElements";
import TwinklingBackground from "../twinklingbackground/TwinklingBackground";

import {
  NewContainer,
  NewBg,
  NewWrapper,
  TopLine,
  Heading,
  TextWrapper,
  Subtitle,
  CenterVideo,
  VideoContainer,
  PlayerWrapper,
  StyledReactPlayer,
  BtnWrap,
  ArrowFilled,
  ArrowCircle, // Include BtnWrap here
} from "./NewElements.js";

export const NewSection = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  primary,
  dark,
  dark2,
  backgroundImage, // Uncomment this line
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <NewContainer id="new">
        <NewBg>
          <TwinklingBackground
            youTubeImage="https://i.imgur.com/IK1aeQQ.png"

          />
        </NewBg>
        <NewWrapper>
          <TopLine>New Release</TopLine>
          <Heading>Fear God</Heading>
          <CenterVideo>
            <VideoContainer>
              <PlayerWrapper>
                <StyledReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  url="https://youtu.be/CDTw8AjSUVg?si=OUmwmVIFCWzLlphV"
                />
              </PlayerWrapper>
            </VideoContainer>
          </CenterVideo>
          <TextWrapper>
            <Subtitle>The official Music video for Fear God, a collaboration of Lil' Vel and Trapstar Bam, is now available on YouTube.</Subtitle>
          </TextWrapper>
          <BtnWrap>
            <Button
              to="thoughts"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              $primary="true"
              $dark="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Continue {hover ? <ArrowFilled /> : <ArrowCircle />}
            </Button>
          </BtnWrap>
        </NewWrapper>
      </NewContainer>
    </>
  );
};

export default NewSection;
