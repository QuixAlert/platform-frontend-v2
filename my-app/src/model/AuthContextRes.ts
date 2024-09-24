import { Auth } from "./Auth"

export type AuthContextRes = {
    data: Auth | undefined
    error: Error | undefined
}