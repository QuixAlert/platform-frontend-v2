import Image from "next/image";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import ColorButton from "@/components/Button/ColorButton";

function SuccessRegistrationPage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-full bg-pgb text-center p-4">
            <Image
                priority={true}
                alt="Quixalert logo"
                src="/exceptions/register-failed.svg"
                width={500}
                height={500}
                className="mb-8"
            />

            <h1 className="text-6xl font-bold font-mono text-white mb-4">
                Cadastro realizado!
            </h1>

            <p className="text-lg text-gray-400 mb-8">
                O cadastro foi feito com sucesso. Volte para a tela de login e utilize o email e senha cadastrados.
            </p>

            <ColorButton bgColor="#269996" type="primary" icon={<ArrowLeftOutlined />}>
                <Link href="/">Voltar para Login</Link>
            </ColorButton>
        </div>
    );
}

export default SuccessRegistrationPage;
