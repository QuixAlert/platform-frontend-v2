import {Suspense} from "react";

import Link from "next/link";

import AnimalFetcher from "@/components/Animal/AnimalFetcher";
import {Loading} from "@/components/Loading/Loading";

import { Button } from "antd";
import "./style.css";
import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/SideBar/SideBar";

export default async function Animals() {
  return (
    <>
      <NavBar/>
      <Sidebar/>
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
            <Link className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default creation-button" href={"/animal/create"}>Cadastrar animal</Link>
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          <AnimalFetcher />
        </Suspense>
      </div>
    </>
  )
}
