import PersonalDocument from "@/model/PersonalDocument";

export default interface UserFirebase {
    name: string,
    email: string,
    address: string,
    document: string,
    path_picture: string,
    monthly_rent: number,
    id_personal_document: string,
    personal_document: PersonalDocument
}