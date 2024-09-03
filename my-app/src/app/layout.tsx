import React from "react";

import type { Metadata } from "next";

import {AuthProvider} from "@/contexts/AuthContext";

import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";

import Layout from "antd/lib/layout";
import Sider from "antd/lib/layout/Sider";
import { Header } from "antd/lib/layout/layout";
import Content from "antd/lib/layout";

import { Nunito } from "next/font/google";

import "./globals.css";


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
      <body className="${font.className} bg-default">
        <Layout className={"min-h-screen h-auto"}>
          <Header className="p-0">
            <NavBar/>
          </Header>
          <Layout>
            <Sider width={"5rem"}>
              <SideBar />
            </Sider>
            <Layout>
              <Content
                style={{
                  margin: 0,
                  minHeight: 280,
                  height: "100%"
                }}
              >
                <AuthProvider>
                  {children}
                </AuthProvider>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
