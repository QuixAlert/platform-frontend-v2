"use client";

import { Form, Input, Button, Spin } from "antd";
import UserProfilePhoto from "@/components/Profile/UserProfilePhoto";
import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import BusinessUser from "@/model/BusinessUser";
import { useRouter } from "next/navigation";
import { checkIfInviteIsValid } from "@/api/client/singup";
import { doRegistration } from "@/api/client/auth";

type RegisterPageProps = {
  params: { id: string };
};

const RegisterPage: React.FC<RegisterPageProps> = ({ params }) => {
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [isEditingPhoto, setIsEditingPhoto] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false)
  const router = useRouter();

  const canDoRegistration = useCallback(async () => {
    const result = await checkIfInviteIsValid(params.id);
    const { error, value } = result.unpack();

    return value?.isValid;
  }, [params.id]);

  useEffect(() => {
    const checkRegistrationValidity = async () => {
      const isValid = await canDoRegistration();

      if (isValid) {
        setIsLoading(false);
      } else {
        router.push("/singup/exceptions/invalid");
      }
    };

    checkRegistrationValidity();
  }, [canDoRegistration, router]);

  const sendUserData = async (userData: BusinessUser) => {
    setIsRegistering(true)
    const result = await doRegistration(userData)
    const {error, value} = result.unpack()

    setIsRegistering(false)
    if (value) {
      router.push("/singup/exceptions/success");
    } else {
      router.push("/singup/exceptions/failed");
    }
  };

  const handleSubmit = (values: any) => {
    const updatedData: BusinessUser = {
      name: values.name,
      email: values.email,
      photo: photoBase64,
      password: values.password,
      governmentDetails: {
        identificationNumber: values.identificationNumber,
        specialization: {
          areaName: values.areaName,
        },
      },
    };

    sendUserData(updatedData);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-default"> 
        <div className="text-center">
          <Spin size="large" className="text-white" /> 
          <p className="mt-4 text-xl text-white">Checando validade do convite...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 pl-6 rounded-lg flex justify-center items-center min-h-screen bg-white"> {/* Keeps background consistent */}
      <div className="rounded-lg min-w-[800px]">
        <div className="flex items-start mb-4 space-x-20">
          <Image src="/quixalert_logo.svg" alt="Logo" width={70} height={70} />
          <div className="ml-10">
            <h1 className="text-4xl font-bold text-black">
              Plataforma de Dados do Quixalert
            </h1>
            <p className="text-center font-roboto text-lg mb-8 text-black">
              Preencha os dados para concluir o seu cadastro
            </p>
          </div>
        </div>

        <Form onFinish={handleSubmit} layout="vertical" className="space-y-6">
          <div className="flex items-start space-x-8 mb-6">
            <UserProfilePhoto
              isEditing={isEditingPhoto}
              photoUrl={photoBase64 ? `data:image/png;base64,${photoBase64}` : ""}
              setPhotoBase64={setPhotoBase64}
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-teal-600 shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="flex-1 space-y-4">
              <Form.Item
                name="name"
                label={<span className="text-lg font-medium">Nome</span>}
                rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
              >
                <Input className="rounded-md shadow-sm" />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="text-lg font-medium">Email</span>}
                rules={[{ required: true, message: "Por favor, insira seu email!" }]}
              >
                <Input type="email" className="rounded-md shadow-sm" />
              </Form.Item>

              <Form.Item
                name="password"
                label={<span className="text-lg font-medium">Senha</span>}
                rules={[{ required: true, message: "Por favor, insira sua senha!" }]}
              >
                <Input.Password className="rounded-md shadow-sm" />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label={<span className="text-lg font-medium">Confirme a Senha</span>}
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Por favor, confirme sua senha!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("As senhas não correspondem!"));
                    },
                  }),
                ]}
              >
                <Input.Password className="rounded-md shadow-sm" />
              </Form.Item>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-900 mt-6">
            Detalhes Governamentais
          </h2>
          <div className="space-y-4">
            <Form.Item
              name="identificationNumber"
              label={<span className="text-lg font-medium">Número de Identificação</span>}
              rules={[{ required: true, message: "Por favor, insira seu número de identificação!" }]}
            >
              <Input className="rounded-md shadow-sm" />
            </Form.Item>

            <Form.Item
              name="areaName"
              label={<span className="text-lg font-medium">Área de Especialização</span>}
            >
              <Input className="rounded-md shadow-sm" />
            </Form.Item>
          </div>

          <Form.Item className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="mt-6 w-full bg-teal-600 text-white py-3 px-6 rounded-md text-lg hover:bg-teal-700 transition duration-300"
              loading={isRegistering}
            >
              Concluir Cadastro
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
