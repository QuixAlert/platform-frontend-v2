'use client';
import { useState } from 'react';
import './style.css';
import { Form, Input, Button, Select, Upload, Row, Col, GetProp, UploadFile, UploadProps } from 'antd';

const raceOptions = {
    cao: [
      { value: 'labrador', label: 'Labrador' },
      { value: 'poodle', label: 'Poodle' },
      { value: 'beagle', label: 'Beagle' },
      { value: 'bulldog', label: 'Bulldog' },
      { value: 'golden_retriever', label: 'Golden Retriever' },
      { value: 'pug', label: 'Pug' },
      { value: 'germanshepherd', label: 'Pastor Alemão' },
      { value: 'boxer', label: 'Boxer' },
      { value: 'dachshund', label: 'Dachshund' },
      { value: 'cocker_spaniel', label: 'Cocker Spaniel' },
    ],
    gato: [
      { value: 'siames', label: 'Siamês' },
      { value: 'persa', label: 'Persa' },
      { value: 'maine_coon', label: 'Maine Coon' },
      { value: 'ragdoll', label: 'Ragdoll' },
      { value: 'burmese', label: 'Burmês' },
      { value: 'sphynx', label: 'Sphynx' },
      { value: 'abissinio', label: 'Abissínio' },
      { value: 'british_shorthair', label: 'British Shorthair' },
      { value: 'scottish_fold', label: 'Scottish Fold' },
      { value: 'norwegian_forest', label: 'Norwegian Forest' },
    ],
  };
  
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const CadastrarAnimalPage: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
 const [racas, setRacas] = useState<{ value: string; label: string }[]>([
    ...raceOptions.cao,
    ...raceOptions.gato
  ]);
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

  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setRacas(raceOptions[value] || []);
  };

  return (
    <>
      <h1 className="title max-w-[80%] mx-auto mt-[60px]" >
         Cadastrar Animal:
      </h1>

        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="max-w-[80%] mx-auto p-5" 
        >
          <Row gutter={44}>
            {/* Coluna da Esquerda */}
            <Col span={12}>
              <Row gutter={16}>
                {/* Linha 1 */}
                <Col span={15}>
                  <Form.Item
                    name="nome"
                    label={<span className="custom-label">Nome do Animal</span>}
                    rules={[{ required: true, message: 'Por favor, insira o nome do animal!' }]}
                  >
                    <Input className='custom-placeholder' placeholder="Ex: Bob o Construtor" />
                  </Form.Item>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item
                    name="tipo"
                    label={<span className="custom-label">Tipo de Animal</span>}
                    rules={[{ required: true, message: 'Por favor, selecione o tipo de animal!' }]}
                  >
                    <Select className="custom-select" placeholder="Selecione o tipo" onChange={handleTypeChange}>
                      <Select.Option value="cao">Cachorro</Select.Option>
                      <Select.Option value="gato">Gato</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Linha 2 */}
                <Col span={8}>
                  <Form.Item
                    name="idade"
                    label={<span className="custom-label">Idade</span>}
                    rules={[{ required: true, message: 'Por favor, insira a idade do animal!' }]}
                  >
                    <Input className='custom-placeholder' placeholder="Ex: 18 meses" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="genero"
                    label={<span className="custom-label">Gênero</span>}
                    rules={[{ required: true, message: 'Por favor, selecione o gênero!' }]}
                  >
                    <Select className="custom-select" placeholder="Selecione o gênero">
                      <Select.Option value="macho">Macho</Select.Option>
                      <Select.Option value="femea">Fêmea</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="raca"
                    label={<span className="custom-label">Raça</span>}
                    rules={[{ required: true, message: 'Por favor, selecione a raça!' }]}
                  >
                    <Select className="custom-select" placeholder="Selecione a raça">
                      {racas.map(raca => (
                        <Select.Option className="custom-select" key={raca.value} value={raca.value}>
                          {raca.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="descricao"
                label={<span className="custom-label">Descrição</span>}
                rules={[{ required: true, message: 'Por favor, insira uma descrição!' }]}
              >
                <Input.TextArea className='custom-placeholder' rows={7} placeholder="Ex: Nascida e criada em Capistrano/Ce ..." />
              </Form.Item>

              <Form.Item>
                <Button className="submitButton" type="primary" htmlType="submit">
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
                    name="fichaMedica"
                    label={<span className="custom-label">Ficha Médica</span>}
                    rules={[{ required: true, message: 'Por favor, insira a ficha médica!' }]}
                  >
                    <Input.TextArea className='custom-placeholder' rows={4} placeholder="Ex: Vacina Anti-rábica: Aplicada em 01/12/2023" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Linha 2 */}
                <Col span={24}>
                    <Form.Item
                    name="foto"
                    label={<span className="custom-label">Foto</span>}
                    rules={[{ required: true ,message: 'Por favor, insira uma foto!' }]}
                    >
                        <Upload
                            action=""
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && 
                                <button className="border-0 bg-none flex items-center justify-center flex-col gap-4 p-5 w-full" type="button">
                                    <img className="w-[72px] h-[72px]" src="/assets/images/upload.png"/>
                                    <div className='text-[#7a7a7a]'>Clique ou arraste a imagem para essa área!</div>
                                </button>
                            }
                        </Upload>
                    </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
    </>
  );
};

export default CadastrarAnimalPage;
