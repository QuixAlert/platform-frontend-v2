import { UnknownError } from "@/errors/unknown-error";
import { LoginError } from "@/errors/login";
import { Either, right, left } from "@/lib/either";
import { Auth } from "@/model/Auth";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

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
