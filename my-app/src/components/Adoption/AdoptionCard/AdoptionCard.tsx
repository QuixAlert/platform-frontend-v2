"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMaleSharp, IoFemaleSharp } from "react-icons/io5";
import { FaDog, FaCat } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import "./style.css";
import Adoption from "@/model/Adoption";
import {Button, Flex, Popconfirm, Popover, Tooltip} from "antd";
import {InfoCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";

const adoptionCard = {
  solicitante: {
    nome: "Thiago",
    url: "solicitante.png",
  },
  responsavel: {
    nome: "Samuel",
    url: "/responsavel.png", 
  },
  solicitacao: {
    data: "12/06/2024",
    tipo: "Adoção",
    emAberto: 20,
    previsao: "10/07/2024",
    status: "Visita Agendada",
  },
  animal: {
    nome: "Sheldon",
    tipo: "Cachorro",
    genero: "Macho",
    foto: "animal.jpg",
  },
};

function AdoptionCard({ adoption }: { adoption: Adoption }) {
  const router = useRouter();

  const handleConfirm = () => {}
  const handleCancel = () => {}

  return (
      <div className="adoption-card" title="">
          <div className="card-left">
            <div className="card-person-container">
              <Image
                  className="card-person-photo"
                  src={adoption.user?.path_picture || adoptionCard.solicitante.url}
                  alt="person-photo"
                  width={100}
                  height={100}
              />
              <div className="card-person-role-and-name">
                <p className="card-person-role">Solicitante:</p>
                <p className="card-person-name">
                  {adoption.user?.name || adoptionCard.solicitante.nome}
                </p>
              </div>
            </div>
            <div className="card-adoption-info-grid">
              <div className="card-adoption-info-line">
                <h3>Tipo de solicitação:</h3>
                <p>Adoção</p>
              </div>
              <div className="card-adoption-info-line">
                <h3>Data da solicitação:</h3>
                <p>{"20/12/2023"}</p>
              </div>
            </div>

            <div className="card-animal-sub-info">
              <h3>{adoption.animal.name}</h3>
              {(() => {
                switch (adoption.animal.animal_type.type) {
                  case "Dog":
                    return <FaDog className="card-animal-icon"/>;
                  case "Cat":
                    return <FaCat className="card-animal-icon"/>;
                  case "Bird":
                    return <PiBirdFill className="card-animal-icon"/>;
                }
              })()}
              {adoption.animal.gender === "Male" ? (
                  <IoMaleSharp className="card-animal-icon"/>
              ) : (
                  <IoFemaleSharp className="card-animal-icon"/>
              )}
            </div>

            <div className="card-adoption-animal-info">
              <div className="card-animal-photo-container">
                <Image
                    className="card-animal-photo"
                    src={adoption.animal.photo}
                    alt="animal image"
                    width={200}
                    height={200}
                />
              </div>
            </div>
          </div>

          <div className="card-right">
            <div className="card-person-container">
              <Image
                  className="card-person-photo"
                  src={adoptionCard.responsavel.url}
                  alt="person-photo"
                  width={100} // Adjust width
                  height={100} // Adjust height
              />
              <div className="card-person-role-and-name">
                <p className="card-person-role">Responsável:</p>
                <p className="card-person-name">
                  {adoptionCard.responsavel.nome}
                </p>
              </div>
            </div>
            <div className="card-status-info">
              <div className="card-info-line">
                <h2>Dias em aberto:</h2>
                <p>Está com {"20"} dias</p>
              </div>
              <div className="card-info-line">
                <h2>Status:</h2>
                <p>{adoption.status_adoption.name || "Aguardando"}</p>
              </div>
              <div className="card-info-line">
                <h2>Conclusão Prevista:</h2>
                <p>{"25/12/2023"}</p>
              </div>
            </div>
            <div className="card-see-more">
              <Flex gap="middle">
                <Tooltip
                    title="Ver detalhes"
                    placement="topRight"
                >
                  <button
                      className="card-see-more-btn"
                      onClick={() => {
                        router.push(`/adoption/${adoption.id}`);
                      }}
                  >
                    <InfoCircleOutlined/>
                  </button>
                </Tooltip>
                <Popconfirm
                    title="Associar adoção"
                    description={["Tem certeza que deseja ser", <br />, "associado a essa adoção para resolvê-la?"]}
                    onConfirm={handleConfirm}
                    okText="Sim"
                    cancelText="Cancelar"
                    icon={<PlusCircleOutlined/>}
                >
                  <button className="card-see-associate-btn">
                    Associar
                  </button>
                </Popconfirm>

              </Flex>
            </div>
          </div>
      </div>
  );
}

export default AdoptionCard;