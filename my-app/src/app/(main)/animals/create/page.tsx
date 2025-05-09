"use client"

import {useEffect, useState} from 'react';

import {addAnimal} from "@/api/server/animal";

import { useRouter } from 'next/navigation';

import {parseCookies} from "nookies";

import { Form, Input, Button, Select, Upload, Row, Col, GetProp, UploadFile, UploadProps, notification, Space } from 'antd';

import './style.css';
import {addImageOnFirebase} from "@/api/server/generic";


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const CreateAnimalPage: React.FC = () => {
  const router = useRouter()
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onFinish = async (values: any) => {
    const token = parseCookies(undefined)["quixalert.auth.token"];

    if (fileList.length > 0) {
      const imageFile = fileList[0].originFileObj as File;
      const result = await addImageOnFirebase(token, imageFile);
      const {error, value} = result.unpack()
      values.photo = value?.urlPicture;
    }

    const animalResponse = await addAnimal(token, values);

    if (animalResponse && typeof animalResponse === 'object' && 'message' in animalResponse) {
    } else {
      form.resetFields();
      router.push("/animals")
    }
  };

  return (
    <>
      <div className="bg-default p-5 min-h-screen">
  
        <h1 className="text-white font-bold text-[26px]  mx-auto ">
          Cadastrar Animal:
        </h1>
  
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className=" mx-auto p-5"
        >
          <Row gutter={44}>
            {/* Coluna da Esquerda */}
            <Col span={12}>
              <Row gutter={16}>
                {/* Linha 1 */}
                <Col span={15}>
                <Form.Item
                  name="name"
                  label={<span className="text-white font-bold text-lg">Nome do Animal</span>}
                  rules={[{ required: true, message: 'Por favor, insira o nome do animal!' }]}
                >
                  <Input 
                    className="font-nunito text-black placeholder:text-gray-500"
                    placeholder="Ex: Bob o Construtor" 
                  />
                </Form.Item>
                </Col>
                <Col span={8} offset={1}>
                <Form.Item
                  name="animal_type"
                  label={<span className="text-white font-bold text-[18px]">Tipo de Animal</span>}
                  rules={[{ required: true, message: 'Por favor, selecione o tipo de animal!' }]}
                >
                  <Select
                    className="font-nunito"
                    placeholder={<span className="text-gray-500">Selecione o tipo</span>}
                  >
                    <Select.Option value="Dog">Cachorro</Select.Option>
                    <Select.Option value="Cat">Gato</Select.Option>
                  </Select>
                </Form.Item>

                </Col>
              </Row>
  
              <Row gutter={16}>
                {/* Linha 2 */}
                <Col span={8}>
                  <Form.Item
                    name="age"
                    label={<span className="text-white font-bold text-[18px]">Idade</span>}
                    rules={[{ required: true, message: 'Por favor, insira a idade do animal!' }]}
                  >
                    <Input className="font-nunito text-black placeholder:text-gray-500" placeholder="Idade em anos" type="number" min={0} max={50} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="gender"
                    label={<span className="text-white font-bold text-[18px]">Gênero</span>}
                    rules={[{ required: true, message: 'Por favor, selecione o gênero!' }]}
                  >

                    <Select className="font-nunito" placeholder={<span className="text-gray-500">Selecione o gênero</span>}>
                      <Select.Option value="Male">Macho</Select.Option>
                      <Select.Option value="Female">Fêmea</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="breed"
                    label={<span className="text-white font-bold text-[18px]">Raça</span>}
                    rules={[{ required: true, message: 'Por favor, selecione a raça!' }]}
                  >
                    <Input className="font-nunito text-black placeholder:text-gray-500" placeholder="Ex: Labrador" type="string" />
                  </Form.Item>
                </Col>
              </Row>
  
              <Form.Item
                name="description"
                label={<span className="text-white font-bold text-[18px]">Descrição</span>}
                rules={[{ required: true, message: 'Por favor, insira uma descrição!' }]}
              >
                <Input.TextArea className="font-nunito text-black placeholder:text-gray-500" rows={7} placeholder="Ex: Nascida e criada em Capistrano/Ce ..." />
              </Form.Item>
  
              <Form.Item>
                <Button className="w-full bg-[#017957] rounded-[15px] font-nunito font-bold text-[18px]" type="primary" htmlType="submit">
                  Cadastrar Animal
                </Button>
              </Form.Item>
            </Col>
  
            {/* Coluna da Direita */}
            <Col span={12}>
              <Row gutter={16}>
                {/* Linha 1 */}
                <Col span={24}>
                  <Form.Item
                    name="medical_record"
                    label={<span className="text-white font-bold text-[18px]">Ficha Médica</span>}
                    rules={[{ required: true, message: 'Por favor, insira a ficha médica!' }]}
                  >
                    <Input.TextArea className="font-nunito text-black placeholder:text-gray-500" rows={4} placeholder="Ex: Vacina Anti-rábica: Aplicada em 01/12/2023" />
                  </Form.Item>
                </Col>
              </Row>
  
              <Row gutter={16}>
                {/* Linha 2 */}
                <Col span={24}>
                  <Form.Item
                    name="photo"
                    label={<span className="text-white font-bold text-[18px]">Foto</span>}
                    rules={[{ required: true, message: 'Por favor, insira uma foto!' }]}
                  >
                    <Upload
                      action=""
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                    >
                      {fileList.length < 1 && (
                        <button
                          className="border-0 bg-none flex items-center justify-center flex-col gap-4 p-5 w-full"
                          type="button"
                        >
                          <img className="w-[72px] h-[72px]" src="/assets/images/upload.png" />
                          <div className="text-gray-500">
                            Clique ou arraste a imagem para essa área!
                          </div>
                        </button>
                      )}
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
  
};

export default CreateAnimalPage;