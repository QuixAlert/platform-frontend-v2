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

const Card: React.FC = () => {
  return (
    <CardContainer>
      <CardContent />
      <CardImage />
    </CardContainer>
  );
};

export default Card;
