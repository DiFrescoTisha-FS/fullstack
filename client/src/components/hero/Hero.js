import React, { useState } from 'react';
// import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
// import Twinkling from "../twinkling/Twinkling"
import { 
    HeroContainer, 
    HeroBg, 
    // VideoBg,
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowFilled, 
    ArrowCircle 
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer id='hero-section'>
        <HeroBg>
         {/* <Twinkling /> */}
        </HeroBg>
        <HeroContent>
            <HeroH1>Trapstar Bam</HeroH1>
            <HeroP>
                'Trapstar brought the people of our community together like I have never seen. The crowd kept growing as he gave them the performance of his life. It was an amazing experience.'
            </HeroP>
            <HeroP>
                ~Bray Kaizen
            </HeroP>
            <HeroBtnWrapper>
                <Button to="bio" 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80} 
                >
                    Take a Tour {hover ? <ArrowFilled /> : <ArrowCircle />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
        
  );
};

export default HeroSection;