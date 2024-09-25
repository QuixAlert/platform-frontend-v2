import AdoptionsList from "@/components/Adoption/AdoptionList";
import { fetchAdoptions } from "@/api/server/adoption";
import { transformError } from "@/lib/utils";
import { Space } from "antd";

type AdoptionsFetcherProps = {
    loggedUserId: string;
};

const AdoptionsFetcher = async ({ loggedUserId }: AdoptionsFetcherProps) => {
    const result = await fetchAdoptions();
    const { error, value } = result.unpack();

    console.log(value)

    // if (error) {
    //     return <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">{
    //         transformError(error)}</p>;
    // }

    // Filter adoptions
    const myAdoptions = value?.filter(adoption => adoption.user_requester?.id === loggedUserId) || [];
    const allAdoptions = value?.filter(adoption => adoption.user_requester?.id !== loggedUserId) || [];

    // Render My Adoptions
    const myAdoptionsMessage = myAdoptions.length > 0 
        ? <AdoptionsList adoptions={myAdoptions} error={error}/>
        : <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Nenhuma adoção foi associada à você!</p>;

    // Render All Adoptions
    const allAdoptionsMessage = allAdoptions.length > 0 
        ? <AdoptionsList adoptions={allAdoptions} error={error}/>
        : <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Nenhuma adoção foi cadastrada!</p>;

    return (
        <>
            <h2 className="text-2xl font-semibold text-white mb-6">Minhas Adoções</h2>
            {myAdoptionsMessage}

            <Space />

            <h2 className="text-2xl font-semibold text-white mt-10 mb-6">Todas as Adoções</h2>
            {allAdoptionsMessage}
        </>
    );
};

export default AdoptionsFetcher;
