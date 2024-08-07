"use client";

import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/SideBar/SideBar";
import { Button, Col, Row } from 'antd';
import { FaCalendarAlt, FaCat, FaClock, FaDog } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import "./style.css";
import { fetchAdoption } from "@/api/adoptions";
import Adoption from "@/model/Adoption";
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const adoptionMock = {
  solicitante: {
    nome: "Thiago Maia",
    foto: "solicitante.png",
  },
  responsavel: {
    nome: "Samuel Honorato",
    foto: "responsavel.png",
  },
  animal: {
    nome: "Sheldon",
    tipo: "Cachorro",
    raca: "Golden",
    genero: "Macho",
    porte: "Médio",
    idade: "18 meses",
    foto: "animal.jpg",
    sobre: "Um cachorro dócil que ama estar com outros animais e brincar bastante",
  },
  solicitacao: {
    data: "12/06/2024",
    hora: "19h30",
    mora: "Rua José Queiroz de Pessoa, 1900, Quixadá, Ceará, Brasil",
    animais: "Sim. 2 Gatos e 1 Papagaio",
    motivacao: "Gostaria de possuir um cachorro também para fazer companhia aos meus outros animais.",
    renda: 3200,
    agendaDia: "25/06/2024",
    agendaHora: "19h30",
    emAberto: 20,
    previsao: "10/07/2024",
    status: "Visita Agendada",
  }
}

const AdoptionDetailsClient = () => {
  const searchParams = useSearchParams();
  const adoptionId = searchParams.get('adoptionId');
  const [adoption, setAdoption] = useState<Adoption>();

  useEffect(() => {
    const fetchData = async () => {
      // @ts-ignore
      const token = document.cookie.split('; ').find(row => row.startsWith('quixalert.auth.token=')).split('=')[1];
      const data = await fetchAdoption(token || '', adoptionId || '');
      setAdoption(data);
    };

    fetchData();
  }, [adoptionId]);

  if (!adoption)
    return (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
    )


  return (
      <>
        <NavBar/>
        <Sidebar/>
        <div className="page-container">
        <Row>
            <Col span={8} className="adoption-part-container solicitation">
              <div className="requester-container">
                <img className="requester-photo" src={adoption.user.path_picture} alt="requester-photo" />
                <div className="requester-role-and-name">
                  <p className="requester-role">Solicitante:</p>
                  <p className="requester-name">{adoption.user.name}</p>
                </div>
              </div>

              <div className="request-header-info">
                <h2 className="request-type">Solicitação de Adoção</h2>
                <div className="request-date-container">
                  <div className="request-date">
                    <FaCalendarAlt className="request-icon" />
                    <p>{adoptionMock.solicitacao.data}</p>
                  </div>
                  <div className="request-hour">
                    <FaClock className="request-icon" />
                    <p>{adoptionMock.solicitacao.hora}</p>
                  </div>
                </div>
              </div>

              <div className="request-body-container">
                <div className="request-where-lives">
                  <h3>Onde mora:</h3>
                  <div className="request-input-box">
                    <p className="request-input">{adoption.house_description}</p>
                  </div>
                </div>

                <div className="request-other-animals">
                  <h3>Possui outros animais?</h3>
                  <div className="request-input-box">
                    <p className="request-input">{adoption.animal_description || "Não possui"}</p>
                  </div>
                </div>

                <div className="request-motivation">
                  <h3>Motivação para adoção:</h3>
                  <div className="request-input-box">
                    <p className="request-input">{adoption.motivation || "Gosto muito de animais, sou apaixonado por cuidar de pets!"}</p>
                  </div>
                </div>

                <div className="request-details">
                  <div className="monthly-income">
                    <h3>Renda Mensal</h3>
                    <div className="request-input-box">
                      <p>R$ {adoption.user.monthly_rent || "3500"}</p>
                    </div>
                  </div>
                  <div className="personal-visit">
                    <h3>Agenda Visita</h3>
                    <div>
                      <div className="visit-date">
                        <div className="request-input-box">
                          <FaCalendarAlt className="request-icon" />
                          <p>{adoptionMock.solicitacao.agendaDia}</p>
                        </div>
                      </div>
                      <div className="visit-hour">
                        <div className="request-input-box">
                          <FaClock className="request-icon" />
                          <p>{adoptionMock.solicitacao.agendaHora}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col span={8} className="adoption-part-container animal">
              <img className="animal-image" src={adoption.animal.photo} alt="" />
              <div className="animal-detail-container">
                <div className="animal-title">
                  {(() => {
                    switch (adoption.animal.animal_type.type) {
                      case 'Dog':
                        return <FaDog className="card-animal-icon" />;
                      case 'Cat':
                        return <FaCat className="card-animal-icon" />;
                      case 'Bird':
                        return <PiBirdFill className="card-animal-icon" />;
                      default:
                        return null;
                    }
                  })()}
                  <h2 className="animal-name">{adoption.animal.name}</h2>
                </div>

                <div className="animal-info-container">
                  <div className="animal-info breed">
                    <h3>Raça</h3>
                    <p>{adoption.animal.breed || "Sem Raça Definida"}</p>
                  </div>

                  <div className="animal-other-infos">
                    <div className="animal-info size">
                      <h3>Porte</h3>
                      <p>{adoption.animal.size || "Sem Porte Definido"}</p>
                    </div>

                    <div className="animal-info gender">
                      <h3>Sexo</h3>
                      <p>{adoption.animal.gender}</p>
                    </div>
                  </div>

                  <div className="animal-description animal-info">
                    <h3>Sobre o pet:</h3>
                    <p>{adoption.animal.description || "Sou um pet dócil e adorável, amo brincar!"}</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col span={8} className="adoption-part-container devolutiva">
              <div className="info approval-container">
                <div className="responsible-container">
                  <img className="responsible-photo" src={adoptionMock.responsavel.foto} alt="responsible-photo" />
                  <div className="responsible-role-and-name">
                    <p className="responsible-role">Responsável:</p>
                    <p className="responsible-name">{adoptionMock.responsavel.nome}</p>
                  </div>
                </div>

                <div className="request-infos-grid">
                  <div className="request-infos">
                    <h3>Dias em aberto:</h3>
                    <p>Está com {adoptionMock.solicitacao.emAberto || "20"} dias</p>
                  </div>
                  <div className="request-infos">
                    <h3>Previsão:</h3>
                    <p>Em {adoptionMock.solicitacao.previsao || "05/09/2023"}</p>
                  </div>
                  <div className="request-infos">
                    <h3>Status:</h3>
                    <p>{adoptionMock.solicitacao.status || "Em análise"}</p>
                  </div>
                </div>

                <div className="request-return-head">
                  Devolutiva
                </div>
                <form className="request-return-form" onSubmit={(event) => { event.preventDefault() }}>
                <textarea
                    placeholder="Ex.: Infelizmente, você não se adequou aos requisitos exigidos para adotar tal animal."
                    className="request-return"
                    name="request-return"
                    id="request-return"
                    cols={10}
                    rows={10}
                >
                </textarea>
                  <Button className="return-btn" type="primary">Aceitar</Button>
                  <Button className="return-btn" type="primary" danger>Recusar</Button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </>
  );
};

export default AdoptionDetailsClient;
