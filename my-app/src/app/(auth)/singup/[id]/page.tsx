"use client";

import StyledCard from '@/components/Card/StyledCard';
import PinCodeForm from '@/components/Singup/PinCodeForm';

type SignUpPageProps = {
  params: { id: string };
};

const SignUpPage: React.FC<SignUpPageProps> = ({ params }) => {
  return (
    <div className="flex justify-center items-center w-[800px] h-[500px]">
      <StyledCard imageSrc='/cat2.svg'>
        <PinCodeForm id={params.id} />
      </StyledCard>
    </div>
  );
};

export default SignUpPage;
