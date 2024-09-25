import React from "react";
import Image from "next/image";
import Label from "@/components/Label/Label";
import BusinessUser from "@/model/BusinessUser";

const UserInfo = ({ user }: { user: BusinessUser }) => {
    return (
        <div>
            <div className="cabecalho pb-2 flex items-center gap-2">
                <Image
                    className="image-do-usuario rounded-full border-2"
                    src={"/" + user.photo || "/solicitante.png"}
                    alt="Imagem do usuário"
                    width={50}
                    height={50}
                />
                <div>
                    <p className="pb-0 text-base font-bold dark:text-black">{user?.name || "João Pedro"}</p>
                    <p className="pt-0 text-sm font-thin dark:text-black">{`Ativa(o) à ${user?.active || "Usuário ativo à 4"} meses`}</p>
                </div>
            </div>

            <div className="primeira-linha flex gap-4">
                <div className="casos-atendidos">
                    <p className="p-2 pt-4 pb-0 text-small font-semibold dark:text-black">Casos Atendidos</p>
                    <p className="p-2 pt-0 text-xs font-thin dark:text-black">{user?.governmentDetails?.attendedCases || "35"} casos atendidos</p>
                </div>

                <div className="numero-de-registro pl-3">
                    <p className="p-2 pt-4 pb-0 text-small font-semibold dark:text-black">Número de registro</p>
                    <p className="p-2 pt-0 text-xs font-thin dark:text-black">{user?.governmentDetails?.identificationNumber || "358232-2"}</p>
                </div>
            </div>

            <div className="segunda-linha flex gap-6">
                <div className="casos-resolvidos">
                    <p className="p-2 pt-4 pb-0 text-small font-semibold dark:text-black">Casos Resolvidos</p>
                    <p className="p-2 pt-0 text-xs font-thin dark:text-black">{user?.governmentDetails?.solvedCases || "32"} casos atendidos</p>
                </div>

                <div className="especialidade pl-4">
                    <p className="pt-4 pb-0 text-small font-thin dark:text-black">Especialidade</p>
                    <Label name={user?.governmentDetails?.specialization?.areaName || "Animal"} />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
