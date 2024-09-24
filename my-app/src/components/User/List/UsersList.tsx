"use client";

import BusinessUser from "@/model/BusinessUser";
import UserCard from "../Card/UserCard";

type UsersListProps = {
    users: BusinessUser[]
    onEdit: (user: BusinessUser) => void
}

const UsersList = ({
    users,
    onEdit
}: UsersListProps
) => {
    return (
        <>
            <div className="flex flex-row gap-4 overflow-y-auto">
                {users?.map((user) => (
                    <div className="flex-shrink-0" key={user.id}>
                        <UserCard user={user} onEdit={onEdit}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UsersList;
