"use client"

import {EditOutlined, PlusOutlined, RadarChartOutlined} from "@ant-design/icons";
import SpecializationBusiness from "@/model/SpecializationBusiness";
import { Tooltip } from "antd";
import ColorButton from "@/components/Button/ColorButton";
import SpecialtyModal from "./SpecialtyModal"; // Adjust the import path accordingly
import React, {useCallback, useState} from "react";
import {updateUserSpecialty} from "@/actions/profile";

type UserSpecialtyProps = {
    specialization?: SpecializationBusiness;
    attendedCases: number;
    solvedCases: number;
    identificationNumber: string;
    userId: string
}

export default function UserSpecialty({
    specialization,
    attendedCases,
    solvedCases,
    identificationNumber,
    userId
}: UserSpecialtyProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleModalOk = useCallback((newSpecialty: string) => {
        setIsLoading(true)
        const result = updateUserSpecialty({
            governmentDetails: {
                specialization: {areaName: newSpecialty},
                attendedCases,
                solvedCases,
                identificationNumber,
            }
        }, userId)
        result.finally(() => {
            setIsLoading(false)
            setIsModalVisible(false);
        });
    }, [])

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <div className="relative group h-28 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <div>
                <div className="flex items-center mb-2">
                    <RadarChartOutlined className="text-lg text-pgreen mr-2" />
                    <p className="text-lg font-bold text-black">Especialidade</p>
                </div>
                <p className="mb-2 text-gray-700">
                    {specialization?.areaName?.length != 0
                        ? `A sua especialidade é ${specialization?.areaName}`
                        : "Nenhuma especialidade registrada"}
                </p>
            </div>
            <Tooltip title={specialization?.areaName ? "Atualizar especialidade" : "Cadastrar Especialidade"}>
                <ColorButton
                    icon={
                    specialization?.areaName ?
                        <EditOutlined
                            style={{ color: 'white' }}
                        />
                        :
                        <PlusOutlined
                            style={{ color: 'white' }}
                        />
                    }
                    bgColor="#269996"
                    type="primary"
                    onClick={showModal}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
            </Tooltip>

            <SpecialtyModal
                visible={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleCancel}
                specialty={specialization?.areaName || ""}
                title={specialization?.areaName ? "Atualizar Especialidade" : "Cadastrar Especialidade"}
                isLoading={isLoading}
            />
        </div>
    );
}
