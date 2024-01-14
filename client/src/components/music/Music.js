import React from "react";
// import MusicImage from '../../images/music.jpg';
import { Button } from "../ButtonElements";
import { FaArrowAltCircleDown } from "react-icons/fa";
import musicDesktopImage from '../../images/musicDesktop.png';
import musicTabletImage from '../../images/musicTablet.png'; // Replace with actual tablet image path
import musicMobileImage from '../../images/musicMobile.png'; 
import TwinklingBackground from "../twinklingbackground/TwinklingBackground";
import {
  MusicContainer,
  MusicBg,
  MusicWrapper,
  MusicRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  MusicDiv,
  Music,
  MusicCloud1,
  MusicCloud2,
  MusicCloud3,
  MusicCloud4,
  MusicCloud5,
  MusicCloud6,

} from "./MusicElements.js";

const MusicSection = ({
  id,
  imgStart = false,
}) => {

  return (
    <>
      <MusicContainer id="music">
        <TwinklingBackground />   
        <MusicCloud1 style={{ zIndex: '10' }} />
        <MusicCloud2 style={{ zIndex: '10' }} />
        {/* <MusicCloud3 style={{ zIndex: '10' }} /> */}
        <MusicCloud4 style={{ zIndex: '10' }} />
        <MusicCloud5 style={{ zIndex: '10' }} />
        <MusicCloud6 style={{ zIndex: '10' }} />
        <MusicBg 
          backgroundImageDesktop={musicDesktopImage}
          backgroundImageTablet={musicTabletImage}
          backgroundImageMobile={musicMobileImage}
        />
        <MusicWrapper style={{zIndex: '20'}}>
          <MusicRow>

            <MusicDiv>
              <Music>
                <iframe
                  title="iframe"
                  width="100%"
                  height="450px"
                  allow="autoplay"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  className="embed-responsive-item"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1469353666%3Fsecret_token%3Ds-kPkEQeIKEYX&color=%23e1affd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                >
                </iframe>
              </Music>
            </MusicDiv>
            <TextWrapper>
              <TopLine>Bam Beats</TopLine>
              <Heading>SoundCloud Playlist</Heading>
              <Subtitle>
                SoundCloud is the number one platform used by Bam fans. You can
                stay up to date with the latest events and music media produced
                by Trapstar.
              </Subtitle>
              <BtnWrap>
                <Button
                  to="new"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  $primary={true}
                  $dark={true}
                >
                  {"Continue"}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </MusicRow>
        </MusicWrapper>
      </MusicContainer>
    </>
  );
};

export default MusicSection;
