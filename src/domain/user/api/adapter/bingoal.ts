import makeRequest from '../../../../services/request';
import { Login } from '../indexBackend';

export const login: Login = async (userId) =>
  makeRequest({
    method: 'get',
    url: `${window.location.origin}/api/login`,
    params: {
      userId,
    },
  });
