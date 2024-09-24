import {getUserProfile} from "@/api/client/profile";
import {transformError} from "@/lib/utils";
import {ErrorName} from "@/errors/error-names";
import errorHandlers from "@/components/ui/Errors/error.handler";
import UserProfileViewer from "@/components/Profile/UserProfileViewer";

type UserProfileFetcherProps = {
    id: string
}

export default async function UserProfileFetcher({
    id
}: UserProfileFetcherProps){
    const result = await getUserProfile(id);
    const { error: apiError, value: user } = result.unpack();

    if (apiError) {
        const errorTransformed = transformError(apiError);
        const errorName = errorTransformed.name as ErrorName;
        const ErrorComponent = errorHandlers[errorName];
        return <ErrorComponent error={errorTransformed} />;
    }
    return (
        <UserProfileViewer user={user} userId={id}/>
    )
}