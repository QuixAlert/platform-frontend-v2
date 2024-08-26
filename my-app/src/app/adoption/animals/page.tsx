import {Suspense} from "react";

import Link from "next/link";

import {fetchAnimals} from "@/api/animal";

import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import AnimalFetcher from "@/components/Animal/AnimalFetcher";
import {Loading} from "@/components/Loading/Loading";

import { Button } from "antd";
import "./style.css";

export default async function Animals() {

  const animals = await fetchAnimals();
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
            <Link className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default creation-button" href={"/adoption/createAnimal"}>Cadastrar animal</Link>
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          <AnimalFetcher />
        </Suspense>
      </div>
    </>
  )
}
