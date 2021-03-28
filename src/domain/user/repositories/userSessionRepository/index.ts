import { userSessionRepository as localUserSessionRepository } from './local';

export type UserSessionRepository = {
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
  getSelectedEvents: (userId: string, fixtureId: string) => Promise<string[]>;
};

const userSessionRepository: UserSessionRepository = localUserSessionRepository;


export default userSessionRepository;
