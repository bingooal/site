import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import EventCard from '../../domain/event/components/eventCard';
import useSelectableEvents from '../../domain/event/hooks/useSelectableEvents';
import { getFixture } from '../../domain/fixture/api/indexFrontend';
import FixtureCard from '../../domain/fixture/components/fixtureCard';
import useUsersPlayingFixture from '../../domain/fixture/hooks/useUsersPlayingFixture';
import useLogin from '../../domain/user/hooks/useLogin';

const FixturePage: React.VFC = () => {
  const userId = useLogin();
  const { query, isReady } = useRouter();

  const {
    numberOfSelectedEvents,
    isSelected,
    toggleEvent,
  } = useSelectableEvents(userId, query.id as string);

  const {
    data: fixtureData,
    isIdle,
    isLoading,
  } = useQuery(
    `getFixture(${query.id})`,
    () => getFixture(query.id as string),
    { enabled: isReady }
  );

  const { numberOfUsersPlayingFixture } = useUsersPlayingFixture(
    query.id as string
  );

  if (isIdle || isLoading) {
    return <div>Loading...</div>;
  }

  const { homeTeamName, awayTeamName, events } = fixtureData;

  const fixtureName = `${homeTeamName} vs ${awayTeamName}`;

  return (
    <div>
      <Head>
        <title>{fixtureName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{`User ID: ${userId}`}</div>
      <FixtureCard
        key={fixtureData.id}
        id={fixtureData.id}
        homeTeamName={fixtureData.homeTeamName}
        awayTeamName={fixtureData.awayTeamName}
        homeTeamLogo={fixtureData.homeTeamLogo}
        awayTeamLogo={fixtureData.awayTeamLogo}
      />
      <p>{`${numberOfUsersPlayingFixture} users playing this fixture`}</p>
      <h2>{`Selected ${numberOfSelectedEvents}/${events.length}`}</h2>
      {events.map(({ name, points }) => (
        <EventCard
          key={name}
          name={name}
          points={points}
          selected={isSelected(name)}
          onClick={toggleEvent}
        />
      ))}
    </div>
  );
};

export default FixturePage;
