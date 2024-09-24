import React from "react";
import UserInfo from "../UserInfo";
import BusinessUser from "@/model/BusinessUser";

import { useState } from 'react';
import ColorButton from "@/components/Button/ColorButton";
import { EditOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

type UserCardProps = {
    user: BusinessUser
    onEdit: (user: BusinessUser) => void
}

function UserCard({
    user,
    onEdit
}: UserCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative flex w-80 max-h-72 bg-gray-300 rounded-xl text-white border-2 transition-opacity duration-200 ${isHovered ? 'opacity-60' : 'opacity-100'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex-1.5 p-2.5 text-black">
                <UserInfo user={user} />
            </div>
            {isHovered && (
                <Tooltip title="Editar status do usuário">
                    <ColorButton 
                    className="absolute top-1 right-2 p-1 bg-pgreen text-white rounded hover:bg-pgreetwo"
                    bgColor="#269996"
                    type="primary"
                    onClick={() => onEdit(user)}
                    icon={<EditOutlined />}
                />
                </Tooltip>
            )}
        </div>
    );
}

export default UserCard;

