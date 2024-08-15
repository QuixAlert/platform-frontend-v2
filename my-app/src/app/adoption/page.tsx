import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import AdoptionCard from "@/components/AdoptionCard/AdoptionCard";
import { fetchAdoptions } from "@/api/adoptions";
import Link from "next/link";
import { Button } from "antd";
import "./style.css";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { ForbiddenError } from "@/errors/forbidden";
import { EmptyResponseError } from "@/errors/empty-response";
import Adoption from "@/model/Adoption";
import AdoptionsList from "@/components/AdoptionList/AdoptionList";
import { Loading } from "@/components/Loading/Loading";

export default async function AdoptionPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("quixalert.auth.token")?.value || "";
  let adoptions: Adoption[] = [];
  const error = {} as ErrorS

  try {
    adoptions = await fetchAdoptions(token);
  } catch (err) {
    if (err instanceof ForbiddenError) {
      error.message = "Access Denied: You do not have permission to view this content.";
      error.type = ErrorName.FORIBIDDEN
    } else if (err instanceof EmptyResponseError) {
      error.message = "No Data Available: No adoptions were found.";
      error.type = ErrorName.EMPTY_RESULT
    } else {
      error.message = "An unknown error occurred. Please try again later.";
      error.message = ErrorName.UNKNOWN
    }
  }

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
          <AdoptionsList adoptions={adoptions} error={error} />
        </Suspense>
      </div>
    </>
  );
}