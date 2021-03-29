import { IS_PROD_ENV } from '../../../../config';
import { userSessionRepository as dynamoDbUserSessionRepository } from './dynamodb';
import { userSessionRepository as localUserSessionRepository } from './local';

export type UserSessionRepository = {
  getSelectedEvents: (userId: string, fixtureId: string) => Promise<string[]>;
  getUsersPlayingFixture: (fixtureId: string) => Promise<string[]>;
  selectEvent: (
    userId: string,
    fixtureId: string,
    eventName: string
  ) => Promise<void>;
  deselectEvent: (
    userId: string,
    fixtureId: string,
    eventName: string
  ) => Promise<void>;
  reset?: () => void;
};

const userSessionRepository: UserSessionRepository = IS_PROD_ENV
  ? dynamoDbUserSessionRepository
  : localUserSessionRepository;

export default userSessionRepository;
