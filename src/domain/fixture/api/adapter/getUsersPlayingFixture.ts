import userSessionRepository from '../../../user/repositories/userSessionRepository';
import { GetUsersPlayingFixture } from '../indexBackend';

export const getUsersPlayingFixture: GetUsersPlayingFixture = async (
  fixtureId: string
) => {
  const users = await userSessionRepository.getUsersPlayingFixture(fixtureId);
  return users.length;
};
