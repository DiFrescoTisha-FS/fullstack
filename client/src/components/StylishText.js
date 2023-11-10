import styled from 'styled-components';

const StylishText = styled.h1`
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  color: transparent;
  text-shadow: 
    1px 1px 2px rgba(0, 0, 0, 0.8), /* Black shadow for depth */
    0 0 10px #e1affd, /* Purple glow for thicker shadow */
    0 0 20px #e1affd, /* Larger purple glow for more pronounced effect */
    0 0 30px #e1affd, /* Even larger purple glow for maximum effect */
    0 0 40px #e1affd; /* Largest purple glow */
  background: linear-gradient(135deg, #e1affd, #e1affd, #e1affd);
  -webkit-background-clip: text;
  display: inline-block;
  margin: 0 auto;
`;



// Usage in a component
const YourComponent = () => {
  return (
    <StylishText>Trapstar Bam</StylishText>
  );
}

export default YourComponent;
