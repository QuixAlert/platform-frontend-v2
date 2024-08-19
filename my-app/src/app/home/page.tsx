import React from 'react';

import NavBar from '@/components/NavBar/NavBar';
import Sidebar from '@/components/SideBar/SideBar';
import NeedHelpBtn from "@/components/NeedHelpBtn/NeedHelpBtn";

import './style.css';

const Home = () => {
  return (
    <>
      <NavBar/>
      <Sidebar/>
      <div className="container">
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
              <img 
                src="QuixAlert! 5.png" 
                alt="Logo" 
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
