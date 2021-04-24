import { useQuery } from 'react-query';
import { getLeaderboard } from '../api/indexFrontend';

const useLeaderboard = (fixtureId, userId) => {
  const { data: leaderboard } = useQuery(
    `getLeaderboard(${fixtureId})`,
    () => getLeaderboard(fixtureId),
    {
      enabled: Boolean(fixtureId),
      refetchInterval: 20 * 1000,
    }
  );

  if (!leaderboard) {
    return {
      userRank: 0,
      numberOfUsersPlayingFixture: 0,
      getOtherUsersSelectingEvent: () => [],
    };
  }

  const userRank = leaderboard.findIndex((row) => row.userId === userId) + 1;
  const numberOfUsersPlayingFixture = leaderboard.length;

  const getOtherUsersSelectingEvent = (eventName: string): string[] =>
    leaderboard
      .filter((userRow) => userRow.userId !== userId)
      .filter((userRow) => userRow.selectedEvents.includes(eventName))
      .map((userRow) => userRow.userId);

  return {
    userRank,
    numberOfUsersPlayingFixture,
    getOtherUsersSelectingEvent,
  };
};

export default useLeaderboard;
