import Head from 'next/head';
// import { useRouter } from 'next/router';
import React from 'react';
import EventCard from '../../domain/event/components/eventCard';
// import { useQuery } from 'react-query';
// import { getFixtures } from '../domain/fixture/api/indexFrontEnd';
import Fixture from '../../domain/fixture/data/Fixture';

const FixturePage: React.VFC = () => {
  // const router = useRouter();

  const events = [
    {
      imageUrl: 'asdf',
      name: 'Bruno Fernandes gets an assist',
      points: 7,
    },
    {
      imageUrl: 'asdf',
      name: 'Jamie Vardy bangs a goal in',
      points: 8,
    },
    {
      imageUrl: 'asdf',
      name: 'Harry Maguire gets a yellow card',
      points: 5,
    },
    {
      imageUrl: 'asdf',
      name: 'Schmeichel makes 3 saves',
      points: 2,
    },
  ];

  const fixture: Fixture = {
    homeTeamName: 'Leceister City',
    awayTeamName: 'Manchester United',
    id: '',
  };

  const { homeTeamName, awayTeamName } = fixture;

  const fixtureName = `${homeTeamName} vs ${awayTeamName}`;

  return (
    <div>
      <Head>
        <title>{fixtureName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{fixtureName}</div>
      {events.map(({ imageUrl, name, points }) => (
        <EventCard key={name} imageUrl={imageUrl} name={name} points={points} />
      ))}
    </div>
  );
};

export default FixturePage;
