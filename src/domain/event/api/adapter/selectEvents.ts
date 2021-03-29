import userSessionRepository from '../../../user/repositories/userSessionRepository';

export const getSelectedEvents = (userId: string, fixtureId: string) =>
  userSessionRepository.getSelectedEvents(userId, fixtureId);

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
