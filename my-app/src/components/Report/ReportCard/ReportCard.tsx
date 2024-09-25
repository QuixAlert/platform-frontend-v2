"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style.css";
import Adoption from "@/model/Adoption"; //ainda estou pegando o modal de adoption
import Report from "@/model/Report";
import {util} from "zod";
import Omit = util.Omit;
import StatusReport from "@/model/StatusReport";
import UserFirebase from "@/model/UserFirebase";

const repoCard = {
  title: "Lixo depositado incorretamente na rua",
  location: "Rua José Queiroz Pessoa 1812",
  description: "Lixos fedorentos em frente a garagem do seu zé, ao lado da do boteco",
  date: "21/09/2024",
  photo: "https://folhapopular.info/wp-content/uploads/2017/08/2017_08_16_1502905105.jpg",
  possible_solution: "Realizar a retirada dos lixos através de uma equipe especializada",
  status: "Em análise",
  user: {
    name: "Thiago Maia",
    path: "/solicitante.png"
  },
  responsible: {
    name: "João Victor",
    path: "/responsavel.png"
  }
}

// Função para buscar a URL 
const fetchMapImage = (address: string | number | boolean) => {
  const apiKey = "AIzaSyDpFArXXY9NU9HZUpjunkwhTp3p_jjs30c"; //  chave da API do robson
  return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C${encodeURIComponent(address)}&key=${apiKey}`;
};

function MiniMap({ address }: { address: string }) {
  const [mapImage, setMapImage] = useState("");

  useEffect(() => {
    const imageUrl = fetchMapImage(address);
    setMapImage(imageUrl);
    
  }, [address]);

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <div style={{ height: "80px", width: "100%", overflow: "hidden", borderRadius: '5px' }}>
      {mapImage && (
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <Image 
            src={mapImage} 
            alt="Mapa" 
            layout="responsive" 
            width={600} // tem que ter pelo menos alguma propriedade por padrão
            height={300} 
          />
        </a>
      )}
    </div>
  );
}

function ReportCard({ report }: { report: Report }) {
  const router = useRouter();

  return (
    <div className="adoption-card">
      <div className="card-left">
        <div className="card-person-container">
          <Image
            className="card-person-photo"
            src={repoCard.user.path}
            alt="person-photo"
            width={100}
            height={100}
          />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Solicitante:</p>
            <p className="card-person-name">
              {repoCard.user.name}
            </p>
          </div>
        </div>
        <div className="card-adoption-info-grid">
          <div className="card-adoption-info-line w-[180px]">
            <h3>Título</h3>
            <p className="truncate">{repoCard.title}</p>
          </div>
          <div className="card-adoption-info-line">
            <h3>Data da solicitação:</h3>
            <p>{repoCard.date}</p>
          </div>
        </div>

        <div className="card-adoption-info-line w-[180px]">
          <h3>Endereço</h3>
          <p className="truncate">{repoCard.location}</p>
        </div>

        <MiniMap address={repoCard.location} />
      </div>

      <div className="card-right">
        <div className="card-person-container">
          <Image
            className="card-person-photo"
            src={repoCard.responsible.path}
            alt="person-photo"
            width={100}
            height={100}
          />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Responsável:</p>
            <p className="card-person-name">{repoCard.responsible.name}</p>
          </div>
        </div>
        <div className="card-status-info">
          <div className="card-info-line">
            <h2>Dias em aberto:</h2>
            <p>Está com {"20"} dias</p>
          </div>
          <div className="card-info-line">
            <h2>Status:</h2>
            <p>{repoCard.status}</p>
          </div>
          <div className="card-info-line">
            <h2>Conclusão Prevista:</h2>
            <p>{"25/12/2023"}</p>
          </div>
        </div>
        <div className="card-see-more">
          <button
            className="card-see-more-btn"
            onClick={() => router.push(`/report/${report.id}`)}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
