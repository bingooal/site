import { v4 as uuidv4 } from 'uuid';
import userRepository from '../../repositories/userRepository';
import User from '../../data/User';
import { Login } from '../indexBackend';

const createUser = (): User => ({ id: uuidv4() });

export const login: Login = async (userId) => {
  if (await userRepository.contains(userId)) {
    return { userId };
  }
  const newUser = createUser();
  await userRepository.insert(newUser);
  return { userId: newUser.id };
};
