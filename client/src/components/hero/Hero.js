import React, { useState } from "react";
// import Video from '../../videos/video.mp4';
import { Button } from "../ButtonElements";
import TwinklingBackground from "../twinklingbackground/TwinklingBackground";
import StylishText from "../StylishText"
// import HeroTwinkling from '../hero/HeroTwinkling';
import {
  HeroContainer,
  HeroBg,
  // VideoBg,
  HeroContent,
  HeroP,
  HeroBtnWrapper,
  ArrowFilled,
  ArrowCircle,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="hero-section">
      <HeroBg>
        <TwinklingBackground
          // title="Your Title Here"
          saturnImage="https://i.imgur.com/yM3SlcH.png"
          neptuneImage="https://i.imgur.com/XyBATJD.png"
        />
      </HeroBg>
          <HeroContent>
              <StylishText />
        {/* <HeroH1>Trapstar Bam</HeroH1> */}
        <HeroP>
          'Witnessing Trapstar Bam's evolution as an artist has been truly inspiring. Since we first collaborated back in 2020, his unwavering dedication and love for music have propelled his growth tremendously. It's a privilege to watch him not just meet, but far exceed, every expectation.'
        </HeroP>
        <HeroP style={{ marginTop: "20px" }}>~Bray Kaizen</HeroP>
        <HeroBtnWrapper>
          <Button
            to="bio"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            $primary="true"
            $dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Bam's Galaxy {hover ? <ArrowFilled /> : <ArrowCircle />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
