import { BadRequestError } from "@/errors/bad-request";
import { ForbiddenError } from "@/errors/forbidden";
import { UnknownError } from "@/errors/unknown-error";
import { Either, left, right } from "@/lib/either";
import BusinessUser from "@/model/BusinessUser";
import User from "@/model/User";
import { HttpStatusCode } from "axios";
import {parseCookies} from "nookies";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;

export const fetchUsers = async(): Promise<Either<Error, BusinessUser[]>> => {
    const token = parseCookies(undefined)["quixalert.auth.token"];

    if (token === undefined) return left(new BadRequestError("O token não foi enviado"));

    try {
        const response = await fetch(`${baseUrl}/user`, {
            headers: { Authorization: `Bearer ${token}` },
            method: "GET",
        });
      
        if (response.status === HttpStatusCode.Forbidden) {
        return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }
    
        const data = await response.json() as BusinessUser[];
        return right(data);
    } catch (error) {
        return left(new UnknownError("Erro ao buscar usuários"));
    }
}

export const fetchUserById = async(id: string): Promise<Either<Error, BusinessUser>> => {
    const token = parseCookies(undefined)["quixalert.auth.token"];

    if (token === undefined) return left(new BadRequestError("O token não foi enviado"));

    try {
        const response = await fetch(`${baseUrl}/user/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
            method: "GET",
        });
      
        if (response.status === HttpStatusCode.Forbidden) {
        return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }
    
        const data = await response.json() as BusinessUser;
        return right(data);
    } catch (error) {
        return left(new UnknownError("Erro ao buscar o usuário"));
    }
}

