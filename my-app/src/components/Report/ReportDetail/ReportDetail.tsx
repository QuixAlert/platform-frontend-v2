"use client"

import React, { useState, useEffect } from "react";
import { Button, Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./style.css";

import Report from "@/model/Report";
import {FaCalendarAlt, FaCat, FaClock, FaDog, FaMarker, FaMapMarkerAlt, FaExclamationTriangle} from "react-icons/fa";
import {PiBirdFill} from "react-icons/pi";
import Image from "next/image";
import {MiniMap} from "@/components/Report/ReportCard/ReportCard";
import next from "next";

const reportMock = {
  user_requester: {
    nome: "João Natas",
    foto: "https://a-static.mlcdn.com.br/450x450/peruca-de-palhaco-colorida-ydh/actionbrindes/15800370851/cb8d385937eb94b22520dc7c0bb886f9.jpeg",
  },
  report: {
    title: "Lixo depositado incorretamente", //este titulo está integrada com o back?
    location: "Jose Queiroz Pessoa 1812",
    description: "Lixo fedorento depositado em frente ao galpão do seu zé",
    date: "23/09/2024",
    possible_solution: "Realizar a retirada dos lixos através de uma equipe especializada",
    status: "Em análise",
    photo: "https://folhapopular.info/wp-content/uploads/2017/08/2017_08_16_1502905105.jpg",
  },
};

type ReportDetailProps = {
  report: Report  | undefined;
  error: Error | undefined;
};

// Função para buscar a URLa
const fetchMapImage = (address: string | number | boolean) => {
  const apiKey = "AIzaSyDpFArXXY9NU9HZUpjunkwhTp3p_jjs30c"; //  chave da API do robson
  return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C${encodeURIComponent(address)}&key=${apiKey}`;
};

export default function ReportDetail({ report, error }: ReportDetailProps) {
  return (
    <>
      <div className="w-full h-full pt-5 pl-7 page-container bg-pgb text-white">
        {!report ? (
            <div className="h-screen flex items-center justify-center">
              <Spin indicator={<LoadingOutlined style={{fontSize: 48}} spin/>}/>
            </div>
          ) :
          (
            <Row>
              <Col span={8} className="report-part-container solicitation">
                <div className="requester-container">
                  <img className="requester-photo" src={report.user_requester?.path_picture} alt="requester-photo"/>
                  <div className="requester-role-and-name">
                    <p className="requester-role">Solicitante:</p>
                    <p className="requester-name">{report.user_requester?.name}</p>
                  </div>
                </div>

                <div className="request-header-info">
                  <h2 className="request-type">Denúncia</h2>
                  <div className="request-date-container">
                    <div className="request-date">
                      <FaCalendarAlt className="request-icon"/>
                      <p>25/09/2024</p>
                    </div>
                  </div>
                     <div className="flex flex-row gap-2">
                      <FaExclamationTriangle className="request-icon"/>
                      <p className="truncate">{reportMock.report.title}</p>
                    </div>
                </div>

                <div className="request-body-container">
                  <div className="request-where-lives">
                    <h3>Descrição</h3>
                    <div className="request-input-box">
                      <p className="request-input truncate h-11">{report.description}</p>
                    </div>
                  </div>

                  <div className="request-other-reports">
                    <h3>Localização</h3>
                    <div className="request-input-box">
                      <p className="request-input truncate h-8">{report.location}</p>
                    </div>
                  </div>

                  <div className="request-motivation">
                    <h3>Possível Solução:</h3>
                    <div className="request-input-box">
                      <p className="request-input truncate h-8">{report.possible_solution}</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col span={8} className="report-part-container report flex">
                <img className="report-image" src={report.photo} alt=""/>
                <div className="image-conteiner">
                  <div className="map-image"> 
                    <MiniMap address={report.location} />
                  </div>
                </div>
               
              </Col>

              <Col span={8} className="report-part-container devolutiva">
                <div className="info approval-container">
                  <div className="responsible-container">
                    <img className="responsible-photo" src={report.user?.path_picture} alt="responsible-photo"/>
                    <div className="responsible-role-and-name">
                      <p className="responsible-role">Responsável:</p>
                      <p className="responsible-name">{report.user?.name}</p>
                    </div>
                  </div>

                  <div className="request-infos-grid">
                    <div className="request-infos">
                      <h3>Dias em aberto:</h3>
                      <p>Está com 20 dias</p>
                    </div>
                    <div className="request-infos">
                      <h3>Previsão:</h3>
                      <p>Em 15/10/2024</p>
                    </div>
                    <div className="request-infos">
                      <h3>Status:</h3>
                      <p>{report.status_report?.name || "Em análise"}</p>
                    </div>
                  </div>

                  <div className="request-return-head">
                    Devolutiva
                  </div>
                  <form className="request-return-form">
                <textarea
                  placeholder="Ex.: Infelizmente, você não colocou o endereço da denúncia"
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
          )
        }
      </div>
    </>
  );
}
