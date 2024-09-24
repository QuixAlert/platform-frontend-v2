import styled from 'styled-components';
import PinCodeForm from '../Singup/PinCodeForm';

const ContentContainer = styled.div`
  flex: 2;
  padding: 2rem;
  background-color: #fff;
`;

const CenteredFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 80%;
`;

const CardContent: React.FC = () => {
  return (
    <ContentContainer>
      <h1 className="text-2xl font-bold mb-4 text-center">Plataforma de Dados Quixalert</h1>
      <p className="text-lg text-center mb-8">
        Complete seu cadastro inserindo o código de verificação que enviamos para o seu e-mail.
      </p>
      
      {/* Wrap the form, button, and help text in a centered container */}
      <CenteredFormContainer>
        <PinCodeForm />
        <HelperText>
          Por favor, insira o código de 6 dígitos que enviamos para o seu e-mail.
        </HelperText>
      </CenteredFormContainer>
    </ContentContainer>
  );
};

const HelperText = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  color: #6b7280;
`;

export default CardContent;
