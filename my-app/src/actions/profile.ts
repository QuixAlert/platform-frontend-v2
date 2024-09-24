'use server'

import GovernmentDetails from "@/model/GovernmentDetails";
import {updateUserProfile} from "@/api/client/profile";
import BusinessUser from "@/model/BusinessUser";
import {cookies} from "next/headers";

export const updateUserSpecialty = async (businessUser: BusinessUser, id: string) => {
    const cookieStore = cookies()
    const token = cookieStore.get("quixalert.auth.token") || ''

    const result = await updateUserProfile(businessUser, id, token)
    const {error, value} = result.unpack()

    return !error;
};