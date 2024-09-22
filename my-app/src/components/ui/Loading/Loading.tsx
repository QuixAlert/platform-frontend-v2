import { LoadingOutlined } from "@ant-design/icons";


export function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center">
                <LoadingOutlined className="text-4xl accent-white" />
                <p className="text-xl accent-white">Carregando...</p>
            </div>
        </div>
    );
}