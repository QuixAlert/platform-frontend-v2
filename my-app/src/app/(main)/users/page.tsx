"use client"

import Adoption from "@/model/Adoption";
import {Suspense, useState} from "react";
import {Loading} from "@/components/Loading/Loading";
import AdoptionFetcher from "@/components/Adoption/AdoptionFetcher";
import UserCard from "@/components/User/UserCard";
import { FloatButton, notification, Tooltip } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import UserModal from "@/components/User/UserModal";

export default function UsersPage() {
    const [api, contextHolder] = notification.useNotification();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {contextHolder}
            <div className="w-full h-full pt-10 pl-12 text-white">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">Usuários</h1>
                </div>

                <h2 className="text-2xl font-semibold mb-6">Ativos</h2>

                <UserCard user={null}/>

                <h2 className="text-2xl font-semibold mt-4 mb-6">Não Ativos</h2>

                <UserCard user={null}/>

                <Tooltip placement="left" title="Adicionar novo usuário">
                    <FloatButton onClick={showModal} icon={<PlusCircleOutlined />} />
                </Tooltip>
                
                <UserModal open={isModalOpen} onClose={handleModalClose} notificationApi={api}/>
            </div>
        </>
    );
}
