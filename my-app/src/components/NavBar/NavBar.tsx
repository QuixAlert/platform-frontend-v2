import React from "react"

import DropDown from "../DropDown/DropDown";
import NavBarItems from "../NavBarItems/NavBarItems";

import Search from "antd/lib/input/Search";
import Layout from "antd/lib/layout";
import { Header } from "antd/lib/layout/layout";
import Image from 'next/image';

import "../NavBar/style.css"

const NavBar = () => {
  return (
    <Layout className="navbar">
      <Header className="navbar-header">
        <div className="logo-search-bar">
          <div className="navbar-logo-container">
            <Image 
              className="navbar-logo"
              src="/quixalert_logo_nav.svg"
              alt="QuixAlert Logo"
              width={45}
              height={40}
            />
          </div>

          <div className="search-bar-container">
            <Search className="search-bar" placeholder="Pesquisar"/>
          </div>
        </div>

        <div className="navbar-menu">
          <DropDown />
          <NavBarItems />
        </div>
      </Header>
    </Layout>
  );
}

export default NavBar;