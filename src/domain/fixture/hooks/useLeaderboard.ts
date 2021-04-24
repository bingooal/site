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
      userRank: 1,
      numberOfUsersPlayingFixture: 1,
      getOtherUsersSelectingEvent: () => [],
    };
  }

  // this user won't have a backend session until they select an event,
  // but we still want to show that this user is playing, so default
  // values to 1
  const userRank =
    leaderboard.findIndex((row) => row.userId === userId) + 1 || 1;
  const numberOfUsersPlayingFixture = leaderboard.length || 1;

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
