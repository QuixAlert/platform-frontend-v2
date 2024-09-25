"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PinInput from './PinInput';
import { validateInvite } from '@/api/client/singup';
import ColorButton from '../Button/ColorButton';
import { message } from 'antd';


type PinCodeFormProps = {
  id: string;
};

const PinCodeForm: React.FC<PinCodeFormProps> = ({ id }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const searchParams = useSearchParams();
  const inviteCode = searchParams.get('inviteCode');
  
  const initialPin = inviteCode ? inviteCode.split("").slice(0, 4) : Array(4).fill('');

  const [pin, setPin] = useState<string[]>(initialPin);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const router = useRouter();

  const showMessage = (type: 'success' | 'error', content: string) => {
    messageApi.open({ type, content });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsInvalid(false);

    const fullPin = pin.join('');

    const result = await validateInvite(id, fullPin);
    const { error } = result.unpack();

    if (!error) {
      router.push(`/singup/${id}/register`);
      showMessage('success', "Código validado com sucesso");
    } else {
      setIsInvalid(true); 
      showMessage('error', "Código inválido");
    }

    setIsLoading(false);
};


  const handlePinChange = (index: number, value: string) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-2">
          {Array.from({ length: 4 }, (_, index) => (
            <PinInput
              key={index}
              id={`code-${index + 1}`}
              prevId={index > 0 ? `code-${index}` : undefined}
              nextId={index < 3 ? `code-${index + 2}` : undefined}
              onChange={(value) => handlePinChange(index, value)}
              value={pin[index]}
              isInvalid={isInvalid} 
            />
          ))}
        </div>


        <ColorButton
          loading={isLoading}
          bgColor="#299699"
          type="primary"
          htmlType="submit"
          className="bg-teal-600 text-white py-3 px-6 text-lg rounded-md hover:bg-teal-700 transition duration-300"
        >
          Validar código PIN
        </ColorButton>
      </form>
    </>
  );
};

export default PinCodeForm;
