import SpecializationBusiness from "./SpecializationBusiness"

export default interface GovernmentDetails {
    attendedCases: number
    solvedCases: number
    identificationNumber: string
    specialization: SpecializationBusiness
}