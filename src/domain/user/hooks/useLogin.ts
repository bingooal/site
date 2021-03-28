import { useEffect, useState } from 'react';
import { login } from '../api/indexFrontend';

const useLogin = () => {
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const manageLogin = async () => {
      const loginData = await login(String(sessionStorage.getItem('userId')));
      sessionStorage.setItem('userId', loginData.userId);
      setUserId(loginData.userId);
    };
    manageLogin();
  }, []);

  return userId;
};

export default useLogin;
