import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import AdoptionCard from "@/components/AdoptionCard/AdoptionCard";
import {cookies} from "next/headers";
import {fetchAdoptions} from "@/api/adoptions";
import Link from "next/link";
import { Button } from "antd";
import "./style.css"

export default async function Adoption() {

  const cookieStore = cookies();
  const token = cookieStore.get("quixalert.auth.token");

  const adoptions = await fetchAdoptions(token?.value || '');

  return (
      <>
        <NavBar/>
        <Sidebar/>
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
              <Link href={"/adoption/animals"} className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default creation-button">
                Ver lista de animais
              </Link>
              <Link href={"/adoption/createAnimal"} className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default creation-button">
                Cadastrar animal
              </Link>
            </div>
          </div>

          <div className="cards">
            {
              adoptions.map(adoption => {
                return <AdoptionCard key={adoption.animal_id} adoption={adoption} />
              })
            }
          </div>
        </div>
      </>
  )
}
