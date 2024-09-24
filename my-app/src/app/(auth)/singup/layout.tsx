"use client"

import styled from 'styled-components';
import React, { ReactNode } from 'react';
import { Card, Layout } from './styles';

interface SignUpLayoutProps {
  children: ReactNode;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => (
  <Layout>
    <Card>{children}</Card>
  </Layout>
);

export default SignUpLayout;
