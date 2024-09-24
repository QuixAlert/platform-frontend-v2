"use client"

import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PinInput from './PinInput';

const PinCodeForm: React.FC = () => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(''));
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullPin = pin.join('');

    if (fullPin === '123456') {
      router.push('/singup/register'); 
    } else {
      alert('Invalid PIN code');
    }
  };

  const handlePinChange = (index: number, value: string) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PinInputContainer>
        {Array.from({ length: 6 }, (_, index) => (
          <PinInput
            key={index}
            id={`code-${index + 1}`}
            prevId={index > 0 ? `code-${index}` : undefined}
            nextId={index < 5 ? `code-${index + 2}` : undefined}
            onChange={(value) => handlePinChange(index, value)}
          />
        ))}
      </PinInputContainer>

      <Button type="submit">Validar código PIN</Button>
    </Form>
  );
};

export default PinCodeForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const PinInputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const HelperText = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  color: #6b7280;
`;

const Button = styled.button`
  background-color: #269996;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #268381; 
  }
`;
