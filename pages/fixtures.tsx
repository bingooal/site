import Head from 'next/head';
import React from 'react';
import FixtureCard from '../domain/fixture/components/fixtureCard';

const Fixtures: React.VFC = () => (
  <div>
    <Head>
      <title>Fixtures</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>Fixtures</div>
    <FixtureCard
      homeTeamName="Manchester United "
      awayTeamName="Chelsea "
      id="id"
    />
  </div>
);

export default Fixtures;
