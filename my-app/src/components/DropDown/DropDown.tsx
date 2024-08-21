"use client"

import React, {useState} from "react"

import {DownOutlined, FormOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";

import "./style.css"

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="user-menu" >
        <img className="user-image" src="/user.png"/>
        <div className="user-details">
          <div className="user-name" >Phablo Gabriel</div>
          <div className="user-role" >Administrador</div>
        </div>

        <DownOutlined className="arrow-item" onClick={() => setOpen(!open)} />
      </div>
      <ul className={`dropdown-container ${open ? ' active' : ' inactive'}`}>
        <li className="dropdown-item">
          <UserOutlined/>
          <div>Meu perfil</div>
        </li>
        <li className="dropdown-item">
          <FormOutlined/>
          <div>Atendidos</div>
        </li>
        <li className="dropdown-item">
          <LogoutOutlined/>
          <div>Sair</div>
        </li>
      </ul>
    </div>
  )
}

export default DropDown