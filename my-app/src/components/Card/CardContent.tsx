"use client";

import React from 'react';

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-8 bg-white h-full">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">Plataforma de Dados Quixalert</h1>
      <p className="text-lg text-center mb-8 text-black">
        Complete seu cadastro inserindo o código de verificação que enviamos para o seu e-mail.
      </p>
      <div className="flex flex-col justify-center items-center h-[80%]">
        {children}
        <p className="mt-2 text-center text-black">
          Por favor, insira o código de 6 dígitos que enviamos para o seu e-mail.
        </p>
      </div>
    </div>
  );
};

export default CardContent;
