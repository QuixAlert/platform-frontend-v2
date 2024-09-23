import ReportsList from "@/components/Report/ReportList";
import {fetchAdoptions} from "@/api/client/adoptions";
import Adoption from "@/model/Adoption";
import {ErrorS} from "@/model/Error";
import {transformError} from "@/lib/utils";


const ReportFetcher = async () => {
    const result = await fetchAdoptions()
    const { error, value } = result.unpack()
    console.log("AAAAAAA")
    console.log(value)

    return <ReportsList
        adoptions={value}
        error={
            error != undefined ? transformError(error) : undefined
        }
    />;
};

export default ReportFetcher;