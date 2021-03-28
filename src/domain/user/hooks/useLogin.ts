import { useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { login } from '../api/indexFrontend';

const useLogin = () => {
  const [userId, setUserId] = useLocalStorageState('bingoalUserId', 'null');

  useEffect(() => {
    const manageLogin = async () => {
      const loginData = await login(userId);
      setUserId(loginData.userId);
    };
    manageLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUserId]);

  return userId;
};

export default useLogin;
