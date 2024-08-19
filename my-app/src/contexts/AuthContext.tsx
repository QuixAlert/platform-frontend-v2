'use client'

import React, { createContext } from 'react';
import {fetchLogin} from "@/api/auth";
import { AuthContextRes } from '@/model/AuthContextRes';

type AuthContextType = {
  signIn: (data: SignInData) => Promise<AuthContextRes>;
}

type SignInData = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}: Readonly<{children: React.ReactNode}>){
  async function signIn({ email, password }: SignInData): Promise<AuthContextRes>{
    const response = await fetchLogin(email, password)
    const {error, value: token} = response.unpack();
    
    return {
      token,
      error
    }
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  )
}