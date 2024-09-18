import React from 'react';

import Image from 'next/image';

import NeedHelpBtn from "@/components/NeedHelpBtn/NeedHelpBtn";

import './style.css';

export default function Home(){
  return (
    <>
      <div className="container h-full p-0 w-full">
        <div className="card">
          <div className="content">
            <div className="textContainer">
              <h1 className="title">
                Plataforma de Gestão de Dados do QuixAlert!
              </h1>
              <p className="description">
                A equipe responsável por cada atendimento solicitado via o QuixAlert é a equipe que 
                trabalha na Autarquia Municipal de Meio Ambiente de Quixadá (AMMA). 
                Para que a equipe consiga registrar esses atendimentos, estamos desenvolvendo 
                uma plataforma web que possibilita o gerenciamento das informações e 
                solicitações recebidas através do QuixAlert.
              </p>
              <NeedHelpBtn />
            </div>
            <div className="imageContainer">
              <Image 
                src="/quixalert_logo.svg" 
                alt="Logo" 
                className="image"
                width={300} 
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
