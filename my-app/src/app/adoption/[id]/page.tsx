import React, {Suspense} from "react";

import AdoptionDetailFetcher from "@/components/Adoption/AdoptionDetailFetcher";

import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/SideBar/SideBar";

import {Loading} from "@/components/Loading/Loading";


export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <NavBar/>
      <Sidebar/>
      <Suspense fallback={<Loading />}>
        <AdoptionDetailFetcher id={params.id}/>
      </Suspense>
    </>
  )
}
