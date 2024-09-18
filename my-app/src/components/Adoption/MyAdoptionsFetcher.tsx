import AdoptionsList from "@/components/Adoption/AdoptionList";
import {fetchAdoptions} from "@/api/client/adoptions";
import {transformError} from "@/lib/utils";
import Adoption from "@/model/Adoption";


const MyAdoptionsFetcher = async () => {
    const error: Error[] = []
    const adoptions: Adoption[] = []

    if(!(adoptions.length > 0)) return (
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Nenhuma adoção foi associada à você!</p>
    )

    return <AdoptionsList
        adoptions={adoptions}
        error={
            error[0]
        }
    />;
};

export default MyAdoptionsFetcher;