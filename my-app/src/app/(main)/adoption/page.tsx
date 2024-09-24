import { Suspense } from "react";
import Link from "next/link";
import AllAdoptionsFetcher from "@/components/Adoption/AllAdoptionsFetcher";
import { Button, Space } from "antd";
import "./style.css";
import MyAdoptionsFetcher from "@/components/Adoption/MyAdoptionsFetcher";
import { Loading } from "@/components/ui/Loading/Loading";

export default function AdoptionPage() {
  return (
      <>
        <div className="w-full h-full pt-5 pl-7 page-container bg-pgb">
          <div className="header">
            <h1 className="text-4xl font-bold text-white mb-8">Adoções</h1>
            <div className="filters mb-4">
              <Button className="filter-button bg-pgreen border-none text-white font-bold py-2 px-4 rounded-full">Todas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Minhas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Abertas</Button>
              <Button className="filter-button bg-white border-none hover:text-black py-2 px-4 rounded-full">Fechadas</Button>
            </div>
            <div className="creation mb-8">
              <Link
                  href={"/animals"}
                  className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default rounded-full hover:text-white creation-button"
              >
                Ver lista de animais
              </Link>
              <Link
                  href={"/animals/create"}
                  className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default rounded-full hover:text-white creation-button"
              >
                Cadastrar animal
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-white mb-6">Minhas Adoções</h2>
          <Suspense fallback={<Loading />}>
            <MyAdoptionsFetcher />
          </Suspense>

          <Space />

          <h2 className="text-2xl font-semibold text-white mt-10 mb-6">Todas as Adoções</h2>
          <Suspense fallback={<Loading />}>
            <AllAdoptionsFetcher />
          </Suspense>
        </div>
      </>
  );
}
