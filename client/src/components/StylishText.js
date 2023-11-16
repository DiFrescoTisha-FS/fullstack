import styled from 'styled-components';

const StylishText = styled.h1`
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  color: transparent;
  text-shadow: 
    1px 1px 2px rgba(0, 0, 0, 0.8),
    0 0 10px #e1affd,
    0 0 20px #e1affd,
    0 0 30px #e1affd,
    0 0 40px #e1affd;
  background: linear-gradient(135deg, #e1affd, #e1affd, #e1affd);
  -webkit-background-clip: text;
  display: inline-block;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    font-size: 66px; // Smaller size for tablet devices
  }

  @media screen and (max-width: 768px) {
    font-size: 40px; // Smaller size for medium devices
    text-shadow: none; // Remove glow effect
  }

  @media screen and (max-width: 480px) {
    font-size: 32px; // Smaller size for small devices
    text-shadow: none; // Remove glow effect
  }
`;




// Usage in a component
const YourComponent = () => {
  return (
    <StylishText>Trapstar Bam</StylishText>
  );
}

export default YourComponent;
