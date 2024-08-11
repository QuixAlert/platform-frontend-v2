import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import AdoptionCard from "@/components/AdoptionCard/AdoptionCard";
import { useRouter, usePathname } from 'next/navigation'


import { Button } from "antd";

import "./style.css"
import {cookies} from "next/headers";
import {fetchAdoptions} from "@/api/adoptions";

export default async function Adoption() {

  const cookieStore = cookies();
  const token = cookieStore.get("quixalert.auth.token");

  const adoptions = await fetchAdoptions(token?.value || '');

    //Incluído para clicar no botão e ir para lista - da erro quando descomento, então não consegui fazer a logica do botão ver animais
  //const currentPath = usePathname();
  //const router = useRouter();

  //const isAnimalListPage = currentPath.includes("/animals");

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
              <Button className="creation-button" >Ver lista de animais</Button>
              <Button className="creation-button">Cadastrar animal</Button>
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
