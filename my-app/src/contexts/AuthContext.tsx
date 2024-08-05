'use client'

import User from '@/model/User';
import { api } from '@/services/axios';
import React, { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation'
// import { recoverUserInfo } from '@/api/user';


type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
}

type Tokens = {
  access_token: string,
  refresh_token: string
  // user: User
}

type SignInData = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}: Readonly<{children: React.ReactNode}>){
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'quixalert.auth.token': token } = parseCookies()
    // if(token) recoverUserInfo(token).then(user => setUser(user))
  })

  async function signIn({ email, password }: SignInData){
    const response = await api.post<Tokens>('auth/authenticate', {
      email: email,
      password: password
    })
    
    setCookie(undefined, 'quixalert.auth.token', response.data.access_token, {
      maxAge: 60 * 60 * 8 // 8 hours
    })

    api.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`

    // setUser(response.data.user)

    router.push('/home')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}