import {parseCookies} from "nookies";
import Adoption from "@/model/Adoption";
import {HttpStatusCode} from "axios";
import {logout} from "@/lib/utils";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

export const fetchAdoptions = async (token: string) => {
    try {
        const response = await fetch(`${baseUrl}/adoption`, {
            headers: {Authorization: `Bearer ${token}`},
            method: 'GET'
        })

        if(response.status == HttpStatusCode.Forbidden) logout()

        return await response.json() as Adoption[]
    } catch (e) {
        return [] as Adoption[]
    }
}
export const fetchAdoption = async (token: string, id: string) => {
    try {
        const response = await fetch(`${baseUrl}/adoption/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
            method: 'GET'
        })

        if(response.status == HttpStatusCode.Forbidden) logout()

        return await response.json() as Adoption
    } catch (e) {
        return {} as Adoption
    }
}