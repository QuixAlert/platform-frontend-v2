import User from "@/model/User";
import {create} from "zustand";
import {persist} from "zustand/middleware";
import BusinessUser from "@/model/BusinessUser";

interface userInfoState {
    user: BusinessUser | undefined
    isLogged: boolean
    setUser: (user: BusinessUser) => void
    setIsLogged: (isLogged: boolean) => void
    resetUser: () => void
}

export const userInfoStore = create<userInfoState>()(
    persist((set) => ({
        user: undefined,
        isLogged: false,
        setUser: (user: BusinessUser) => set(state => ({user})),
        setIsLogged: (isLogged: boolean) => set({isLogged}),
        resetUser: () => set({isLogged: false, user: undefined}),
    }), {name: 'user-store'})
)