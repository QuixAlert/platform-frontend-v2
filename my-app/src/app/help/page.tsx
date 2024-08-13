'use client'
import HelpCard from '@/components/HelpCard/HelpCard'
import NavBar from '@/components/NavBar/NavBar'
import Sidebar from '@/components/SideBar/SideBar'
import React from 'react'
import "./style.css"

const helpCardsMoki = [
  {
    title: "Como Cadastrar Um Animal",
    videoUrl: "https://www.youtube.com/watch?v=KCpoIOw1voE",
    description: "Aprenda a cadastrar um animal para adoção com este tutorial passo a passo. Neste vídeo, mostramos como preencher todas as informações necessárias, desde detalhes básicos como nome e idade até informações mais específicas sobre a saúde e o histórico do animal."
  },
  {
    title: "Como Adotar Um Animal",
    videoUrl: "https://www.youtube.com/watch?v=KCpoIOw1voE",
    description: "Saiba como adotar um animal de forma segura e responsável. Este vídeo cobre tudo o que você precisa saber antes de adotar, incluindo o processo de seleção e cuidados iniciais."
  },
  {
    title: "Cuidados Básicos com Animais",
    videoUrl: "https://www.youtube.com/watch?v=KCpoIOw1voE",
    description: "Entenda os cuidados básicos necessários para garantir a saúde e o bem-estar do seu animal de estimação. O vídeo aborda alimentação, higiene e exercícios."
  },
  {
    title: "Como Cadastrar Um Animal",
    videoUrl: "https://www.youtube.com/watch?v=KCpoIOw1voE",
    description: "Aprenda a cadastrar um animal para adoção com este tutorial passo a passo. Neste vídeo, mostramos como preencher todas as informações necessárias, desde detalhes básicos como nome e idade até informações mais específicas sobre a saúde e o histórico do animal."
  },
  {
    title: "Como Adotar Um Animal",
    videoUrl: "https://www.youtube.com/watch?v=KCpoIOw1voE",
    description: "incluinincluindo o processo de seleção e cuidados iniciaidos iniciais.do o processo de seleção e cuidados iniciais."
  },
  {
    title: "Cuidados Básicos com Animais",
    videoUrl: "https://www.youtube.com/watch?v=KCpoIOw1voE",
    description: "Entenda os cuidados básicos necessários para garantir a saúde e o bem-estar do seu animal de estimação. O vídeo aborda alimentação, higiene e exercícios."
  },
  {
    title: "Cuidados Básicos com Animais",
    videoUrl: "https://www.youtube.com/watch?v=KCpoIOw1voE",
    description: "Entenda os cuidados básicos necessários para garantir a saúde e o bem-estar do seu animal de estimação. O vídeo aborda alimentação, higiene e exercícios."
  },
  {
    title: "Cuidados Básicos com Animais",
    videoUrl: "https://www.youtube.com/watch?v=KCpoIOw1voE",
    description: "Entenda os cuidados básicos necessários para garantir a saúde e o bem-estar do seu animal de estimação. O vídeo aborda alimentação, higiene e exercícios."
  }
];

const Page = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className='bg-[#1D1E23] pt-[100px] pl-[120px]'>

        <h1 className="text-white font-nunito font-bold text-[26px]">
          Ajuda
        </h1>

        <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,_minmax(353px,_1fr))] gap-8 justify-items-start">
          {helpCardsMoki.map((card, index) => (
            <HelpCard
              key={index}
              title={card.title}
              videoUrl={card.videoUrl}
              description={card.description}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default Page;
