"use client"

import React from "react";

const animalListCard = {
  animal: {
    nome: "Sheldon",
    tipo: "Cachorro",
    genero: "Macho",
    foto: "animal.jpg",
    status: "adotado",
    data: "24/07/2024"
  }
}

import { IoMaleSharp } from "react-icons/io5";
import { IoFemaleSharp } from "react-icons/io5";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";

import "./style.css"

function AnimalListCard(){
    return (
        <div className="animal-card">
          <img src="animal.jpg" alt="Sheldon" className="animal-image" />
          <div className="animal-info">
            <div className="animal-icons">
            <h3 className="animal-name">
                Sheldon
            </h3>
            {(() => {
            if (animalListCard.animal.tipo === "Cachorro") {
              return <FaDog className="card-animal-icon" />;
            } else if (animalListCard.animal.tipo === "Gato") {
              return <FaCat className="card-animal-icon" />;
            } else if (animalListCard.animal.tipo === "Pássaro") {
              return <PiBirdFill className="card-animal-icon" />;
            }
          })()}
          {animalListCard.animal.genero === "Macho" 
            ? <IoMaleSharp className="card-animal-icon" /> 
            : <IoFemaleSharp className="card-animal-icon"/>}
            </div>
            <p className="animal-date">Data de Cadastro</p>
            <p className="animal-date-value">25/11/2023</p>
          </div>
          <div className="animal-status">
            <span className="status-label">Status</span>
            <span className="status-value">Adotado</span>
          </div>
        </div>
      );
    }

export default AnimalListCard;