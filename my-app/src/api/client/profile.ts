import {Either, left, right} from "@/lib/either";
import BusinessUser from "@/model/BusinessUser";
import {parseCookies} from "nookies";
import {BadRequestError} from "@/errors/bad-request";
import {HttpStatusCode} from "axios";
import {ForbiddenError} from "@/errors/forbidden";
import {UnknownError} from "@/errors/unknown-error";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

export const updateUserProfile = async(user: BusinessUser, id: string, helpToken: RequestCookie | string): Promise<Either<Error, BusinessUser>> => {
    let token = parseCookies(undefined)["quixalert.auth.token"];

    if(helpToken) token = typeof helpToken === "string" ? helpToken : helpToken.value;

    if (token === undefined) return left(new BadRequestError("O token não foi enviado"));

    try {
        const reqBody = JSON.stringify(user)
        const response = await fetch(`${baseUrl}/user/update/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },

            method: "POST",
            body: JSON.stringify(user),
        });

        console.log(reqBody)

        if (response.status === HttpStatusCode.Forbidden) {
            return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }

        const data = await response.json() as BusinessUser;
        return right(data);
    } catch (error) {
        return left(new UnknownError("Erro ao atualizar os dados do usuário"));
    }
}


export const getUserProfile = async(id: string): Promise<Either<Error, BusinessUser>> => {
    const token = parseCookies(undefined)["quixalert.auth.token"];

    if (token === undefined) return left(new BadRequestError("O token não foi enviado"));

    try {
        const response = await fetch(`${baseUrl}/user/${id}`, {
            next: {
                revalidate: 3600
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },

            method: "GET",
        });

        if (response.status === HttpStatusCode.Forbidden) {
            return left(new ForbiddenError("Token inválido, para continuar você precisa fazer o login novamente."));
        }

        const data = await response.json() as BusinessUser;
        return right(data);
    } catch (error) {
        return left(new UnknownError("Erro ao buscar os dados do usuário"));
    }
}
