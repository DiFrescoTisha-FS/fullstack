import React, { useState } from "react";
import { Button } from "../ButtonElements";
import TwinklingBackground from "../twinklingbackground/TwinklingBackground";
import StylishText from "../stylishText/StylishText";
// import HeroTwinkling from '../hero/HeroTwinkling';

// import { Clouds } from "../twinklingbackground/TwinklingBackground";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroP,
  HeroBtnWrapper,
  ArrowFilled,
  ArrowCircle,
  HeroCloud1,
  HeroCloud2,
  HeroCloud3,
  HeroCloud4,
  HeroCloud5,
  HeroCloud6,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <TwinklingBackground
          saturnImage="https://i.imgur.com/yM3SlcH.png"
          neptuneImage="https://i.imgur.com/XyBATJD.png"
          cometImage="https://i.imgur.com/kW59Usj.png"
          earthImage="https://i.imgur.com/qTwsepd.png"
        />
        <HeroCloud1 style={{ zIndex: '10' }} />
        <HeroCloud2 style={{ zIndex: '10' }} />
        <HeroCloud4 style={{ zIndex: '10' }} />
        <HeroCloud5 style={{ zIndex: '10' }} />
        <HeroCloud6 style={{ zIndex: '10' }} />
      </HeroBg>
      <HeroContent style={{zIndex: '20'}}>
        <StylishText />
        {/* <HeroH1>Trapstar Bam</HeroH1> */}
        <HeroP>
          'Witnessing Trapstar Bam's evolution as an artist has been truly
          inspiring. Since we first collaborated back in 2020, his
          dedication and love for music have propelled his growth tremendously.
          It's a privilege to watch him not just meet, but far exceed, every
          expectation.'
        </HeroP>
        <HeroP style={{ marginTop: "20px" }}>~Bray Kaizen</HeroP>
        <HeroBtnWrapper>
          <Button
            to="bio" // the target id to scroll to
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            $primary="true"
            $dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={(e) => {
              e.stopPropagation();
              // Other click handling logic
            }}
          >
            Bam's Galaxy {hover ? <ArrowFilled /> : <ArrowCircle />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
