"use client"

import React from "react";

const adoptionCard = {
  solicitante: {
    nome: "Thiago",
    url: "solicitante.png"
  },
  responsavel: {
    nome: "Samuel",
    url: "responsavel.png"
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
  }
}

import { IoMaleSharp } from "react-icons/io5";
import { IoFemaleSharp } from "react-icons/io5";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";

import "./style.css"

function AdoptionCard() {
  return (
    <div className="adoption-card" title="">
      <div className="card-left">
        <div className="card-person-container">
          <img className="card-person-photo" src={ adoptionCard.solicitante.url } alt="person-photo" />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Solicitante:</p>
            <p className="card-person-name">{ adoptionCard.solicitante.nome }</p>
          </div>
        </div>
        <div className="card-adoption-info-grid">
          <div className="card-adoption-info-line">
            <h3>Tipo de solicitação:</h3>
            <p>Adoção</p>
          </div>
          <div className="card-adoption-info-line">
            <h3>Data da solicitação:</h3>            
            <p>{ adoptionCard.solicitacao.data || "20/12/2023"}</p>
          </div>
        </div>

        <div className="card-animal-sub-info">
            <h3>{ adoptionCard.animal.nome }</h3>
            {
              (() => {
                if (adoptionCard.animal.tipo == "Cachorro") {
                  return (
                    <FaDog className="card-animal-icon"/>
                  )
                } else if (adoptionCard.animal.tipo == "Gato") {
                  return (
                    <FaCat className="card-animal-icon"/>
                  )
                } else if (adoptionCard.animal.tipo == "Pássaro") {
                  return (
                    <PiBirdFill className="card-animal-icon"/>
                  )
                  }
              })()
            }
            {
              adoptionCard.animal.genero === "Macho" 
                ? (<IoMaleSharp className="card-animal-icon"/>)
                : (<IoFemaleSharp className="card-animal-icon"/>)
            }
          </div>
        
        <div className="card-adoption-animal-info">
          <div className="card-animal-photo-container">
            <img className="card-animal-photo" src={ adoptionCard.animal.foto} alt="animal image"/>
          </div>
        </div>
      </div>

      <div className="card-right">
        <div className="card-person-container">
          <img className="card-person-photo" src={ adoptionCard.responsavel.url } alt="person-photo" />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Responsável:</p>
            <p className="card-person-name">{adoptionCard.responsavel.nome}</p>
          </div>
        </div>
        <div className="card-status-info">
        <div className="card-info-line">
            <h2>Dias em aberto:</h2>
            <p>Está com { adoptionCard.solicitacao.emAberto || "20" } dias</p>
          </div>
          <div className="card-info-line">
            <h2>Status:</h2>
            <p>{ adoptionCard.solicitacao.status || "Aguardando" }</p>
          </div>
          <div className="card-info-line">
            <h2>Conclusão Prevista:</h2>
            <p>{ adoptionCard.solicitacao.previsao || "25/12/2023" }</p>
          </div>
        </div>
        <div className="card-see-more">
          <button
            className="card-see-more-btn"
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdoptionCard;