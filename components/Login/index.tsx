import { NextPage } from 'next';
import React from 'react';

interface LoginProps {
  isShow: boolean;
  onClose: () => void;
}

const Login: NextPage<LoginProps> = ({ isShow }: LoginProps) => {
  console.log(isShow);
  return <div>index</div>;
};

export default Login;
