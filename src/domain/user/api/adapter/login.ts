import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator';

import userRepository from '../../repositories/userRepository';
import User from '../../data/User';
import { Login } from '../indexBackend';

const createUsername = () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    length: 2,
    separator: '-',
  });

const createUser = (): User => ({ id: createUsername() });

export const login: Login = async (userId) => {
  if (await userRepository.contains(userId)) {
    return { userId };
  }
  const newUser = createUser();
  await userRepository.insert(newUser);
  return { userId: newUser.id };
};
