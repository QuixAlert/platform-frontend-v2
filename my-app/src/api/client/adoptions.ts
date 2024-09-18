import { HttpStatusCode } from "axios";

import {cookies} from 'next/headers';

import Adoption from "@/model/Adoption";

import { ForbiddenError } from "@/errors/forbidden";
import {UnknownError} from "@/errors/unknown-error";


import {Either, left, right} from "@/lib/either";
import {BadRequestError} from "@/errors/bad-request";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;
export const fetchAdoptions = async (): Promise<Either<Error, Adoption[]>> => {

  const cookieStore = cookies();
  const token = cookieStore.get("quixalert.auth.token")?.value;

  if (token === undefined) return left(new BadRequestError("O token não foi enviado"));

  try {
    const response = await fetch(`${baseUrl}/adoption`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    });

    if (response.status === HttpStatusCode.Forbidden) {
      return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
    }

    const data = await response.json() as Adoption[];
    return right(data);

  } catch (error) {
    return left(new UnknownError("Erro ao buscar adoções"));
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
    return left(new UnknownError("Erro ao buscar adoção"));
  }
};