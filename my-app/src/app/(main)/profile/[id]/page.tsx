"use client";

import {Suspense} from "react";
import {Loading} from "@/components/ui/Loading/Loading";
import UserProfileFetcher from "@/components/Profile/UserProfileFetcher";

type params = {
    id: string
}

export default function Profile({
    params
}: { params: params }) {

    return (
        <Suspense fallback={<Loading />}>
            <UserProfileFetcher id={params.id} />
        </Suspense>
    );
}
