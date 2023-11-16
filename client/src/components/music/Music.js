import React from 'react';
// import MusicImage from '../../images/music.jpg';
import { Button } from '../ButtonElements';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { 
    MusicContainer, 
    // MusicBg,
    MusicWrapper, 
    MusicRow, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    MusicDiv, 
    Music, 
 } from './MusicElements.js';

const MusicSection = ({
    // lightBg, 
    backgroundImage,
    id,
    imgStart, 
}) => {
  return (
    <>
          <MusicContainer backgroundImage={backgroundImage} id="music">
              {/* <MusicBg /> */}
            <MusicWrapper>
                <MusicRow imgStart={imgStart}>
                    <TextWrapper>
                        <TopLine>Bam Beats</TopLine>
                        <Heading>SoundCloud Playlist</Heading>
                        <Subtitle>SoundCloud is the number one platform used by Bam fans. You can stay up to date with the latest events and music media produced by Trapstar.</Subtitle>
                        <BtnWrap>
                            <Button to="new"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            $primary={true}
                            $dark={true}
                            >
                            {'Continue'}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                            </Button>
                        </BtnWrap>
                    </TextWrapper>
                        <MusicDiv>
                            <Music>                                                        
                            <iframe title="iframe" width="100%" height="450px" allow="autoplay"
                                sandbox="allow-scripts allow-same-origin allow-presentation"
                                className="embed-responsive-item"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1469353666%3Fsecret_token%3Ds-kPkEQeIKEYX&color=%23e1affd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                            </iframe>
                            </Music>
                        </MusicDiv>                    
                </MusicRow>
                  </MusicWrapper>
        </MusicContainer>
    </>
  );
}

export default MusicSection;