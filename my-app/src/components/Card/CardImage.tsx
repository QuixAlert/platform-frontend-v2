import styled from 'styled-components';

const ImageContainer = styled.div<{ image: string }>`
  flex: 1; 
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover; 
  background-position: center;
`;

type CardImageProps = {
  image: string;
}

const CardImage: React.FC<CardImageProps> = ({ image }) => {
  return <ImageContainer image={image} />;
};

export default CardImage;

