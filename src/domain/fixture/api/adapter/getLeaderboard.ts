import sum from 'lodash/sum';
import orderBy from 'lodash/orderby';
import userSessionRepository from '../../../user/repositories/userSessionRepository';
import { getFixture, GetLeaderboard } from '../indexBackend';

export const getLeaderboard: GetLeaderboard = async (fixtureId: string) => {
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
