import Image from "next/image";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import ColorButton from "@/components/Button/ColorButton";

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-full bg-pgb text-center p-4">
            <Image
                priority={true}
                alt="Quixalert logo"
                src="/exceptions/access-failed.svg"
                width={400}
                height={400}
                className="mb-8"
            />

            <h1 className="text-6xl font-bold font-mono text-white mb-4">
                Oops!
            </h1>

            <p className="text-lg text-gray-400 mb-8">
                A página que você está procurando não foi encontrada.
            </p>

            <ColorButton bgColor="#269996" type="primary" icon={<ArrowLeftOutlined />}>
                <Link href="/home">Voltar para Home</Link>
            </ColorButton>
        </div>
    );
}

export default NotFound;
