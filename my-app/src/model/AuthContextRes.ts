import { Auth } from "./Auth"

export type AuthContextRes = {
    token: Auth | undefined
    error: Error | undefined
}