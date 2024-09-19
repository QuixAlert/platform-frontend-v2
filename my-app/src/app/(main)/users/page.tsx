import UserCard from "@/components/User/UserCard/UserCard";
import Adoption from "@/model/Adoption";
import {Suspense} from "react";
import {Loading} from "@/components/Loading/Loading";
import AdoptionFetcher from "@/components/Adoption/AdoptionFetcher";

export default function UsersPage() {

    return (
        <>
            <div className="w-full h-full pt-10 pl-12 text-white">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">Usuários</h1>
                </div>

                <h2 className="text-2xl font-semibold mb-6">Ativos</h2>

                <UserCard user={null}/>

                <h2 className="text-2xl font-semibold mt-4 mb-6">Não Ativos</h2>

                <UserCard user={null}/>
            </div>
        </>
    );
}
