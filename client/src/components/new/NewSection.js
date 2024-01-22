import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "../ButtonElements";
import newDesktopImage from '../../images/newDesktop32.png';
import newTabletImage from '../../images/newTablet.png'; // Replace with actual tablet image path
import newMobileImage from '../../images/newMobile.png';

// import { Clouds } from "../twinklingbackground/TwinklingBackground"

// import youTubeImage from "../../images/newDesktopView.png"
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
  ArrowCircle, 
  NewCloud1,
  NewCloud2,


  NewCloud5,
  NewCloud6,
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
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <NewContainer id="new">
        <TwinklingBackground />
        {/* <Clouds style={{zIndex: '10'}} /> */}
        <NewBg 
          backgroundImageDesktop={newDesktopImage}
          backgroundImageTablet={newTabletImage}
          backgroundImageMobile={newMobileImage}
        />
        {/* <NewCloud5 style={{ zIndex: '10' }} /> */}
        <NewCloud2 style={{ zIndex: '10' }} />
        <NewCloud6 style={{ zIndex: '10' }} />
        <NewWrapper style={{zIndex: '20'}}>
          <TopLine>New Release</TopLine>
          <Heading>Message to God</Heading>
          <CenterVideo>
            <VideoContainer>
              <PlayerWrapper>
                <StyledReactPlayer
                  width="100%"
                  height="100%"
                  controls={true}
                  url="https://youtu.be/Tm6fOYWJD-I?si=k5oso2krZpCpm495"
                />
              </PlayerWrapper>
            </VideoContainer>
          </CenterVideo>
          <TextWrapper>
            <Subtitle>The official Music video, "Message to God", is now available on YouTube.</Subtitle>
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
