import { Suspense } from "react";

import Link from "next/link";

import { Loading } from "@/components/Loading/Loading";
import AdoptionFetcher from "@/components/Adoption/AdoptionFetcher";

import {Button} from "antd";

import "./style.css";


export default function AdoptionPage() {
  return (
      <>
        <div className="w-full h-full pt-5 pl-7 page-container bg-pgb">
          <div className="header">
            <h1 className="text-2xl font-bold text-white mb-8">Adoções</h1>
            <div className="flex gap-4 mb-4">
              <Button className="filter-button bg-pgreen border-none text-white font-bold py-2 px-4 rounded-full">Todas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Minhas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Abertas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Fechadas</Button>
            </div>
            <div className="flex gap-4 mb-8">
              <Link
                  href={"/animals"}
                  className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default rounded-full hover:text-white py-2.5 px-7 font-bold border-0 text-white bg-custom-green hover:bg-green-hover"
              >
                Ver lista de animais
              </Link>
              <Link
                  href={"/animals/create"}
                  className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default rounded-full hover:text-white py-2.5 px-7 font-bold border-0 text-white bg-custom-green hover:bg-green-hover"
              >
                Cadastrar animal
              </Link>
            </div>
          </div>

          <Suspense fallback={<Loading />}>
            <AdoptionFetcher/>
          </Suspense>
        </div>
      </>
  );
}