"use client"

import React, { useState } from "react"

import { DownOutlined, FormOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";


const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center gap-4 z-10">
        <img className="w-12 h-12 rounded-full border border-white" src="/user.png" alt="User"/>
        <div className="flex flex-col items-start">
          <div className="text-white font-bold mb-1 text-lg leading-none">Phablo Gabriel</div>
          <div className="text-white text-xs leading-none">Administrador</div>
        </div>
        <DownOutlined className="text-white mr-2 cursor-pointer" onClick={() => setOpen(!open)} />
      </div>
      <ul className={`absolute mt-2 p-5 w-[224px] bg-[#25252D] rounded-b-md list-none border-t border-gray-700 transition-opacity duration-300 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <li className="flex items-center text-white text-lg mb-2 cursor-pointer">
          <UserOutlined />
          <span className="ml-2">Meu perfil</span>
        </li>
        <li className="flex items-center text-white text-lg mb-2 cursor-pointer">
          <FormOutlined />
          <span className="ml-2">Atendidos</span>
        </li>
        <li className="flex items-center text-white text-lg cursor-pointer">
          <LogoutOutlined />
          <span className="ml-2">Sair</span>
        </li>
      </ul>
    </div>
  )
}

export default DropDown