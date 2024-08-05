"use client"

import React from "react";
import { MessageFilled, BellFilled, ClockCircleFilled } from "@ant-design/icons";

import "./style.css"

const NavBarItems = () => {
    return (
      <div className="navbar-items-container">
        <a className="navbar-item bell-item">
          <BellFilled className="test"/>
        </a>
        <a className="navbar-item message-item">
          <MessageFilled className="test"/>
        </a>
        <a className="navbar-item clock-item">
          <ClockCircleFilled className="test"/>
        </a>
      </div>
    );
}

export default NavBarItems;