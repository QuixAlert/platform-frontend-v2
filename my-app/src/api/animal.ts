import {HttpStatusCode} from "axios";

import {cookies} from 'next/headers';

import {logout} from "@/lib/utils";
import {Either, left, right} from "@/lib/either";

import {GenericError} from "@/errors/generic-error";

import Animal from "@/model/Animal";
import AnimalType from "@/model/AnimalType";

import {ForbiddenError} from "@/errors/forbidden";
import Adoption from "@/model/Adoption";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

function convertAnimalType(type: string): string {
    if (type === "Dog") {
        return "-O3_Po8z51gd7qsdcQC-";
    }
    return "-O3_PvYNQ2-GIJj19tJf";
}

export const getAnimalTypeById = async (animalTypeId: string): Promise<Either<Error, AnimalType>> => {
    const cookieStore = cookies();
    const token = cookieStore.get("quixalert.auth.token")?.value;

    if (token === undefined) return left(new GenericError("O token não foi enviado"));

    try {
        const response = await fetch(`${baseUrl}/animal_type/${animalTypeId}`, {
            headers: {Authorization: `Bearer ${token}`},
            method: 'GET'
        })

        if (response.status === HttpStatusCode.Forbidden) {
            return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }

        return right(await response.json() as AnimalType);
    } catch (e) {
        const error: Error = e as Error;
        return left(error);
    }
}

export const fetchAnimals = async (): Promise<Either<Error, Animal[]>> => {
    const cookieStore = cookies();
    const token = cookieStore.get("quixalert.auth.token")?.value;

    if (token === undefined) return left(new GenericError("O token não foi enviado"));

    try {
        const response = await fetch(`${baseUrl}/animals`, {
            headers: {Authorization: `Bearer ${token}`},
            method: 'GET'
        })

        if(response.status == HttpStatusCode.Forbidden) {
            return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }

        const data: Animal[] = await response.json();
        return right(data);
    } catch (e) {
        return left(new GenericError("Erro ao buscar animais"));
    }
}

export const addAnimal = async (token: string, animal: Animal) => {
    try {
        const response = await fetch(`${baseUrl}/animals`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            method: 'POST',
            body: JSON.stringify({
                "name": animal.name,
                "id_animal_type": convertAnimalType(animal.type),
                "animal_type": {
                    "id": convertAnimalType(animal.type),
                    "type": animal.type,
                },
                "age": animal.age,
                "gender": animal.gender,
                "description": animal.description,
                "size": animal.size || "Small",
                "photo": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
                "address": "1234 Elm Street",
                "breed": animal.breed,
                "id_register_user": "-O3dGtS2S5Y7AeL4jww6"
            })
        })

        return await response.json() as Animal
    } catch (e) {
        const error = e as Error;
        throw new Error(`HTTP error! status: ${error.message}`);
    }
}