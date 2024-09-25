import Image from "next/image";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import ColorButton from "@/components/Button/ColorButton";

function FailedRegistrationPage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-full bg-pgb text-center p-4">
            <Image
                priority={true}
                alt="Quixalert logo"
                src="/exceptions/access-error.svg"
                width={500}
                height={500}
                className="mb-8"
            />

            <h1 className="text-6xl font-bold font-mono text-white mb-4">
                Oops!
            </h1>

            <p className="text-lg text-gray-400 mb-8">
                O cadastro não foi feito com sucesso. Solicite um novo convite.
            </p>
        </div>
    );
}

export default FailedRegistrationPage;
