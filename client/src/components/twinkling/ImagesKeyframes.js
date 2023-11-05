// images.js
import starsImage from '../../images/stars.png';
import twinklingImage from '../../images/twinkling.png';
import cloudsImage from '../../images/clouds.png';
import { keyframes } from 'styled-components';

export { starsImage, twinklingImage, cloudsImage };

// keyframes.js


const moveTwinkBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
`;

const moveCloudsBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
`;

export { moveTwinkBack, moveCloudsBack };
