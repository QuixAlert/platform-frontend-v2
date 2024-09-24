"use client"

import React, {useState} from "react";
import { Modal, Input } from "antd";
import ColorButton from "@/components/Button/ColorButton";

type SpecialtyModalProps = {
    visible: boolean;
    onOk: (newSpecialty: string) => void;
    onCancel: () => void;
    specialty: string;
    title: string;
    isLoading: boolean;
}

const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
    visible,
    onOk,
    onCancel,
    specialty,
    title,
    isLoading
}) => {
    const [newSpecialty, setNewSpecialty] = useState(specialty);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSpecialty(e.target.value);
    }

    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            <Input
                value={newSpecialty}
                onChange={handleInputChange}
                placeholder="Nova especialidade"
                className="mb-3"
            />
            <div className="flex justify-end">
                <ColorButton
                    bgColor="red"
                    onClick={onCancel}
                    className="mr-2"
                >
                    Cancelar
                </ColorButton>
                <ColorButton
                    bgColor="#269996"
                    onClick={() => onOk(newSpecialty)}
                    type="primary"
                    loading={isLoading}
                >
                    Salvar
                </ColorButton>
            </div>
        </Modal>
    );
}

export default SpecialtyModal;