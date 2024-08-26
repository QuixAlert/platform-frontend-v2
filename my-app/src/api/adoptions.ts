import { HttpStatusCode } from "axios";

import {cookies} from 'next/headers';

import Adoption from "@/model/Adoption";

import { ForbiddenError } from "@/errors/forbidden";
import {GenericError} from "@/errors/generic-error";

import {Either, left, right} from "@/lib/either";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;
export const fetchAdoptions = async (): Promise<Either<Error, Adoption[]>> => {

  const cookieStore = cookies();
  const token = cookieStore.get("quixalert.auth.token")?.value;

  if (token === undefined) return left(new GenericError("O token não foi enviado"));

  try {
    const response = await fetch(`${baseUrl}/adoption`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    });

    if (response.status === HttpStatusCode.Forbidden) {
      return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
    }

    const data = await response.json() as Adoption[];
    console.log(data)
    return right(data);

  } catch (error) {
    return left(new GenericError("Erro ao buscar adoções"));
  }
}


export const fetchAdoption = async (id: string): Promise<Either<Error, Adoption>> => {
  const cookieStore = cookies();
  const token = cookieStore.get("quixalert.auth.token")?.value;

  try {
    const response = await fetch(`${baseUrl}/adoption/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    });

    if (response.status === HttpStatusCode.Forbidden) {
      return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
    }

    return (right(await response.json() as Adoption));
  } catch (e) {
    const error = e as Error;
    return left(new GenericError("Erro ao buscar adoção"));
  }
};