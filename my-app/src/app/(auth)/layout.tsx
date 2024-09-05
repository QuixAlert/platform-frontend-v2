import React from "react";

import type { Metadata } from "next";

import { AntdRegistry } from '@ant-design/nextjs-registry';

import {AuthProvider} from "@/contexts/AuthContext";

import { Nunito } from "next/font/google";

import "../globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plataforma QuixAlert",
  description: "Plataforma de Dados do QuixAlert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="QuixAlert! 5.png" />
    </head>
    <body className={`${font.className} bg-default`}>
        <AuthProvider>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </AuthProvider>
    </body>
    </html>
  );
}
