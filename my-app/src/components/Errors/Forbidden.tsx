import { Modal } from 'antd';
import { ErrorS } from '@/model/Error';

type ForbiddenProps = {
    error: Error;
    onOk: () => void;
};

const Forbidden = ({ error, onOk }: ForbiddenProps) => {
    Modal.error({
        title: 'Erro de autenticação',
        content: error.message,
        okText: 'Refazer Login',
        cancelButtonProps: { disabled: true, ghost: true },
        onOk,
    });

    return null;
};

export default Forbidden;
