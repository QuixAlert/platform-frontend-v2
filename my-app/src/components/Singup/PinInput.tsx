"use client";

import React from 'react';

interface PinInputProps {
    id: string;
    prevId?: string;
    nextId?: string;
    value: string;
    onChange: (value: string) => void;
}

const PinInput: React.FC<PinInputProps> = ({ id, prevId, nextId, value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onChange(inputValue);

        if (inputValue && nextId) {
            const nextElement = document.getElementById(nextId);
            if (nextElement) {
                nextElement.focus();
            }
        } else if (!inputValue && prevId) {
            const prevElement = document.getElementById(prevId);
            if (prevElement) {
                prevElement.focus();
            }
        }
    };

    return (
        <input
            id={id}
            type="text"
            maxLength={1}
            value={value}
            onChange={handleChange}
            autoFocus={prevId === undefined}
            className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-lg transition-colors duration-300 focus:border-teal-600 focus:outline-none"
        />
    );
};

export default PinInput;
