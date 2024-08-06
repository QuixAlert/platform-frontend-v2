'use client'

import React from "react"

import DropDown from "../DropDown/DropDown";
import NavBarItems from "../NavBarItems/NavBarItems";

import { Layout, Input } from "antd"

import "../NavBar/style.css"

const NavBar = () => {
  const { Header } = Layout;
  const { Search } = Input

  return (
    <Layout className="navbar">
      <Header className="navbar-header">
        <div className="logo-search-bar">
          <div className="navbar-logo-container">
            <img className="navbar-logo" src="quixalert_logo_nav.svg" alt="QuixAlert Logo"/>
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