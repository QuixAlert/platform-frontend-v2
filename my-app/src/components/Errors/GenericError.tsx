"use client"

import { Modal } from 'antd';
import { FC, useEffect, useRef } from 'react';

type GenericErrorHandlerProps = {
    error: Error;
};

export const GenericErrorHandler: FC<GenericErrorHandlerProps> = ({ error }) => {
    const modalShownRef = useRef(false);

    useEffect(() => {
        if (error && !modalShownRef.current) {
            modalShownRef.current = true;
            Modal.error({
                title: 'Generic Error',
                content: error.message,
                okText: 'OK',
                onOk: () => {
                    modalShownRef.current = false; // Reset for future errors
                },
            });
        }
    }, [error]);

    return null; // No visible UI, modal is handled via Ant Design's Modal component
};

export default GenericErrorHandler;
