export type Auth = {
    access_token: string,
    refresh_token: string,
    user: {
        name: string,
        email: string,
        user_id: string
    }
}