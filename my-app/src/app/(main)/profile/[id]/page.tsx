"use client";

import ColorButton from "@/components/Button/ColorButton";
import { userInfoStore } from "@/store/user";
import { EditOutlined, PhoneOutlined, RadarChartOutlined } from "@ant-design/icons";
import { Tooltip } from "antd/lib";
import Image from 'next/image';

type params = {
    id: string
}

export default function Profile({
    params
}: { params: params }) {
    const { user } = userInfoStore();

    return (
        <div className="ml-6 mr-2 mt-2 flex justify-center gap-3">
            <div className="relative rounded-xl w-4/5 h-[420px] bg-white shadow-md">
                <Image
                    priority={true}
                    className="absolute left-4 top-32 border-8 border-white rounded-full"
                    alt="Foto do usuário"
                    src="/solicitante.png"
                    width={150}
                    height={150}
                />
                <div className="bg-pgreen h-2/4 rounded-lg" />

                <div className="pl-44 flex flex-row items-center justify-between w-full px-6">
                    <div>
                        <p className="pt-6 mb-1 text-xl font-semibold text-black">Nome do servidor(a)</p>
                        <p className="text-lg font-thin text-black">{user?.name}</p>
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        <div className="border-2 border-gray-300 bg-gray-100 rounded-lg px-3 py-1 shadow-sm">
                            <Tooltip title="Essa é a sua responsabilidade na plataforma" placement="top">
                                <p className="text-black font-medium">{String(user?.role).toUpperCase() || "ADMINISTRADOR"}</p>
                            </Tooltip>
                        </div>
                        
                        <Tooltip title="Editar dados do perfil" placement="top">
                            <ColorButton
                                icon={<EditOutlined />}
                                className="mr-6"
                                bgColor="#269996"
                                type="primary">
                                Editar perfil
                            </ColorButton>
                        </Tooltip>
                    </div>
                </div>

                <div className="pl-44 mt-10 px-6">
                    <p className="text-base font-bold text-black">Email <span className="font-normal ml-2">{user?.email || "Não disponível"}</span></p>
                    <p className="text-base font-bold text-black">
                        Status <span className={`ml-2 font-normal ${user?.isActive ? 'text-green-500' : 'text-red-500'}`}>{user?.isActive ? "Ativo" : "Inativo"}</span>
                    </p>
                </div>
            </div>

            {/* Especialidade Boxes */}
            <div className="w-1/5 flex flex-col gap-4">
                <div className="h-28 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center mb-2">
                            <RadarChartOutlined className="text-lg text-pgreen mr-2" />
                            <p className="text-lg font-bold text-black">Especialidade</p>
                        </div>
                        <p className="mb-2 text-gray-700">
                            {user?.governmentDetails?.specialization?.name 
                                ? `A sua especialidade é ${user.governmentDetails.specialization.name}` 
                                : "Nenhuma especialidade registrada"}
                        </p>
                    </div>
                </div>

                <div className="h-40 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                    <div className="flex items-center mb-2">
                        <PhoneOutlined className="text-lg text-pgreen mr-2" />
                        <p className="text-lg font-bold text-black">Atendimentos</p>
                    </div>
                    <p className="mb-1 text-gray-700">
                        <strong>Casos atendidos:</strong> {user?.governmentDetails?.attendedCases || 0}
                    </p>
                    <p className="mb-1 text-gray-700">
                        <strong>Casos resolvidos:</strong> {user?.governmentDetails?.solvedCases || 0}
                    </p>
                    <p className="text-gray-700">
                        <strong>Número de identificação:</strong> {user?.governmentDetails?.identificationNumber || "Não disponível"}
                    </p>
                </div>
            </div>
        </div>
    );
}
