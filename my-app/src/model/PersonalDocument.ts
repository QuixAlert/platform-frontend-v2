import UserFirebase from "@/model/UserFirebase";

export default interface PersonalDocument {
    id_user: string,
    cpf: string,
    cnpj: string,
    user: UserFirebase
}