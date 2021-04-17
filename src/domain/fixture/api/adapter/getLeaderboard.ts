import orderBy from 'lodash/orderby';
import sum from 'lodash/sum';
import logger from '../../../../services/logger';
import userSessionRepository from '../../../user/repositories/userSessionRepository';
import { getFixture, GetLeaderboard } from '../indexBackend';

export const getLeaderboard: GetLeaderboard = async (fixtureId: string) => {
  logger.log('[getLeaderboard.ts] getLeaderboard() fixtureId', fixtureId, '\n');
  const usersAndSelectedEvents = await userSessionRepository.getUsersAndSelectedEvents(
    fixtureId
  );
  const { events } = await getFixture(fixtureId);
  const unsortedLeaderboard = usersAndSelectedEvents.map(
    ({ userId, selectedEvents }) => {
      const selectedEventsThatHaveOccured = events
        .filter((event) => event.hasOccured)
        .filter((event) => selectedEvents.includes(event.name));

      const points = sum(
        selectedEventsThatHaveOccured.map((event) => event.points)
      );

      return {
        userId,
        points,
      };
    }
  );
  const sortedLeaderboard = orderBy(unsortedLeaderboard, 'points', 'desc');
  return sortedLeaderboard;
};
