import {parseCookies} from "nookies";
import Adoption from "@/model/Adoption";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

export const fetchAdoptions = async (token: string) => {
    try {
        console.log(token)
        const response = await fetch(`${baseUrl}/adoption`, {
            headers: {Authorization: `Bearer ${token}`},
            method: 'GET'
        })
        return await response.json() as Adoption[]
    } catch (e) {
        return [] as Adoption[]
    }
}
export const fetchAdoption = async (token: string, id: string) => {
    try {
        console.log(token)
        const response = await fetch(`${baseUrl}/adoption/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
            method: 'GET'
        })
        return await response.json() as Adoption
    } catch (e) {
        return {} as Adoption
    }
}