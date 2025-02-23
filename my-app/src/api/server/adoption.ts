import { Either, left, right} from "@/lib/either";
import { UnknownError } from "@/errors/unknown-error";
import { parseCookies } from "nookies";
import Adoption from "@/model/Adoption";
import { HttpStatusCode } from "axios";
import { ForbiddenError } from "@/errors/forbidden";
import { BadRequestError } from "@/errors/bad-request";
import 'dotenv/config'

const baseUrl = 'http://localhost:8080/api/v1'

export const fetchAdoptions = async (): Promise<Either<Error, Adoption[]>> => {
  const token = parseCookies(undefined)["quixalert.auth.token"];

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

export const linkAdoption = async (id: string, idUser: string): Promise<Either<Error, Adoption>> => {
  const token = parseCookies(undefined)["quixalert.auth.token"];

  try {
    const response = await fetch(`${baseUrl}/adoption/${id}/link/user/${idUser}`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "PUT",
    });

    if (response.status === HttpStatusCode.Forbidden) {
      return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
    }

    return (right(await response.json() as Adoption));
  } catch (e) {
    const error = e as Error;
    return left(new UnknownError("Erro ao associar adoção"));
  }
}

export const unlinkAdoption = async (id: string): Promise<Either<Error, Adoption>> => {
  const token = parseCookies(undefined)["quixalert.auth.token"];

  try {
    const response = await fetch(`${baseUrl}/adoption/${id}/unlink/user`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "PUT",
    });

    if (response.status === HttpStatusCode.Forbidden) {
      return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
    }

    return right(await response.json() as Adoption);
  } catch (e) {
    const error = e as Error;
    return left(new UnknownError("Erro ao dessociar adoção"));
  }
}