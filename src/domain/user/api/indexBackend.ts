import { LoginInfo } from '../data/User';
import { login as doLogin } from './adapter/login';

export type Login = (userId: string) => Promise<LoginInfo>;
export const login: Login = doLogin;
