import sum from 'lodash/sum';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import EventsTable from '../../../domain/event/components/eventsTable';
import useSelectableEvents from '../../../domain/event/hooks/useSelectableEvents';
import { getFixture } from '../../../domain/fixture/api/indexFrontend';
import FixtureHeader from '../../../domain/fixture/components/fixtureHeader';
import UserPerformanceTable from '../../../domain/fixture/components/userPerformanceTable';
import useLeaderboard from '../../../domain/fixture/hooks/useLeaderboard';
import useLogin from '../../../domain/user/hooks/useLogin';

const MAX_SELECTED_EVENTS = 3;

const FixturePage: React.VFC = () => {
  const userId = useLogin();
  const { query, isReady } = useRouter();

  const {
    numberOfSelectedEvents,
    isSelected,
    toggleEvent,
  } = useSelectableEvents(userId, query.id as string, MAX_SELECTED_EVENTS);

  const {
    data: fixture,
    isIdle,
    isLoading,
  } = useQuery(
    `getFixture(${query.id})`,
    () => getFixture(query.id as string),
    { enabled: isReady }
  );

  const { userRank, numberOfUsersPlayingFixture } = useLeaderboard(
    query.id as string,
    userId
  );

  if (isIdle || isLoading) {
    return <div>Loading...</div>;
  }

  const { homeTeamName, awayTeamName, events } = fixture;

  const fixtureName = `${homeTeamName} vs ${awayTeamName}`;

  const userPoints = sum(
    events
      .filter(({ name, hasOccured }) => isSelected(name) && hasOccured)
      .map(({ points }) => points)
  );

  return (
    <div>
      <Head>
        <title>{fixtureName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FixtureHeader key={fixture.id} fixture={fixture} />
      <div className="py-2 text-center text-gray-200">{userId}</div>
      <UserPerformanceTable
        userPoints={userPoints}
        userRank={userRank}
        numberOfUsersPlayingFixture={numberOfUsersPlayingFixture}
      />
      <EventsTable
        events={events}
        numberOfSelectedEvents={numberOfSelectedEvents}
        isSelected={isSelected}
        toggleEvent={toggleEvent}
      />
    </div>
  );
};

export default FixturePage;
