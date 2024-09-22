import { ErrorName } from "@/errors/error-names";
import { transformError } from "@/lib/utils";
import UserActiveList from "../List/UserActiveList";
import UserInactiveList from "../List/UserInactiveList";
import { fetchUsers } from "@/api/client/users";
import errorHandlers from "@/components/ui/Errors/error.handler";

export async function UsersListFetcher(){
    const result = await fetchUsers()
    const { error, value: users } = result.unpack()

    if (error) {
        const errorTransformed = transformError(error)
        const errorName = errorTransformed.name as ErrorName
        const ErrorComponent = errorHandlers[errorName];
        return <ErrorComponent error={error} />;
    }

    const activeUsers = users.filter(user => user.active)
    const inactiveUsers = users.filter(user => !user.active)

    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">Ativos</h2>

            <UserActiveList users={activeUsers}/>

            <h2 className="text-2xl font-semibold mt-4 mb-6">Não Ativos</h2>

            <UserInactiveList users={inactiveUsers}/>
        </>
    )
}