"use client";

import React, { useState } from "react";
import User from "@/model/User";
import { FloatButton, Tooltip, notification } from "antd";
import UserModal from "./UserModal";
import UserInfo from "./UserInfo";
import { PlusCircleOutlined } from "@ant-design/icons";

function UserCard({ user }: { user: User }) {
    return (
        <>
            <div className="flex w-80 max-h-72 bg-gray-300 rounded-xl text-white border-2">
                <div className="flex-1.5 p-2.5 text-black">
                    <UserInfo user={user} />                    
                </div>
            </div>
        </>
    );
}

export default UserCard;
