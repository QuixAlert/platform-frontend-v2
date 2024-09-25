import React, {Suspense} from "react";

import AdoptionDetailFetcher from "@/components/Adoption/AdoptionDetailFetcher";
import ReportDetailFetcher from "@/components/Report/ReportDetailFetcher";

import {Loading} from "@/components/ui/Loading/Loading";


export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ReportDetailFetcher id={params.id}/>
      </Suspense>
    </>
  )
}
