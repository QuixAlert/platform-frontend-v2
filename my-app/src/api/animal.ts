import Animal from "@/model/Animal";
import {HttpStatusCode} from "axios";
import {logout} from "@/lib/utils";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

export const fetchAnimals = async (token: string) => {
    try {
        const response = await fetch(`${baseUrl}/animals`, {
            headers: {Authorization: `Bearer ${token}`},
            method: 'GET'
        })

        if(response.status == HttpStatusCode.Forbidden) logout()

        return await response.json() as Animal[]
    } catch (e) {
        return [] as Animal[]
    }
}