import styled from 'styled-components';
import CardContent from './CardContent';
import CardImage from './CardImage';

const CardContainer = styled.div`
  display: flex;
  min-height: 500px;
  width: 800px;     
  border-radius: 12px;
  overflow: hidden; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

type CardProps = {
  children: React.ReactNode
  image: string
}

const Card: React.FC<CardProps> = ({children, image}) => {
  return (
    <CardContainer>
      <CardContent>
        {children}
      </CardContent>
      <CardImage image={image}/>
    </CardContainer>
  );
};

export default Card;
