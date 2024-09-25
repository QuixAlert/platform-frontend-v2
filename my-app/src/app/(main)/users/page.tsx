"use client"

import { Suspense, useState, useEffect } from "react";
import { FloatButton, notification, Tooltip } from "antd";
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

    const [checkedRole, setCheckedRole] = useState(false);

    useEffect(() => {
        if (!checkedRole && user) {
            if (user.role !== Role.ADMIN) {
                router.push("/unauthorized");
            }
            setCheckedRole(true);
        }
    }, [user, router, checkedRole]);

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
