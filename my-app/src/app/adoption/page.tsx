import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import { Suspense } from "react";
import { Loading } from "@/components/Loading/Loading";
import "./style.css";
import Link from "next/link";
import {Button} from "antd";
import AdoptionFetcher from "@/components/Adoption/AdoptionFetcher";

export default function AdoptionPage() {
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
              <Link
                  href={"/adoption/animals"}
                  className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default creation-button"
              >
                Ver lista de animais
              </Link>
              <Link
                  href={"/adoption/createAnimal"}
                  className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default creation-button"
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