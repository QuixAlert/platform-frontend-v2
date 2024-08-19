"use client"

import React from "react";

import {useRouter} from "next/navigation";

export default function NeedHelpBtn() {
  const router = useRouter();

  return (
    <button className="button" onClick={() => {router.push("/help")}}>Preciso de Ajuda</button>
  )
}