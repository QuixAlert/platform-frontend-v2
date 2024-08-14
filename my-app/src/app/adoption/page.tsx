'use client';

import Sidebar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import AdoptionCard from "@/components/AdoptionCard/AdoptionCard";
import { fetchAdoptions } from "@/api/adoptions";
import Link from "next/link";
import { Button, Spin } from "antd";
import "./style.css";
import Adoption from "@/model/Adoption";
import React, { useState, useEffect } from "react";
import { parseCookies } from 'nookies';
import { LoadingOutlined } from "@ant-design/icons";

const AdoptionPage: React.FC = () => {
  const [adoptions, setAdoptions] = useState<Adoption[]>([]);
  const [loading, setLoading] = useState(true);
  const token = parseCookies(undefined)["quixalert.auth.token"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAdoptions = await fetchAdoptions(token || '');
        setAdoptions(fetchedAdoptions);
      } catch (error) {
        console.error("Failed to fetch adoptions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
      <>
        <NavBar />
        <Sidebar />
        <div className="page-container">
          <div className="header">
            <h1 className="main-title">Adoções</h1>
            <div className="filters">
              <Button className="filter-button">Todas</Button>
              <Button className="filter-button">Minhas</Button>
              <Button className="filter-button">Abertas</Button>
              <Button className="filter-button">Fechadas</Button>
            </div>

            <div className="creation">
              <Link href={"/adoption/animals"} className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default creation-button">
                Ver lista de animais
              </Link>
              <Link href={"/adoption/createAnimal"} className="ant-btn css-dev-only-do-not-override-1pg9a38 ant-btn-default creation-button">
                Cadastrar animal
              </Link>
            </div>
          </div>

          <div className="cards">
            {loading ? (
                <div className="flex items-center justify-center">
                  <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
                </div>
            ) : (
                adoptions.map(adoption => (
                    <AdoptionCard key={adoption.id} adoption={adoption} />
                ))
            )}
          </div>
        </div>
      </>
  );
};

export default AdoptionPage;
