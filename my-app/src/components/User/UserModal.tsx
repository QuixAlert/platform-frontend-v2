import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { NotificationType, showNotification } from "../Notification/Notification";
import { NotificationInstance } from "antd/es/notification/interface";

type UserModalProps = {
    open: boolean;
    onClose: () => void;
    notificationApi: NotificationInstance
}

const UserModal = ({
    open,
    onClose,
    notificationApi
}: UserModalProps) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [isSendEmailButtonEnabled, setIsSendEmailButtonEnabled] = useState(true);

    const onChange = () => {
        setIsSendEmailButtonEnabled(state => !state);
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            setLoading(true);
            showNotification({
                message: "Enviando email",
                description: "Estamos processando o email e enviando o convite para o usuário.",
                type: NotificationType.ALERT,
            }, notificationApi 
        );
            await new Promise(resolve => setTimeout(resolve, 6000)); // Simulate email sending
            showNotification({
                message: "Email enviado",
                description: "O email foi processado e o convite enviado para o usuário.",
                type: NotificationType.SUCCESS,
            }, notificationApi 
        );
        } catch (error) {
            // Handle validation error if needed
            showNotification({
                message: "Erro ao enviar email",
                description: "Houve um problema ao enviar o email.",
                type: NotificationType.ERROR,
            }, notificationApi 
        );
        } finally {
            setLoading(false);
            onClose();
        }
    };

    return (
        <Modal
            title="Adicionar novo usuário"
            open={open}
            okText="Enviar email"
            cancelText="Cancelar"
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Cancelar
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk} disabled={isSendEmailButtonEnabled}>
                    Enviar Email
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="email"
                    label="Email do servidor(a)"
                    rules={[{ required: true, type: 'email', message: 'Por favor, insira um email válido.' }]}
                    className="mb-3"
                >
                    <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Digite o email do servidor" />
                </Form.Item>
                <Checkbox onChange={onChange}>
                    <p className="font-thin">Eu asseguro que o email é pertecente a um servidor da AMMA.</p>
                </Checkbox>
            </Form>
            <p className="pt-2 pb-0 text-small font-light dark:text-black">
                Ao clicar em enviar, o usuário com o email descrito irá receber um link de confirmação para concluir o cadastro.
            </p>
        </Modal>
    );
};

export default UserModal;
