import errorHandlers from "@/components/ui/Errors/error.handler";
import { Loading } from "@/components/ui/Loading/Loading";

import { useState, useEffect, useMemo } from "react";
import { fetchUsers } from "@/api/client/users"; // Import fetchUsers function
import UserActiveList from "../List/UsersList";
import { transformError } from "@/lib/utils";
import BusinessUser from "@/model/BusinessUser";
import { ErrorName } from "@/errors/error-names";

type UsersListFetcherProps = {
    loggedUserEmail?: string
    onEdit: (user: BusinessUser) => void
}


const UsersListFetcher = ({
    loggedUserEmail,
    onEdit
}: UsersListFetcherProps) => {
    const [users, setUsers] = useState<BusinessUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchUsers();
            const { error, value: usersData } = result.unpack();
            if (error) {
                const err = error.name ? error.name : transformError(error)
                setError(err);
            } else {
                setUsers(usersData);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    // Memoize the filtering of users
    const { activeUsers, inactiveUsers } = useMemo(() => {
        if (error) return { activeUsers: [], inactiveUsers: [] };
        if (!users) return { activeUsers: [], inactiveUsers: [] };

        const initialFilter = users.filter(user => user.email !== loggedUserEmail);
        const activeUsers = initialFilter.filter(user => user.active);
        const inactiveUsers = initialFilter.filter(user => !user.active);

        return { activeUsers, inactiveUsers };
    }, [users, loggedUserEmail, error]);

    if (isLoading) return <Loading />;

    if (error) {
        const errorTransformed = transformError(error);
        const errorName = errorTransformed.name as ErrorName;
        const ErrorComponent = errorHandlers[errorName];
        return <ErrorComponent error={errorTransformed} />;
    }

    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">Ativos</h2>
            <UserActiveList users={activeUsers} onEdit={onEdit}/>
            <h2 className="text-2xl font-semibold mt-4 mb-6">Não Ativos</h2>
            <UserActiveList users={inactiveUsers} onEdit={onEdit}/>
        </>
    );
};

export default UsersListFetcher;