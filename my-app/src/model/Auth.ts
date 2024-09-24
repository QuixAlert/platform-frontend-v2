import BusinessUser from "@/model/BusinessUser";

export type Auth = {
    access_token: string,
    refresh_token: string,
    user: BusinessUser
}