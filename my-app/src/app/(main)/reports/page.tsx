import { Suspense } from "react";

import Link from "next/link";

import { Loading } from "@/components/ui/Loading/Loading";
import ReportFetcher from "@/components/Report/AdoptionFetcher";

import {Button} from "antd";

import "./style.css";


export default function ReportPage() {
  return (
      <>
        <div className="w-full h-full pt-5 pl-7 page-container bg-pgb">
          <div className="header">
            <h1 className="main-title text-white mb-8">Denúncias</h1>
            <div className="filters mb-4">
              <Button className="filter-button bg-pgreen border-none text-white font-bold py-2 px-4 rounded-full">Todas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Minhas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Abertas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Fechadas</Button>
            </div>
            <div className="creation mb-8">
              <Link
                  href={"/animals/create"}
                  className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default rounded-full hover:text-white creation-button w-80 text-center text-lg p-1"
              >
                Adicionar Denúncia
              </Link>
            </div>
          </div>

          <Suspense fallback={<Loading />}>
            <ReportFetcher/>
          </Suspense>
        </div>
      </>
  );
}