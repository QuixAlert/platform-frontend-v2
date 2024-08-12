"use client"

import React from "react";

const animalListCard = {
  animal: {
    nome: "Sheldon",
    tipo: "Cachorro",
    genero: "Macho",
    foto: "/animal.jpg",
    status: "adotado",
    data: "24/07/2024"
  }
}

import { IoMaleSharp } from "react-icons/io5";
import { IoFemaleSharp } from "react-icons/io5";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import Animal from "@/model/Animal";
import "./style.css"

function AnimalListCard({ animal }: { animal: Animal }){
    return (
        <div className="animal-card">
          <img src={animal.photo} alt="Sheldon" className="animal-image" />
          <div className="animal-info">
            <div className="animal-icons">
                <h3 className="animal-name">
                    {animal.name}
                </h3>
                {(() => {
                if (animal.animal_type.type === "Dog") {
                  return <FaDog className="card-animal-icon" />;
                } else if (animal.animal_type.type === "Cat") {
                  return <FaCat className="card-animal-icon" />;
                } else if (animal.animal_type.type === "Bird") {
                  return <PiBirdFill className="card-animal-icon" />;
                }
              })()}
              {animal.gender === "Macho"
                ? <IoMaleSharp className="card-animal-icon" />
                : <IoFemaleSharp className="card-animal-icon"/>}
            </div>
            <p className="animal-date">Data de Cadastro</p>
            <p className="animal-date-value">{animal.creation_date || "25/06/2024"}</p>
          </div>
          <div className="animal-status">
            <span className="status-label">Status</span>
            <span className="status-value">{animal.status || "Adotado"}</span>
          </div>
        </div>
      );
    }

export default AnimalListCard;