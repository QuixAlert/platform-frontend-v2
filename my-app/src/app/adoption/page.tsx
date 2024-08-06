import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import AdoptionCard from "@/components/AdoptionCard/AdoptionCard";

import { Button } from "antd";

import "./style.css"

export default function Adoption() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="page-container">
        <div className="header">
          <h1 className="main-title">Adoções</h1>
          <div className="filters">
            <Button className="filter-button">Todas</Button>
            <Button className="filter-button">Minhas</Button>
            <Button className="filter-button">Abertas</Button>
            <Button className="filter-button">Fechadas</Button>
          </div>

          <div className="creation">
            <Button className="creation-button">Ver lista de animais</Button>
            <Button className="creation-button">Cadastrar animal</Button>
          </div>
        </div>

        <div className="cards">
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
        </div>
      </div>
    </>
  )
}
