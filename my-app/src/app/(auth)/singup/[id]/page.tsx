"use client";

import StyledCard from '@/components/Card/StyledCard';
import PinCodeForm from '@/components/Singup/PinCodeForm';
import React from "react";

type SignUpPageProps = {
    params: { id: string };
};

const SignUpPage: React.FC<SignUpPageProps> = ({ params }) => {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-default">
            <div className="p-8 shadow-md rounded-lg min-h-[500px] min-w-[800px] bg-white">
                <StyledCard imageSrc='/cat2.svg'>
                    <PinCodeForm id={params.id} />
                </StyledCard>
            </div>
        </div>
    );
};

export default SignUpPage;