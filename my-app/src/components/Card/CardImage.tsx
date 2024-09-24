import styled from 'styled-components';

const ImageContainer = styled.div`
  flex: 1;  // 1/3 of the width
  background-image: url('https://plus.unsplash.com/premium_vector-1715632451114-69aeabab38b2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); // Add your image path
  background-size: cover; // Ensure the image covers the entire area
  background-position: center; // Center the image
`;

const CardImage: React.FC = () => {
  return <ImageContainer />;
};

export default CardImage;
