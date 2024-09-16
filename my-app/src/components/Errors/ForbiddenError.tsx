"use client"

import { FC, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Modal } from 'antd';
import { createQueryString } from '@/lib/utils';

type ForbiddenErrorHandlerProps = {
    error: Error;
};

export const ForbiddenErrorHandler: FC<ForbiddenErrorHandlerProps> = ({ error }) => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (error) {
            setShowModal(true);
        }
    }, [error]);

    const handleOk = useCallback(() => {
        setShowModal(false);
        router.replace('/' + '?' + createQueryString('redirected', true));
    }, [router]);

    useEffect(() => {
        if (showModal) {
            Modal.error({
                title: 'Erro de autenticação',
                content: error.message,
                okText: 'Re-login',
                cancelButtonProps: { disabled: true, ghost: true },
                onOk: handleOk,
            });
        }
    }, [showModal, error, handleOk]);

    return null; 
};

export default ForbiddenErrorHandler;
