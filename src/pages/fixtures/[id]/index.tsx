import sum from 'lodash/sum';
import Head from 'next/head';
import Link from 'next/link';
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
  const fixtureId = query.id as string;

  const {
    numberOfSelectedEvents,
    isSelected,
    toggleEvent,
  } = useSelectableEvents(userId, fixtureId, MAX_SELECTED_EVENTS);

  const { data: fixture, isIdle, isLoading } = useQuery(
    `getFixture(${fixtureId})`,
    () => getFixture(fixtureId),
    {
      enabled: isReady,
    }
  );

  const {
    userRank,
    numberOfUsersPlayingFixture,
    getOtherUsersSelectingEvent,
  } = useLeaderboard(fixtureId, userId);

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

  const eventsAndOtherUsersSelectingThem = events.map((event) => ({
    event,
    otherUsersSelectingEvent: getOtherUsersSelectingEvent(event.name),
  }));

  return (
    <div>
      <Head>
        <title>{fixtureName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FixtureHeader key={fixture.id} fixture={fixture} />
      <div className="container flex flex-row px-2 mx-auto sm:px-16">
        <div className="w-1/2 py-3 text-center text-gray-300">{userId}</div>
        <Link href={`${fixture.id}/leaderboard`}>
          <div className="w-1/2 py-3 text-center text-gray-300">
            View Leaderboard
          </div>
        </Link>
      </div>
      <UserPerformanceTable
        userPoints={userPoints}
        userRank={userRank}
        numberOfUsersPlayingFixture={numberOfUsersPlayingFixture}
      />
      <EventsTable
        eventsAndOtherUsersSelectingThem={eventsAndOtherUsersSelectingThem}
        numberOfSelectedEvents={numberOfSelectedEvents}
        isSelected={isSelected}
        toggleEvent={toggleEvent}
      />
    </div>
  );
};

export default FixturePage;
