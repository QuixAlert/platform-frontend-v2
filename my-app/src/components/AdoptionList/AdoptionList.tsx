"use client"; 

import { useEffect } from "react";
import { Modal } from "antd";
import AdoptionCard from "@/components/AdoptionCard/AdoptionCard";
import Adoption from "@/model/Adoption";

type AdoptionsListProps = {
  adoptions: Adoption[]
  error: ErrorS
}

const AdoptionsList = ({ adoptions, error }: AdoptionsListProps) => {
  useEffect(() => {
    if (error) {
      Modal.error({
        title: "Error",
        content: error.message,
      });
    }
  }, [error]);

  return (
    <div className="cards">
      {adoptions.map((adoption) => (
        <AdoptionCard key={adoption.id} adoption={adoption} />
      ))}
    </div>
  );
};

export default AdoptionsList;