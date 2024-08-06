import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import {AuthProvider} from "@/contexts/AuthContext";
import React from "react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuixAlert Login",
  description: "Página de login do QuixAlert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
