"use client";

import { useEffect, useRef } from "react";
import AdoptionCard from "@/components/Adoption/AdoptionCard/AdoptionCard";
import Adoption from "@/model/Adoption";
import { ErrorName } from "@/errors/error-names";
import Forbidden from "@/components/Errors/Forbidden";
import { useRouter } from "next/navigation";

type AdoptionsListProps = {
    adoptions: Adoption[] | undefined;
    error: Error | undefined;
};

const AdoptionsList = ({ adoptions, error }: AdoptionsListProps) => {
    const router = useRouter();
    const modalShownRef = useRef(false);

    useEffect(() => {
        if (error && !modalShownRef.current) {
            if (error.name === ErrorName.FORBIDDEN) {
                modalShownRef.current = true;
                // Forbidden({ error, onOk: () => {
                //         destroyCookie(undefined, "quixalert.auth.token");
                //         router.replace("/");
                //     } });
            }
        }
    }, [error, router]);

    return (
        <>
            <div className="cards">
                {adoptions?.map((adoption) => (
                    <AdoptionCard key={adoption.id} adoption={adoption} />
                ))}
            </div>
        </>
    );
};

export default AdoptionsList;
