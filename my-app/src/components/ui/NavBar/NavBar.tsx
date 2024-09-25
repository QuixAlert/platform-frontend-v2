"use client"

import React from "react";

import DropDown from "@/components/ui/DropDown/DropDown";
import NavBarItems from "@/components/ui/NavBarItems/NavBarItems";

import Image from 'next/image';

import Search from "antd/lib/input/Search";
import Layout from "antd/lib/layout";
import { Header } from "antd/lib/layout/layout";

const NavBar = () => {
  return (
    <Layout className="fixed w-full z-30">
      <Header className="flex justify-between bg-[#25252D] p-0">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center w-20">
            <Image
              src="/quixalert_logo_nav.svg"
              alt="QuixAlert Logo"
              width={45}
              height={40}
            />
          </div>

          <div className="ml-8 w-[473px] flex">
            <Search placeholder="Pesquisar" className="w-full" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <DropDown />
          <NavBarItems />
        </div>
      </Header>
    </Layout>
  );
}

export default NavBar;
