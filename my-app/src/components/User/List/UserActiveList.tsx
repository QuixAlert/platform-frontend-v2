"use client";

import AdoptionCard from "@/components/Adoption/AdoptionCard/AdoptionCard";
import Adoption from "@/model/Adoption";
import { ErrorName } from "@/errors/error-names";
import errorHandlers from "@/components/Errors/error.handler";
import BusinessUser from "@/model/BusinessUser";
import UserCard from "../Card/UserCard";

type UserActiveListProps = {
    users: BusinessUser[]
}

const UserActiveList = ({
    users
}: UserActiveListProps
) => {
    return (
        <>
            <div className="flex flex-row gap-4 overflow-y-auto">
                {users?.map((user) => (
                    <div className="flex-shrink-0" key={user.id}>
                        <UserCard user={user} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserActiveList;
