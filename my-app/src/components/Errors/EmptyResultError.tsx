"use client"

import { Modal } from 'antd';
import { FC, useEffect, useRef } from 'react';

type EmptyResultErrorHandlerProps = {
    error: Error;
};

export const EmptyResultErrorHandler: FC<EmptyResultErrorHandlerProps> = ({ error }) => {
    const modalShownRef = useRef(false);

    useEffect(() => {
        if (error && !modalShownRef.current) {
            modalShownRef.current = true;
            Modal.error({
                title: 'No Results Found',
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

export default EmptyResultErrorHandler;
