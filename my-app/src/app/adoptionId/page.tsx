"use client"

import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/SideBar/SideBar";
import { Button, Col, Row } from 'antd';
import { FaCalendarAlt, FaCat, FaClock, FaDog  } from "react-icons/fa";

import "./style.css";
import { PiBirdFill } from "react-icons/pi";

const adoption = {
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

const AdoptionId = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="page-container">
        <Row>
          <Col span={8} className="adoption-part-container solicitation">
            <div className="requester-container">
                <img className="requester-photo" src={ adoption.solicitante.foto } alt="requester-photo" />
                <div className="requester-role-and-name">
                  <p className="requester-role">Solicitante:</p>
                  <p className="requester-name">{ adoption.solicitante.nome }</p>
                </div>
            </div>

            <div className="request-header-info">
              <h2 className="request-type">Solicitação de Adoção</h2>
              <div className="request-date-container">
                <div className="request-date">
                  <FaCalendarAlt className="request-icon"/>
                  <p>{adoption.solicitacao.data || "05/12/2023"}</p>
                </div>
                <div className="request-hour">
                  <FaClock className="request-icon"/>
                  <p>{adoption.solicitacao.hora || "19h25"}</p>
                </div>
              </div>
            </div>

            <div className="request-body-container">
              <div className="request-where-lives">
                <h3>Onde mora:</h3>
                <div className="request-input-box">
                  <p className="request-input">{adoption.solicitacao.mora}</p>
                </div>
              </div>

              <div className="request-other-animals">
                <h3>Possui outros animais?</h3>
                <div className="request-input-box">
                  <p className="request-input">{adoption.solicitacao.animais || "Não possui"}</p>
                </div>
              </div>

              <div className="request-motivation"> 
                <h3>Motivação para adoção:</h3>
                <div className="request-input-box">
                  <p className="request-input">{adoption.solicitacao.motivacao || "Gosto muito de animais, sou apaixonado por cuidar de pets!"}</p>
                </div>

              </div>

              <div className="request-details">
                <div className="montlhy-income">
                  <h3>Renda Mensal</h3>
                  <div className="request-input-box">
                    <p>R$ {adoption.solicitacao.renda || "3500"}</p>
                  </div>
                </div>
                <div className="personal-visit">
                  <h3>Agenda Visita</h3>
                  <div>
                    <div className="visit-date">
                      <div className="request-input-box">
                        <FaCalendarAlt className="request-icon"/>
                        <p>{adoption.solicitacao.agendaDia || "22/07/2023"}</p>
                      </div>
                    </div>
                    <div className="visit-hour">
                      <div className="request-input-box">
                        <FaClock className="request-icon"/>
                        <p>{adoption.solicitacao.agendaHora || "14h10"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>



          <Col span={8} className="adoption-part-container animal">
            <img className="animal-image" src={adoption.animal.foto} alt="" />

            <div className="animal-detail-container">
              <div className="animal-title">
                {  
                  (() => {
                    if (adoption.animal.tipo == "Cachorro") {
                      return (
                        <FaDog className="animal-icon"/>
                      )
                    } else if (adoption.animal.tipo == "Gato") {
                      return (
                        <FaCat className="animal-icon"/>
                      )
                    } else if (adoption.animal.tipo == "Pássaro") {
                      return (
                        <PiBirdFill className="animal-icon"/>
                      )
                      }
                  })()
                }
                <h2 className="animal-name">{adoption.animal.nome}</h2>
              </div>

              <div className="animal-info-container">
                <div className="animal-info breed">
                  <h3>Raça</h3>
                  <p>{adoption.animal.raca || "Sem Raça Definida"}</p>
                </div>

                <div className="animal-other-infos">
                  <div className="animal-info size">
                    <h3>Porte</h3>
                    <p>{adoption.animal.porte || "Sem Por Definido"}</p>
                  </div>

                  <div className="animal-info gender">
                    <h3>Sexo</h3>
                    <p>{adoption.animal.genero}</p>
                  </div>
                </div>

                <div className="animal-description animal-info">
                  <h3>Sobre o pet:</h3>
                  <p>{adoption.animal.sobre || "Sou um pet dócil e adorável, amo brincar!"}</p>
                </div>
              </div>

            </div>

          </Col>



          <Col span={8} className="adoption-part-container devolutiva">
          <div className="info approval-container">
            <div className="responsible-container">
              <img className="responsible-photo" src={ adoption.responsavel.foto } alt="responsible-photo" />
              <div className="responsible-role-and-name">
                <p className="responsible-role">Responsável:</p>
                <p className="responsible-name">{ adoption.responsavel.nome }</p>
              </div>
            </div>

            <div className="request-infos-grid">
              <div className="request-infos">
                <h3>Dias em aberto:</h3>            
                <p>Está com {adoption.solicitacao.emAberto || "20"} dias</p>
              </div>
              <div className="request-infos">
                <h3>Previsão:</h3>            
                <p>Em {adoption.solicitacao.previsao || "05/09/2023"}</p>
              </div>
              <div className="request-infos">
                <h3>Status:</h3>            
                <p>{adoption.solicitacao.status || "Em análise"}</p>
              </div>
            </div>

            <div className="request-return-head">
              Devolutiva
            </div>
            <form className="request-return-form" onSubmit={ (event) => { event.preventDefault() } }>
              <textarea
                placeholder="Ex.: Infezlimente, você não se adequou aos requisitos exigidos para adotar tal animal. "
                className="request-return"
                name="request-return"
                id="request-return"
                cols={10}
                rows={10}
              >
              </textarea>
              <Button className="return-btn" type="primary">Aceitar</Button>
              <Button className="return-btn" type="primary" danger>Recusar</Button>
              {/* <button className="request-return-button refuse-btn">
                <img src={""} alt="refuse button icon" />
              </button>
              <button className="request-return-button accept-btn">
                <img src={""} alt="accept button icon" />
              </button> */}
            </form>

          </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdoptionId;