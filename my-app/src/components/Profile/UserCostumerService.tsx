import {PhoneOutlined} from "@ant-design/icons";
import GovernmentDetails from "@/model/GovernmentDetails";

type UserCostumerServiceProps = {
    governmentDetails?: GovernmentDetails
}

export default function UserCostumerService({
    governmentDetails,
}: UserCostumerServiceProps)
{
    return (
        <>
            <div className="h-40 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                <div className="flex items-center mb-2">
                    <PhoneOutlined className="text-lg text-pgreen mr-2"/>
                    <p className="text-lg font-bold text-black">Atendimentos</p>
                </div>
                <p className="mb-1 text-gray-700">
                    <strong>Casos atendidos:</strong> {governmentDetails?.attendedCases || 0}
                </p>
                <p className="mb-1 text-gray-700">
                    <strong>Casos resolvidos:</strong> {governmentDetails?.solvedCases || 0}
                </p>
                <p className="text-gray-700">
                    <strong>Número de
                        identificação:</strong> {governmentDetails?.identificationNumber || "Não disponível"}
                </p>
            </div>
        </>
    )
}