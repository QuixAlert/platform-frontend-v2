import Adoption from "@/model/Adoption";
import { HttpStatusCode } from "axios";
import { ForbiddenError } from "@/errors/forbidden";
import {cookies} from 'next/headers';
import { EmptyResponseError } from "@/errors/empty-response";
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


export const fetchAdoption = async (token: string, id: string): Promise<Adoption> => {
  try {
    const response = await fetch(`${baseUrl}/adoption/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    });

    return (await response.json()) as Adoption;
  } catch (e) {
    return {} as Adoption;
  }
};