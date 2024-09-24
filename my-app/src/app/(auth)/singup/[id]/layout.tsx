"use client";

import React, { ReactNode } from 'react';

interface SignUpLayoutProps {
  children: ReactNode;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => (
  <div className="flex justify-center items-center w-screen h-screen bg-black">
    <div className="bg-white p-8 shadow-md rounded-lg min-h-[500px] min-w-[800px]">
      {children}
    </div>
  </div>
);

export default SignUpLayout;
