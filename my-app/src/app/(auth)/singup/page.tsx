"use client"

import React from 'react';
import SignUpLayout from './layout';
import PinCodeForm from '@/components/Singup/PinCodeForm';
import { Subtitle, Title } from './styles';

const SignUpPage: React.FC = () => (
  <SignUpLayout>
    <Title>Plataforma de Dados do Quixalert</Title>
    <Subtitle>
      Complete seu cadastro inserindo o código de verificação que enviamos para o seu e-mail.
    </Subtitle>
    <PinCodeForm />
  </SignUpLayout>
);

export default SignUpPage;