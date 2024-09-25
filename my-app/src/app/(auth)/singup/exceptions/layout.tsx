"use client";

import React, { ReactNode } from 'react';

interface SignUpLayoutProps {
  children: ReactNode;
}

const ExceptionSingUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => (
  <div className="flex justify-center items-center w-screen h-screen bg-default">
    <div className="min-h-[500px] min-w-[800px]">
      {children}
    </div>
  </div>
);

export default ExceptionSingUpLayout;
