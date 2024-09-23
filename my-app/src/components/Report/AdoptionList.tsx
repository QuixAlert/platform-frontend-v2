"use client";

import AdoptionCard from "@/components/Report/ReportCard/ReportCard";
import Adoption from "@/model/Adoption";
import { ErrorName } from "@/errors/error-names";
import errorHandlers from "@/components/ui/Errors/error.handler";

type AdoptionsListProps = {
    adoptions: Adoption[] | undefined;
    error: Error | undefined;
};

const AdoptionsList = ({ adoptions, error }: AdoptionsListProps) => {
    if (error) {
        const ErrorComponent = errorHandlers[error.name as ErrorName];
        return <ErrorComponent error={error} />;
    }

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
