"use client"

import React, { useEffect, useState } from "react";
import {Input, message} from "antd";
import { Tooltip } from "antd/lib";
import ColorButton from "@/components/Button/ColorButton";
import { EditOutlined } from "@ant-design/icons";
import BusinessUser from "@/model/BusinessUser";
import UserProfilePhoto from "@/components/Profile/UserProfilePhoto";
import { updateUserProfile } from "@/api/client/profile";
import errorHandlers from "@/components/ui/Errors/error.handler";
import { ErrorName } from "@/errors/error-names";
import { transformError } from "@/lib/utils";
import { addImageOnFirebaseWithBase64 } from "@/api/server/generic";
import {NotificationType, showNotification} from "@/components/Notification/Notification";

type UserMainProfileProps = {
    user?: BusinessUser;
};

export default function UserMainProfile({ user }: UserMainProfileProps) {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [photoBase64, setPhotoBase64] = useState<string | null>(null);
    const [name, setName] = useState<string>(user?.name || "");
    const [email, setEmail] = useState<string>(user?.email || "");
    const [isLoading, setIsLoading] = useState(false);
    const [ErrorComponent, setErrorComponent] = useState<React.ReactNode | null>(null);
    let photoUrl: string | undefined = undefined; // Initial photo URL

    const [messageApi, contextHolder] = message.useMessage();

    const showMessage = (type: 'success' | 'error', content: string) => {
        messageApi.open({ type, content });
    };


    useEffect(() => {
        if (!isEditingProfile && user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user, isEditingProfile]);

    async function handleSave() {
        setIsLoading(true);
        setErrorComponent(null);

        if (user?.id) {
            if (photoBase64) {
                const resultImage = await addImageOnFirebaseWithBase64(photoBase64);
                const { error: imageUploadError, value: photo } = resultImage.unpack();

                if (imageUploadError) {
                    const errorTransformed = transformError(imageUploadError);
                    const errorName = errorTransformed.name as ErrorName;
                    const ErrorComp = errorHandlers[errorName];
                    setErrorComponent(<ErrorComp error={errorTransformed} />);
                    setIsLoading(false);
                    return;
                }
                photoUrl = photo?.urlPicture;
            }

            const result = await updateUserProfile({ name, email, photo: photoUrl }, user.id);
            const { error: apiError, value } = result.unpack();

            setIsLoading(false);
            setIsEditingProfile(false);

            if (apiError) {
                const errorTransformed = transformError(apiError);
                const errorName = errorTransformed.name as ErrorName;
                const ErrorComp = errorHandlers[errorName];
                setErrorComponent(<ErrorComp error={errorTransformed} />);
                return;
            }

            if (value?.name) setName(value.name);
            if (value?.email) setEmail(value.email);

            showMessage('success', 'Dados atualizados com sucesso!');
        }
    }

    return (
        <>
            {contextHolder}
            <div className="relative rounded-xl w-4/5 h-[420px] bg-white shadow-md">
                <UserProfilePhoto
                    photoUrl={user?.photo}
                    isEditing={isEditingProfile}
                    setPhotoBase64={setPhotoBase64}
                />

                <div className="bg-pgreen h-2/4 rounded-lg"/>

                <div className="pl-44 flex flex-row items-center justify-between w-full px-6">
                    <div>
                        <p className="pt-6 mb-1 text-xl font-semibold text-black">Nome do servidor(a)</p>
                        {isEditingProfile ? (
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-64 mb-2 text-sm"
                            />
                        ) : (
                            <p className="text-lg font-thin text-black">{user?.name || "Nome não disponível"}</p>
                        )}
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        <div className="border-2 border-gray-300 bg-gray-100 rounded-lg px-3 py-1 shadow-sm">
                            <Tooltip title="Essa é a sua responsabilidade na plataforma" placement="top">
                                <p className="text-black font-medium">{String(user?.role).toUpperCase() || "SERVIDOR"}</p>
                            </Tooltip>
                        </div>

                        {isEditingProfile && (
                            <Tooltip title="Cancelar Edição" placement="top">
                                <ColorButton
                                    danger
                                    icon={<EditOutlined/>}
                                    bgColor="#269996"
                                    type="primary"
                                    onClick={() => setIsEditingProfile(false)}
                                >
                                    Cancelar
                                </ColorButton>
                            </Tooltip>
                        )}

                        <Tooltip title={isEditingProfile ? "Finalizar edição" : "Editar dados do perfil"}
                                 placement="top">
                            <ColorButton
                                icon={<EditOutlined/>}
                                className="mr-6"
                                bgColor="#269996"
                                type="primary"
                                onClick={isEditingProfile ? handleSave : () => setIsEditingProfile(true)}
                                loading={isLoading}
                            >
                                {isEditingProfile ? "Salvar" : "Editar perfil"}
                            </ColorButton>
                        </Tooltip>
                    </div>
                </div>

                {ErrorComponent} {/* Render the ErrorComponent here */}

                <div className="pl-44 mt-10 px-6">
                    <p className="text-base font-bold text-black">
                        Email
                        {isEditingProfile ? (
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-64 ml-2 mb-2 text-sm"
                            />
                        ) : (
                            <span className="font-normal ml-2">{user?.email || "Não disponível"}</span>
                        )}
                    </p>
                    <p className="text-base font-bold text-black">
                        Status
                        <span className={`ml-2 font-normal ${user?.active ? 'text-green-500' : 'text-red-500'}`}>
                        {user?.active ? "Ativo" : "Inativo"}
                    </span>
                    </p>
                </div>
            </div>
        </>
    );
}
