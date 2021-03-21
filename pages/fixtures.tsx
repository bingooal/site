import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import FixtureCard from '../domain/fixture/components/fixtureCard';
import { getFixtures } from '../domain/fixture/api/indexFrontEnd';

const Fixtures: React.VFC = () => {
  const { data } = useQuery('getFixtures', getFixtures);
  return (
    <div>
      <Head>
        <title>Fixtures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Fixtures</div>
      {data &&
        data.map((fixture) => (
          <FixtureCard
            key={fixture.id}
            homeTeamName={fixture.homeTeamName}
            awayTeamName={fixture.awayTeamName}
            id={fixture.id}
          />
        ))}
    </div>
  );
};

export default Fixtures;
