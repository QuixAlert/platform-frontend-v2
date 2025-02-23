import { HttpStatusCode } from "axios";

import {cookies} from 'next/headers';

import Report from "@/model/Report";

import { ForbiddenError } from "@/errors/forbidden";
import {UnknownError} from "@/errors/unknown-error";
import {BadRequestError} from "@/errors/bad-request";

import {Either, left, right} from "@/lib/either";

import 'dotenv/config'


const baseUrl = 'http://localhost:8080/api/v1'

export const fetchReports = async (): Promise<Either<Error, Report[]>> => {
  const cookieStore = cookies();
  const token = cookies().get("quixalert.auth.token")?.value;

  if (token === undefined) {
    return left(new BadRequestError("O token não foi enviado"));
  }

  try {
    const response = await fetch(`${baseUrl}/reports`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    });

    if (response.status === HttpStatusCode.Forbidden) {
      return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
    }

    const data = await response.json() as Report[];
    return right(data);

  } catch (error) {
    return left(new UnknownError("Erro ao buscar denúncias."));
  }
}

export const fetchReport = async (id: string): Promise<Either<Error, Report>> => {
  const cookieStore = cookies();
  const token = cookieStore.get("quixalert.auth.token")?.value;

  try {
    const response = await fetch(`${baseUrl}/reports/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    });

    if (response.status === HttpStatusCode.Forbidden) {
      return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
    }

    return (right(await response.json() as Report));
  } catch (e) {
    const error = e as Error;
    return left(new UnknownError("Erro ao buscar denúncia."));
  }
};