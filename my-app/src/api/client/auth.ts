import { UnknownError } from "@/errors/unknown-error";
import { LoginError } from "@/errors/login";
import { Either, right, left } from "@/lib/either";
import { Auth } from "@/model/Auth";
import BusinessUser from "@/model/BusinessUser";
import { parseCookies } from "nookies";
import { BadRequestError } from "@/errors/bad-request";
import { HttpStatusCode } from "axios";
import { ForbiddenError } from "@/errors/forbidden";
import 'dotenv/config'


const baseUrl = 'http://localhost:8080/api/v1'

export const fetchLogin = async (email: string, password: string): Promise<Either<Error, Auth>> => {
    try {
        const response = await fetch(`${baseUrl}/auth/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) return left(new LoginError(`Email ou senha incorretos!`))

        const token = await response.json() as Auth
        return right(token)
    } catch (e) {
        const error = e as Error
        return left(new UnknownError(`Ocorreu um erro inesperado:  ${error.name}`))
    }
};


export const doRegistration = async(user: BusinessUser): Promise<Either<Error, BusinessUser>> => {
    try {
        const response = await fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.status !== HttpStatusCode.Ok) {
            return left(new UnknownError("Não foi possível realizar o cadastro do usuário"));
        }

        const data = await response.json() as BusinessUser;
        return right(data);
    } catch (error) {
        return left(new UnknownError("Erro ao cadastrar usuário"));
    }
}