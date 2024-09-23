"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style.css";
import Adoption from "@/model/Adoption"; //ainda estou pegando o modal de adoption

const reportCard = {
  solicitante: {
    nome: "Thiago",
    url: "/solicitante.png",
  },
  responsavel: {
    nome: "Samuel",
    url: "/responsavel.png", 
  },
  solicitacao: {
    data: "12/06/2024",
    titulo: "Lixo descartado incorretamente na rua do centro",
    emAberto: 20,
    endereco: "Rua Tabelião Enéias 149a",
    previsao: "10/07/2024",
    status: "Enviada",
  },
  animal: {
    nome: "Sheldon",
    tipo: "Cachorro",
    genero: "Macho",
    foto: "animal.jpg",
  },
};

// Função para buscar a URL 
const fetchMapImage = (address) => {
  const apiKey = "AIzaSyDpFArXXY9NU9HZUpjunkwhTp3p_jjs30c"; //  chave da API do robson
  return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C${encodeURIComponent(address)}&key=${apiKey}`;
};

function MiniMap({ address }) {
  const [mapImage, setMapImage] = useState("");

  useEffect(() => {
    const imageUrl = fetchMapImage(address);
    // console.log(imageUrl); 
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

function ReportCard({ adoption }: { adoption: Adoption }) {
  const router = useRouter();

  return (
    <div className="adoption-card">
      <div className="card-left">
        <div className="card-person-container">
          <Image
            className="card-person-photo"
            src={adoption.user?.path_picture || reportCard.solicitante.url}
            alt="person-photo"
            width={100}
            height={100}
          />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Solicitante:</p>
            <p className="card-person-name">
              {adoption.user?.name || reportCard.solicitante.nome}
            </p>
          </div>
        </div>
        <div className="card-adoption-info-grid">
          <div className="card-adoption-info-line w-[180px]">
            <h3>Título</h3>
            <p className="truncate">{reportCard.solicitacao.titulo}</p>  
          </div>
          <div className="card-adoption-info-line">
            <h3>Data da solicitação:</h3>
            <p>{"20/12/2023"}</p>
          </div>
        </div>

        <div className="card-adoption-info-line w-[180px]">
          <h3>Endereço</h3>
          <p className="truncate">{reportCard.solicitacao.endereco}</p>
        </div>

        <MiniMap address={reportCard.solicitacao.endereco} />
      </div>

      <div className="card-right">
        <div className="card-person-container">
          <Image
            className="card-person-photo"
            src={reportCard.responsavel.url}
            alt="person-photo"
            width={100}
            height={100}
          />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Responsável:</p>
            <p className="card-person-name">{reportCard.responsavel.nome}</p>
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
          <button
            className="card-see-more-btn"
            onClick={() => router.push(`/adoption/${adoption.id}`)}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
