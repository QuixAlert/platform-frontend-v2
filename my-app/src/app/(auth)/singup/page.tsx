"use client"

import Card from '@/components/Card/Card';
import PinCodeForm from '@/components/Singup/PinCodeForm';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <Card image="/cat.jpg">
        <PinCodeForm />
      </Card>
    </div>
  );
};

export default SignUpPage;
