import { IS_PROD_ENV } from '../../../../config';
import { userRepository as dynamoDbUserRepository } from './dynamodb';
import { userRepository as localUserRepository } from './local';

export type UserRepository = {
  insert: (user: any) => Promise<void>;
  contains: (userId: string) => Promise<boolean>;
  reset?: () => void;
};

const userRepository: UserRepository = IS_PROD_ENV
  ? dynamoDbUserRepository
  : localUserRepository;

export default userRepository;
