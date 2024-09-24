import React, { useState } from "react";
import { Checkbox, Form, Modal, Switch, Typography } from "antd";
import { NotificationType, showNotification } from "../Notification/Notification";
import { NotificationInstance } from "antd/es/notification/interface";
import ColorButton from "../Button/ColorButton";
import BusinessUser from "@/model/BusinessUser";
import { changeUserStatus } from "@/api/client/users";

const { Title, Text } = Typography;

type UserActiveStatusModalProps = {
    open: boolean;
    onClose: () => void;
    user?: BusinessUser;
    notificationApi: NotificationInstance;
};

const UserActiveStatusModal = ({
    open,
    onClose,
    user,
    notificationApi
}: UserActiveStatusModalProps) => {
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(user?.active); 
    const [isSendEmailButtonEnabled, setIsSendEmailButtonEnabled] = useState(true);

    const onChange = () => {
        setIsSendEmailButtonEnabled(state => !state);
    };

    const handleOk = async () => {
        setLoading(true);
        const result = await changeUserStatus(user?.id || '', isActive || false);
        const { error, value } = result.unpack();

        if (value) {
            showNotification({
                message: "Status atualizado",
                description: `O status do usuário ${user?.name} foi atualizado para ${isActive ? "ativo" : "inativo"}.`,
                type: NotificationType.SUCCESS,
            }, notificationApi);
        } else {
            showNotification({
                message: "Erro ao atualizar status",
                description: error.name,
                type: NotificationType.ERROR,
            }, notificationApi);
        }
    
        setLoading(false);
        onClose();        
    };

    return (
        <Modal
            title={<Title level={4} className="text-center p-5 rounded-lg">{`Editar Status de Usuário: ${user?.name}`}</Title>}
            open={open}
            onCancel={onClose}
            footer={[
                <ColorButton bgColor="#b0b0b0" key="cancel" onClick={onClose}>
                    Cancelar
                </ColorButton>,
                <ColorButton bgColor="#269996" key="submit" type="primary" loading={loading} onClick={handleOk}>
                    Atualizar Status
                </ColorButton>,
            ]}
            centered
        >
            <Form layout="vertical">
                <Form.Item label="Status Atual" className="mb-4">
                    <Text 
                        strong 
                        style={{ color: user?.active ? "green" : "red" }}
                    >
                        {user?.active ? "Ativo" : "Inativo"}
                    </Text>
                </Form.Item>
                <Form.Item label="Alterar Status" className="mb-4">
                    <Switch 
                        checkedChildren="Ativo"
                        unCheckedChildren="Inativo"
                        checked={isActive}
                        onChange={setIsActive}
                        style={{
                            backgroundColor: isActive ? "#269996" : "#d9d9d9", // Background color for the switch
                            borderColor: "#269996" // Border color for the switch
                        }}
                    />
                </Form.Item>

                <Form.Item>
                    <Checkbox 
                        onChange={onChange}
                        style={{
                            color: "#269996", // Text color for the checkbox
                        }}
                    >
                        <span 
                            style={{
                                color: "#269996", // Keeping checkbox text color the same
                            }}
                        >
                            Notificar usuário por email acerca da modificação.
                        </span>
                    </Checkbox>
                </Form.Item>
            </Form>

            <p className="pt-2 pb-0 text-small font-light dark:text-black">
                Altere o status do usuário conforme necessário e clique em "Atualizar Status".
            </p>
        </Modal>
    );
};

export default UserActiveStatusModal;
