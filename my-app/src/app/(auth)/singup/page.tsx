"use client"

import Card from '@/components/Card/Card';
import styled from 'styled-components';

const SignUpPage: React.FC = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* background-color: #299696; // Change to your desired background color */
`;
