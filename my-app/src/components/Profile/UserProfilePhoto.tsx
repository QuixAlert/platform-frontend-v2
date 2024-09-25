import Image from "next/image";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import React, { Dispatch, SetStateAction, useState } from "react";
import { notification, Tooltip } from "antd";
import ColorButton from "@/components/Button/ColorButton";
import { toBase64 } from "@/lib/utils";
import { NotificationType, showNotification } from "@/components/Notification/Notification";

type UserProfilePhotoProps = {
    isEditing: boolean;
    photoUrl?: string;
    setPhotoBase64: Dispatch<SetStateAction<string | null>>;
    className?: string; // Add className prop
};

export default function UserProfilePhoto({ isEditing, photoUrl, setPhotoBase64, className }: UserProfilePhotoProps) {
    const [fileInputKey, setFileInputKey] = useState(Date.now());
    const [previewPhotoUrl, setPreviewPhotoUrl] = useState<string | undefined>(undefined);
    const [api, contextHolder] = notification.useNotification();

    const handleImageDeletion = () => {
        setPhotoBase64(null);
        setPreviewPhotoUrl(undefined);
        showNotification({
            message: "Imagem Removida",
            description: "A sua imagem foi removida mas é necessário clicar em salvar para persistir a modificação",
            type: NotificationType.ALERT,
        }, api);
    };

    const handleImageUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64String = await toBase64(file);
            const newPhotoUrl = `data:image/png;base64,${base64String}`;
            setPhotoBase64(base64String);
            setPreviewPhotoUrl(newPhotoUrl);
            showNotification({
                message: "Imagem Carregada",
                description: "A sua imagem foi carregada mas é necessário clicar em salvar para fazer o upload",
                type: NotificationType.ALERT,
            }, api);
            setFileInputKey(Date.now());
        }
    };

    const isDeleteDisabled = !photoUrl && !previewPhotoUrl;

    return (
        <>
            {contextHolder}
            <div className={`w-40 h-40 rounded-full overflow-hidden border-8 border-white ${className}`}>
                <Image
                    className={`transition-opacity duration-300 ${isEditing ? 'hover:opacity-75' : ''}`}
                    alt="User Photo"
                    src={previewPhotoUrl || photoUrl || "/user-default.jpg"}
                    layout="fill"
                    objectFit="cover"
                />

                {isEditing && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                            {previewPhotoUrl || photoUrl ? (
                                // Show edit button if there's a photo
                                <Tooltip title="Atualizar foto">
                                    <ColorButton
                                        icon={<EditOutlined style={{ color: 'white' }} />}
                                        bgColor="#269996"
                                        type="primary"
                                        onClick={() => document.getElementById('file-input')?.click()}
                                    />
                                </Tooltip>
                            ) : (
                                // Show plus button if there's no photo
                                <Tooltip title="Adicionar foto">
                                    <ColorButton
                                        icon={<PlusOutlined style={{ color: 'white' }} />}
                                        bgColor="#269996"
                                        type="primary"
                                        onClick={() => document.getElementById('file-input')?.click()}
                                    />
                                </Tooltip>
                            )}
                            <input
                                type="file"
                                id="file-input"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageUpdate}
                                key={fileInputKey}
                            />
                            {/* Conditionally render the Tooltip based on the delete button's state */}
                            {isDeleteDisabled ? (
                                <ColorButton
                                    danger
                                    icon={<DeleteOutlined style={{ color: 'white' }} />}
                                    bgColor="#269996"
                                    type="primary"
                                    onClick={handleImageDeletion}
                                    disabled={isDeleteDisabled}
                                />
                            ) : (
                                <Tooltip title="Remover foto">
                                    <ColorButton
                                        danger
                                        icon={<DeleteOutlined style={{ color: 'white' }} />}
                                        bgColor="#269996"
                                        type="primary"
                                        onClick={handleImageDeletion}
                                        disabled={isDeleteDisabled}
                                    />
                                </Tooltip>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
