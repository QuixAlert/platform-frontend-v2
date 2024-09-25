"use client"

import { Suspense, useState, useEffect } from "react";
import { FloatButton, notification, Tooltip, Spin } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import UserEmailInviteModal from "@/components/User/UserEmailInviteModal";
import { Loading } from "@/components/ui/Loading/Loading";
import { userInfoStore } from "@/store/user";
import { Role } from "@/model/Role";
import { useRouter } from "next/navigation";
import UsersListFetcher from "@/components/User/Fetcher/UsersListFetcher";
import UserActiveStatusModal from "@/components/User/UserActiveStatusModal";
import BusinessUser from "@/model/BusinessUser";

export default function UsersPage() {
    const [api, contextHolder] = notification.useNotification();
    const { user } = userInfoStore();
    const router = useRouter();

    const [isModalEmailInviteOpen, setIsModalEmailInviteOpen] = useState(false);
    const [isModalUserStatusOpen, setIsModalUserStatusOpen] = useState(false);
    const [userOnStatusEdition, setUserOnStatusEdition] = useState<BusinessUser>();
    const [isLoading, setIsLoading] = useState(true); // New loading state

    const showModalEmailInvite = () => setIsModalEmailInviteOpen(true);
    const handleModalEmailInviteClose = () => setIsModalEmailInviteOpen(false);

    const showModalUserStatus = (user: BusinessUser) => {
        setIsModalUserStatusOpen(true);
        setUserOnStatusEdition(user);
    };
    const handleModalUserStatusClose = () => {
        setIsModalUserStatusOpen(false);
        setUserOnStatusEdition(undefined);
    };

    useEffect(() => {
        if (user) {
            if (user.role !== Role.ADMIN) {
                router.push("/unauthorized");
            } else {
                setIsLoading(false); // Set loading to false once the user role is confirmed
            }
        }
    }, [user, router]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen w-full bg-default">
                <div className="text-center">
                    <Spin size="large" className="text-white" />
                    <p className="mt-4 text-xl text-white">Checando credenciais</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null; // Prevent rendering if no user data is available
    }

    return (
        <>
            {contextHolder}
            <div className="w-full h-full pt-10 pl-12 text-white">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">Usuários</h1>
                </div>

                <Suspense fallback={<Loading />}>
                    <UsersListFetcher loggedUserEmail={user.email} onEdit={showModalUserStatus} />
                </Suspense>

                <Tooltip placement="left" title="Adicionar novo usuário">
                    <FloatButton onClick={showModalEmailInvite} icon={<PlusCircleOutlined />} />
                </Tooltip>

                <UserActiveStatusModal
                    open={isModalUserStatusOpen}
                    onClose={handleModalUserStatusClose}
                    notificationApi={api}
                    user={userOnStatusEdition}
                />
                <UserEmailInviteModal
                    open={isModalEmailInviteOpen}
                    onClose={handleModalEmailInviteClose}
                    notificationApi={api}
                />
            </div>
        </>
    );
}
