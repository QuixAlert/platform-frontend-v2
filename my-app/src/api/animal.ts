import {parseCookies} from "nookies";
import Adoption from "@/model/Adoption";
import Animal from "@/model/Animal";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

export const fetchAnimals = async (token: string) => {
    try {
        console.log(token)
        const response = await fetch(`${baseUrl}/animals`, {
            headers: {Authorization: `Bearer ${token}`},
            method: 'GET'
        })
        return await response.json() as Animal[]
    } catch (e) {
        return [] as Animal[]
    }
}