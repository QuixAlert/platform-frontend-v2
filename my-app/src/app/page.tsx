'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import User from '@/model/User';
import { AuthContext } from '@/contexts/AuthContext';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const showMessage = (type: 'success' | 'error', content: string) => {
    messageApi.open({ type, content });
  };

  async function handleSignIn(data: any) {
    const user = data as User;
    const { error, token } = await signIn(user);

    if (error) {
      showMessage('error', error.message);
      return;
    }

    if (token) {
      showMessage('success', 'Login feito com sucesso!');
      setCookie(undefined, 'quixalert.auth.token', token.access_token);
      router.push('/home');
    }
  }

  return (
    <>
      {contextHolder}
      <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            priority={true}
            className="mx-auto h-36 w-auto"
            alt="Quixalert logo"
            src="quixalert_logo.svg"
            width={150}
            height={150}
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <div className="mt-2">
                <input
                  {...register('email')}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-black">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-black hover:text-sgreen">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pgreen px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}