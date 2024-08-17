import AdoptionsList from "@/components/Adoption/AdoptionList";
import {fetchAdoptions} from "@/api/adoptions";
import Adoption from "@/model/Adoption";
import {ErrorS} from "@/model/Error";
import {transformError} from "@/lib/utils";


const AdoptionFetcher = async () => {
    const result = await fetchAdoptions()
    const { error, value } = result.unpack()

    return <AdoptionsList
        adoptions={value}
        error={
            error != undefined ? transformError(error) : undefined
        }
    />;
};

export default AdoptionFetcher;