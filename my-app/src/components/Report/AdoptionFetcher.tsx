import AdoptionsList from "@/components/Report/AdoptionList";
import {fetchAdoptions} from "@/api/client/adoptions";
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