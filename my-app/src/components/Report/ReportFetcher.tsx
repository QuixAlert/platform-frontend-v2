import {fetchReports} from "@/api/client/report";

import ReportsList from "@/components/Report/ReportList";
import ReportCard from "@/components/Report/ReportCard/ReportCard";

import Report from "@/model/Report";
import {ErrorS} from "@/model/Error";
import {transformError} from "@/lib/utils";
import reportCard from "@/components/Report/ReportCard/ReportCard";

const repoCard = {
    title: "Lixo depositado incorretamente na rua",
    location: "Rua José Queiroz Pessoa 1812",
    description: "Lixos fedorentos em frente a garagem do seu zé, ao lado da do boteco",
    date: "21/09/2024",
    photo: "https://folhapopular.info/wp-content/uploads/2017/08/2017_08_16_1502905105.jpg",
    possible_solution: "Realizar a retirada dos lixos através de uma equipe especializada",
    status: "Em análise",
    user: {
        name: "Thiago Maia",
        path: "/solicitante.png"
    },
    responsible: {
        name: "João Victor",
        path: "/responsavel.png"
    }
}

const reports = [repoCard, reportCard, reportCard, reportCard, reportCard];

const ReportFetcher = async () => {
    // const result = await fetchReports();
    // const { error, value } = result.unpack()
    //
    // console.log(value)
    //
    return <ReportsList
        reports={reports}
        error={
            //error != undefined ? transformError(error) : undefined
            undefined
        }
    />;
};

export default ReportFetcher;