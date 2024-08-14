'use client'

import React, { createContext } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation'
import {fetchLogin} from "@/api/auth";

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>;
}

type SignInData = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}: Readonly<{children: React.ReactNode}>){
  const router = useRouter()

  async function signIn({ email, password }: SignInData){
    const response = await fetchLogin(email, password)
    
    setCookie(undefined, 'quixalert.auth.token', response.access_token, {
      maxAge: 60 * 60 * 8 // 8 hours
    })

    router.push('/home')
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  )
}