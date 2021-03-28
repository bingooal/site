import userSessionRepository from '../../../user/repositories/userSessionRepository';

export const selectEvent = (
  userId: string,
  fixtureId: string,
  eventName: string
) => userSessionRepository.selectEvent(userId, fixtureId, eventName);

export const deselectEvent = (
  userId: string,
  fixtureId: string,
  eventName: string
) => userSessionRepository.deselectEvent(userId, fixtureId, eventName);
