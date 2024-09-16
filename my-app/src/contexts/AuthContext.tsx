'use client'

import React, { createContext } from 'react';
import { fetchLogin } from "@/api/client/auth";
import { AuthContextRes } from '@/model/AuthContextRes';
import { userInfoStore } from "@/store/user";
import { Role } from "@/model/Role";

type AuthContextType = {
  signIn: (data: SignInData) => Promise<AuthContextRes>;
}

type SignInData = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { setUser, setIsLogged } = userInfoStore();

  async function signIn({ email, password }: SignInData): Promise<AuthContextRes> {
    const response = await fetchLogin(email, password);
    const { error, value: data } = response.unpack();

    if (data) {
      setUser({
        id: Number(data.user.user_id),
        name: data.user.name,
        email: data.user.email,
        role: Role.USER,
        password: '',
      });
      setIsLogged(true);
    }

    return {
      data,
      error
    };
  }

  return (
      <AuthContext.Provider value={{ signIn }}>
        {children}
      </AuthContext.Provider>
  );
}
