import {toBase64} from "@/lib/utils";
import {Either, left, right} from "@/lib/either";
import {UnknownError} from "@/errors/unknown-error";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

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