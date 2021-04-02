import { useEffect, useState } from 'react';
import { getLeaderboard } from '../api/indexFrontend';

const useLeaderboard = (fixtureId, userId) => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    if (!fixtureId) {
      return;
    }
    const fetchData = async () => {
      const data = await getLeaderboard(fixtureId);
      setLeaderboard(data);
    };
    fetchData();
  }, [fixtureId]);

  // this user won't have a backend session until they select an event,
  // but we still want to show that this user is playing, so default
  // values to 1
  const userRank =
    leaderboard.findIndex((row) => row.userId === userId) + 1 || 1;
  const numberOfUsersPlayingFixture = leaderboard.length || 1;

  return { userRank, numberOfUsersPlayingFixture };
};

export default useLeaderboard;
