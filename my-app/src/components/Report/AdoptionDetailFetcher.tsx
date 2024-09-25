import {fetchAdoption} from "@/api/client/adoptions";

import {transformError} from "@/lib/utils";

import AdoptionDetail from "@/components/Adoption/AdoptionDetail/AdoptionDetail";

export default async function adoptionDetailFetcher(params: { id: string }) {
  const result = await fetchAdoption(params.id);
  const {error, value} = result.unpack();

  return (
    <AdoptionDetail
      adoption = {value}
      error = {error != undefined ? transformError(error) : undefined}
    />
  );
}