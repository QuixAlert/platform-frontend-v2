import BusinessUser from "@/model/BusinessUser";
import UserMainProfile from "@/components/Profile/UserMainProfile";
import UserCostumerService from "@/components/Profile/UserCostumerService";
import styled from "styled-components";
import UserSpecialty from "@/components/Profile/UserSpecialty";

type UserProfileViewerProps = {
    user: BusinessUser
    userId: string
}

export default function UserProfileViewer({
    user,
    userId
}: UserProfileViewerProps) {
    return (
        <div className="ml-6 mr-2 mt-2 flex justify-center gap-3">
            <UserMainProfile user={user}/>

            <ExtraDetailsSection className="w-1/5 flex flex-col gap-4  mr-2">
                <UserSpecialty
                    userId={userId}
                    specialization={user?.governmentDetails?.specialization}
                    attendedCases={user?.governmentDetails?.attendedCases ? user?.governmentDetails?.attendedCases : 0}
                    solvedCases={user?.governmentDetails?.solvedCases ? user?.governmentDetails?.solvedCases : 0}
                    identificationNumber={user?.governmentDetails?.identificationNumber ? user?.governmentDetails?.identificationNumber : ""}
                />
                <UserCostumerService governmentDetails={user?.governmentDetails}/>
            </ExtraDetailsSection>
        </div>
    )
}

const ExtraDetailsSection = styled.div``