
import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import AnimalListCard from "@/components/AnimalList/AnimalList";

import { Button } from "antd";

import "./style.css"
import React from "react";

export default function Animals() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="page-container">
        <div className="header">
          <h1 className="main-title">Lista de Animais</h1>
          <div className="filters">
            <Button className="filter-button">Todos</Button>
            <Button className="filter-button">Gatos</Button>
            <Button className="filter-button">Cachorros</Button>
            <Button className="filter-button">Outros</Button>
          </div>

          <div className="creation">
            <Button className="creation-button">Cadastrar animal</Button>
          </div>
        </div>

        <div className="cards">
          <AnimalListCard />
          <AnimalListCard />
          <AnimalListCard />
          <AnimalListCard />
          <AnimalListCard />
        
        </div>
      </div>
    </>
  )
}
