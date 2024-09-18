import User from "@/model/User";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface userInfoState {
    user: User | undefined
    isLogged: boolean
    setUser: (user: User) => void
    setIsLogged: (isLogged: boolean) => void
    resetUser: () => void
}

export const userInfoStore = create<userInfoState>()(
    persist((set) => ({
        user: undefined,
        isLogged: false,
        setUser: (user: User) => set(state => ({user})),
        setIsLogged: (isLogged: boolean) => set({isLogged}),
        resetUser: () => set({isLogged: false, user: undefined}),
    }), {name: 'user-store'})
)