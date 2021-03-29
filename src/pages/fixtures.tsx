import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import FixtureCard from '../domain/fixture/components/fixtureCard';
import { getFixtures } from '../domain/fixture/api/indexFrontend';

const Fixtures: React.VFC = () => {
  const { data } = useQuery('getFixtures', getFixtures);
  return (
    <div>
      <Head>
        <title>Fixtures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Fixtures</h1>
      {data &&
        data.map((fixture) => (
          <FixtureCard
            key={fixture.id}
            id={fixture.id}
            homeTeamName={fixture.homeTeamName}
            awayTeamName={fixture.awayTeamName}
            homeTeamLogo={fixture.homeTeamLogo}
            awayTeamLogo={fixture.awayTeamLogo}
          />
        ))}
    </div>
  );
};

export default Fixtures;
