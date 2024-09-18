import AdoptionsList from "@/components/Adoption/AdoptionList";
import {fetchAdoptions} from "@/api/client/adoptions";
import {transformError} from "@/lib/utils";


const AllAdoptionsFetcher = async () => {
    const result = await fetchAdoptions()
    const { error, value } = result.unpack()

    return <AdoptionsList
        adoptions={value}
        error={
            error != undefined ? transformError(error) : undefined
        }
    />;
};

export default AllAdoptionsFetcher;