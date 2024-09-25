"use client";

import React, { ReactNode } from 'react';

interface SignUpLayoutProps {
  children: ReactNode;
  isWhiteBackground?: boolean;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children, isWhiteBackground }) => (
  <div className="flex justify-center items-center w-screen h-screen bg-default">
    <div className={`p-8 shadow-md rounded-lg min-h-[500px] min-w-[800px] ${isWhiteBackground ? 'bg-white' : 'bg-transparent'}`}> {/* Apply bg-white conditionally */}
      {children}
    </div>
  </div>
);

export default SignUpLayout;
