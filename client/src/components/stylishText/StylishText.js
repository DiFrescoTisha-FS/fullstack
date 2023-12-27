import styled from 'styled-components';

const StylishText = styled.h1`
  width: 100%; /* Adjust the width as needed */
  max-width: 600px; /* Maximum width of the heading image */
  margin: 150px auto 0; /* 150px top margin, auto horizontal margins */
  text-align: center;

  img {
    width: 100%; /* Make the image responsive */
    height: auto; /* Maintain aspect ratio */
  }

  /* Responsive adjustments */
  @media screen and (max-width: 1024px) {
    max-width: 550px;
  }

  @media screen and (max-width: 768px) {
    max-width: 500px;
  }

  @media screen and (max-width: 480px) {
    max-width: 550px;
  }
`;

// Usage in a component
const YourComponent = () => {
  return (
    <StylishText>
      <img src="https://i.imgur.com/qw5jeyL.png" alt="Trapstar Bam" />
    </StylishText>
  );
}

export default YourComponent;
