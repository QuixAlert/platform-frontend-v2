"use client";

import StyledCard from '@/components/Card/StyledCard';
import PinCodeForm from '@/components/Singup/PinCodeForm';
import SignUpLayout from './layout';

type SignUpPageProps = {
  params: { id: string };
};

const SignUpPage: React.FC<SignUpPageProps> = ({ params }) => {
  return (
    <SignUpLayout isWhiteBackground={true}>
      <div className="flex justify-center items-center w-[800px] h-[500px]">
        <StyledCard imageSrc='/cat2.svg'>
          <PinCodeForm id={params.id} />
        </StyledCard>
      </div>
    </SignUpLayout>
  );
};

export default SignUpPage;
