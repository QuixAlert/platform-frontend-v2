"use client"

import {Suspense, useState, useEffect} from "react";
import {FloatButton, notification, Tooltip} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import UserModal from "@/components/User/UserModal";
import {Loading} from "@/components/ui/Loading/Loading";
import {UsersListFetcher} from "@/components/User/Fetcher/UserListFetcher";
import {userInfoStore} from "@/store/user";
import {Role} from "@/model/Role";
import {useRouter} from "next/navigation"; // Import useRouter

export default function UsersPage() {
    const [api, contextHolder] = notification.useNotification();
    const { user } = userInfoStore();
    const router = useRouter(); // Initialize useRouter

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    console.log(user?.role)
    console.log(Role.ADMIN)

    useEffect(() => {
        if (user?.role !== Role.ADMIN) {
            router.push('/unauthorized');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return (
        <>
            {contextHolder}
            <div className="w-full h-full pt-10 pl-12 text-white">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">Usuários</h1>
                </div>

                <Suspense fallback={<Loading />}>
                    <UsersListFetcher/>
                </Suspense>

                <Tooltip placement="left" title="Adicionar novo usuário">
                    <FloatButton onClick={showModal} icon={<PlusCircleOutlined />} />
                </Tooltip>

                <UserModal open={isModalOpen} onClose={handleModalClose} notificationApi={api}/>
            </div>
        </>
    );
}