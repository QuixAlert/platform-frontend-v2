import {fetchReport} from "@/api/client/report";

import {transformError} from "@/lib/utils";

import ReportDetail from "@/components/Report/ReportDetail/ReportDetail";

import ReportDetailFetcher from "@/components/Adoption/AdoptionDetail/AdoptionDetail";

export default async function reportDetailFetcher(params: { id: string }) {
  const result = await fetchReport(params.id);
  const {error, value} = result.unpack();

  return (
    <ReportDetail
      report = {value}
      error = {error != undefined ? transformError(error) : undefined}
    />
  );
}