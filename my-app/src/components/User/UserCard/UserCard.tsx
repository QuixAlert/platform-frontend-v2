"use client";

import React from "react";
import Image from "next/image";
import User from "@/model/User";
import {Flex} from "antd";
import Label from "@/components/Label/Label";

function UserCard({ user }: { user: User }) {
    return (
        <div className="flex w-80 max-h-72 bg-gray-300 rounded-xl text-white border-2">
            <div className="flex-1.5 p-2.5 text-black">
                <Flex className="cabecalho pb-2" justify="flex-start" gap="small" align="center">
                    <Image
                        className="image-do-usuario rounded-full border-2"
                        src="/solicitante.png"
                        alt="Imagem do usuário"
                        width={50}
                        height={50}
                    />
                    <div>
                        <p className="pb-0 text-base font-bold dark:text-black">João Pedro</p>
                        <p className="pt-0 text-sm font-thin dark:text-black">Ativa(o) à 4 meses</p>
                    </div>
                </Flex>

                <Flex className="primeira-linha" justify="flex-start" gap="small">
                    <div className="casos-atendidos">
                        <p className="p-2 pt-4 pb-0 text-small font-semibold dark:text-black">Casos Atendidos</p>
                        <p className="p-2 pt-0 text-xs font-thin dark:text-black">35 casos atendidos</p>
                    </div>

                    <div className="numero-de-registro pl-3">
                        <p className="p-2 pt-4 pb-0 text-small font-semibold dark:text-black">Número de registro</p>
                        <p className="p-2 pt-0 text-xs font-thin dark:text-black">3421121-78</p>
                    </div>
                </Flex>

                <Flex className="segunda-linha" justify="flex-start" gap="large">
                    <div className="casos-resolvidos">
                        <p className="p-2 pt-4 pb-0 text-small font-semibold dark:text-black">Casos Resolvidos</p>
                        <p className="p-2 pt-0 text-xs font-thin dark:text-black">32 casos atendidos</p>
                    </div>

                    <Flex vertical className="especialidade pl-4" align="center">
                        <p className="pt-4 pb-0 text-small font-thin dark:text-black">Especialidade</p>
                        <Label name="Animal"/>
                    </Flex>
                </Flex>
            </div>
        </div>
    )
}

export default UserCard;