import { useState } from 'react';

export const useLogin = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (navigation) => {
    navigation.navigate('MainApp');
  };

  return { login, setLogin, password, setPassword, handleLogin };
};
