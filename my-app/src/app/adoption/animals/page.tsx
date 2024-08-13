
import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import AnimalListCard from "@/components/AnimalList/AnimalList";
import { Button } from "antd";
import {cookies} from "next/headers";
import {fetchAnimals} from "@/api/animal";
import Link from "next/link";
import "./style.css";

export default async function Animals() {
  const cookieStore = cookies();
  const token = cookieStore.get("quixalert.auth.token");

  const animals = await fetchAnimals(token?.value || '');
  console.log(animals);
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

        <div className="cards">
          {
            animals.map(animal => {
              return <AnimalListCard key={animal.id} animal={animal}/>
            })
          }
        </div>
      </div>
    </>
  )
}
