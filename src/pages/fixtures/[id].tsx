import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import EventCard from '../../domain/event/components/eventCard';
import { getFixture } from '../../domain/fixture/api/indexFrontEnd';

const FixturePage: React.VFC = () => {
  const router = useRouter();

  const [selectedEvents, setSelectedEvents] = useState([]);
  const { data, isLoading } = useQuery(`getFixture(${router.query.id})`, () =>
    getFixture(router.query.id as string)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { homeTeamName, awayTeamName, events } = data;

  const fixtureName = `${homeTeamName} vs ${awayTeamName}`;

  const numberOfSelectedEvents = selectedEvents.length;

  const isSelected = (name) => selectedEvents.includes(name);

  const selectEvent = (name) => setSelectedEvents([...selectedEvents, name]);
  const deselectEvent = (name) =>
    setSelectedEvents(
      selectedEvents.filter(
        (nameOfSelectedEvent) => nameOfSelectedEvent !== name
      )
    );
  const onClick = (name) =>
    selectedEvents.includes(name) ? deselectEvent(name) : selectEvent(name);

  return (
    <div>
      <Head>
        <title>{fixtureName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{fixtureName}</h1>
      <h2>{`Selected ${numberOfSelectedEvents}/${events.length}`}</h2>
      {events.map(({ name, points }) => (
        <EventCard
          key={name}
          name={name}
          points={points}
          selected={isSelected(name)}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default FixturePage;
