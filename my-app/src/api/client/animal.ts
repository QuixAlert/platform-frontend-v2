import {HttpStatusCode} from "axios";

import {cookies} from 'next/headers';

import {logout} from "@/lib/utils";
import {Either, left, right} from "@/lib/either";

import {GenericError} from "@/errors/generic-error";

import Animal from "@/model/Animal";
import AnimalType from "@/model/AnimalType";

import {ForbiddenError} from "@/errors/forbidden";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

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