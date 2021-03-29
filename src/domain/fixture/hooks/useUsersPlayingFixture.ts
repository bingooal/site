import { useEffect, useState } from 'react';
import { getUsersPlayingFixture } from '../api/indexFrontend';

// By default, assume only the user is playing
const defaultNumberOfUsersPlayingFixture = 1;

const useUsersPlayingFixture = (fixtureId) => {
  const [
    numberOfUsersPlayingFixture,
    setNumberOfUsersPlayingFixture,
  ] = useState(defaultNumberOfUsersPlayingFixture);

  useEffect(() => {
    if (!fixtureId) {
      return;
    }
    const fetchData = async () => {
      const data = await getUsersPlayingFixture(fixtureId);
      // TODO fix this hack that avoids showing 0 users when the current
      // user has not selected an event (so doesn't have a backend session)
      if (data > defaultNumberOfUsersPlayingFixture) {
        setNumberOfUsersPlayingFixture(data);
      }
    };
    fetchData();
  }, [fixtureId]);

  return { numberOfUsersPlayingFixture };
};

export default useUsersPlayingFixture;
