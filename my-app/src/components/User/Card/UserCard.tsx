import React from "react";
import UserInfo from "../UserInfo";
import BusinessUser from "@/model/BusinessUser";

function UserCard({ user }: { user: BusinessUser }) {
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
