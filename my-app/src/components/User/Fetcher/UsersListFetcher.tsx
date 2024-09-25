import errorHandlers from "@/components/ui/Errors/error.handler";
import { Loading } from "@/components/ui/Loading/Loading";
import { useState, useEffect, useMemo } from "react";
import { fetchUsers } from "@/api/client/users";
import UserActiveList from "../List/UsersList";
import { transformError } from "@/lib/utils";
import BusinessUser from "@/model/BusinessUser";
import { ErrorName } from "@/errors/error-names";

type UsersListFetcherProps = {
    loggedUserEmail?: string;
    onEdit: (user: BusinessUser) => void;
};

type ErrorState = {
  name: string;
  message: string;
  stack?: string;
} | null;

const UsersListFetcher = ({ loggedUserEmail, onEdit }: UsersListFetcherProps) => {
    const [users, setUsers] = useState<BusinessUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<ErrorState>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchUsers();
                const { error, value: usersData } = result.unpack();
                if (error) {
                    const transformedError = transformError(error);
                    setError(transformedError);
                } else {
                    setUsers(usersData);
                }
            } catch (err) {
                const transformedError = transformError(err as Error);
                setError(transformedError);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const { activeUsers, inactiveUsers } = useMemo(() => {
        if (error) return { activeUsers: [], inactiveUsers: [] };
        if (!users) return { activeUsers: [], inactiveUsers: [] };

        const initialFilter = users.filter((user) => user.email !== loggedUserEmail);
        const activeUsers = initialFilter.filter((user) => user.active);
        const inactiveUsers = initialFilter.filter((user) => !user.active);

        return { activeUsers, inactiveUsers };
    }, [users, loggedUserEmail, error]);

    if (isLoading) return <Loading />;

    if (error) {
        const errorName = error.name as ErrorName;
        const ErrorComponent = errorHandlers[errorName];
        return <ErrorComponent error={error} />;
    }

    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">Ativos</h2>
            <UserActiveList users={activeUsers} onEdit={onEdit} />
            <h2 className="text-2xl font-semibold mt-4 mb-6">Não Ativos</h2>
            <UserActiveList users={inactiveUsers} onEdit={onEdit} />
        </>
    );
};

export default UsersListFetcher;
