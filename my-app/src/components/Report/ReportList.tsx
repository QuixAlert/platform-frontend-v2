"use client";

import Report from "@/model/Report";

import { ErrorName } from "@/errors/error-names";
import errorHandlers from "@/components/ui/Errors/error.handler";

import ReportCard from "@/components/Report/ReportCard/ReportCard";


type ReportListProps = {
    reports: Report[] | undefined;
    error: Error | undefined;
};

const RerportList = ({ reports, error }: ReportListProps) => {
    if (error) {
        const ErrorComponent = errorHandlers[error.name as ErrorName];
        return <ErrorComponent error={error} />;
    }

    return (
        <>
            <div className="cards">
                {reports?.map((report) => (
                    <ReportCard key={report.id} report={report} />
                ))}
            </div>
        </>
    );
};

export default RerportList;
