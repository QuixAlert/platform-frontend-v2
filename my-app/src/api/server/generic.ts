import {toBase64} from "@/lib/utils";
import {Either, left, right} from "@/lib/either";
import {UnknownError} from "@/errors/unknown-error";
import {parseCookies} from "nookies";
import 'dotenv/config'

const baseUrl = 'http://localhost:8080/api/v1'

type ImageLink = {
    urlPicture: string
}

export const addImageOnFirebase = async (token: string, image: File): Promise<Either<Error, ImageLink>> => {
    try {
        const imageBase64Content = await toBase64(image);

        const response = await fetch(`${baseUrl}/animals/picture`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify({
                "base64Content": imageBase64Content
            })
        })
        if (!response.ok) return left(new UnknownError(`Não foi possível adicionar a imagem no firebase`))

        const imageLink = await response.json() as ImageLink
        return right(imageLink)
    } catch (e) {
        const error = e as Error
        return left(new UnknownError(`Ocorreu um erro inesperado:  ${error.name}. ${error.message}`))
    }
}

export const addImageOnFirebaseWithBase64 = async (imageBase64: string): Promise<Either<Error, ImageLink>> => {
    try {
        const token = parseCookies(undefined)["quixalert.auth.token"];

        const response = await fetch(`${baseUrl}/animals/picture`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify({
                "base64Content": imageBase64
            })
        })
        if (!response.ok) return left(new UnknownError(`Não foi possível adicionar a imagem no firebase`))

        const imageLink = await response.json() as ImageLink
        return right(imageLink)
    } catch (e) {
        const error = e as Error
        return left(new UnknownError(`Ocorreu um erro inesperado:  ${error.name}. ${error.message}`))
    }
}