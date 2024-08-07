import Animal from "@/model/Animal";
import UserFirebase from "@/model/UserFirebase";
import StatusAdoption from "@/model/StatusAdoption";

export default interface Adoption {
    id: string,
    animal_id: string;
    animal_description: string,
    house_description: string,
    id_user: string,
    status_adoption_id: string,
    motivation: string,
    animal: Animal,
    user: UserFirebase,
    status_adoption: StatusAdoption
}