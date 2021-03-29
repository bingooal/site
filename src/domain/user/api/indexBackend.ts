import { LoginInfo } from '../data/User';

export type Login = (userId: string) => Promise<LoginInfo>;

export { login } from './adapter/login';
