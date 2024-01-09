import React from 'react';
import cometImage from "../images/comet.png";

const TestComponent = () => {

  return (
    <div>
      <h1>Comet Image Test</h1>
      {/* Render the image using the imported variable */}
      <img src={cometImage} alt="Comet" style={{ width: '100px' }} />
    </div>
  );
};

export default TestComponent;
