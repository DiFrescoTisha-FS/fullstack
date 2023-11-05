// keyframes.js
import { keyframes } from 'styled-components';

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
