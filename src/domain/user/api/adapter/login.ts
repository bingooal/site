import { v4 as uuidv4 } from 'uuid';
import userRepository from '../../repositories';
import User from '../../data/User';
import { Login } from '../indexBackend';

const createUser = (): User => ({ id: uuidv4() });

export const login: Login = async (userId) => {
  if (userRepository.contains(userId)) {
    return { userId };
  }
  const newUser = createUser();
  userRepository.insert(newUser);
  return { userId: newUser.id };
};
