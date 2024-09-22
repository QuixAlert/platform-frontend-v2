import {Suspense} from "react";

import Link from "next/link";

import AnimalFetcher from "@/components/Animal/AnimalFetcher";
import {Loading} from "@/components/ui/Loading/Loading";

import { Button } from "antd";

import "./style.css";


export default async function Animals() {
  return (
    <>
      <div className="w-full h-full pt-5 pl-7 page-container bg-pgb">
        <div className="header">
          <h1 className="main-title text-white mb-8">Lista de Animais</h1>
          <div className="filters mb-4">
            <Button className="filter-button bg-pgreen border-none text-white font-bold py-2 px-4 rounded-full">Todos</Button>
            <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Gatos</Button>
            <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Cachorros</Button>
            <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Outros</Button>
          </div>

          <div className="creation mb-8">
            <Link className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default rounded-full hover:text-white creation-button" href={"/animals/create"}>Cadastrar animal</Link>
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          <AnimalFetcher />
        </Suspense>
      </div>
    </>
  )
}
