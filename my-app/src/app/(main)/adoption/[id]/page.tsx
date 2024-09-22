import React, {Suspense} from "react";

import AdoptionDetailFetcher from "@/components/Adoption/AdoptionDetailFetcher";

import {Loading} from "@/components/ui/Loading/Loading";


export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <AdoptionDetailFetcher id={params.id}/>
      </Suspense>
    </>
  )
}
