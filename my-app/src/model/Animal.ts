import UserFirebase from "@/model/UserFirebase";
import AnimalType from "@/model/AnimalType";

export default interface Animal {
    id: string,
    name: string,
    status: string,
    creation_date: string,
    id_animal_type: string,
    age: number,
    gender: string,
    description: string,
    size: string,
    photo: string,
    address: string,
    breed: string,
    id_register_user: string,
    animal_type: AnimalType,
    register_user: UserFirebase
}