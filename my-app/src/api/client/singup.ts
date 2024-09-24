import { BadRequestError } from "@/errors/bad-request";
import { ForbiddenError } from "@/errors/forbidden";
import { UnknownError } from "@/errors/unknown-error";
import { Either, left, right } from "@/lib/either";
import { Invitation } from "@/model/Invitation";
import { HttpStatusCode } from "axios";
import { parseCookies } from "nookies";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

export const sendEnvite = async(email: string): Promise<Either<Error, undefined>> => {
    let token = parseCookies(undefined)["quixalert.auth.token"];

    if (token === undefined) return left(new BadRequestError("O token não foi enviado"));

    try {
        const response = await fetch(`${baseUrl}/invitations/send`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },

            method: "POST",
            body: JSON.stringify({
                email
            }),
        });

        if (response.status === HttpStatusCode.Forbidden) {
            return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }

        if (response.status !== HttpStatusCode.Created) {
            return left(new UnknownError("Erro ao criar o convite!"));
        }

        return right(undefined);
    } catch (error) {
        return left(new UnknownError("Erro ao atualizar os dados do usuário"));
    }
}

export const validateInvite = async(inviteId: string, inviteCode: string): Promise<Either<Error, undefined>> => {
    let token = parseCookies(undefined)["quixalert.auth.token"];

    if (token === undefined) return left(new BadRequestError("O token não foi enviado"));

    try {
        const response = await fetch(`${baseUrl}/invitations/accept/${inviteId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },

            method: "POST",
            body: JSON.stringify({
                inviteCode
            }),
        });

        if (response.status === HttpStatusCode.Forbidden) {
            return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }

        if (response.status !== HttpStatusCode.Ok) {
            return left(new UnknownError("Erro ao validar o convite!"));
        }

        return right(undefined);
    } catch (error) {
        return left(new UnknownError("Erro ao atualizar os dados do usuário"));
    }
}


export const listInvites = async(): Promise<Either<Error, Invitation[]>> => {
    let token = parseCookies(undefined)["quixalert.auth.token"];

    if (token === undefined) return left(new BadRequestError("O token não foi enviado"));

    try {
        const response = await fetch(`${baseUrl}/invitations`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "GET"
        });

        if (response.status === HttpStatusCode.Forbidden) {
            return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }

        const data = await response.json() as Invitation[];
        return right(data);
    } catch (error) {
        return left(new UnknownError("Erro ao atualizar trazer os convites"));
    }
}