import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import { getFixtures } from '../domain/fixture/api/indexFrontend';
import FixturesHeader from '../domain/fixture/components/fixturesHeader';
import FixtureList from '../domain/fixture/components/fixtureList';

const Fixtures: React.VFC = () => {
  const { data: fixtures } = useQuery('getFixtures', getFixtures, {
    refetchInterval: 60 * 1000,
  });
  return (
    <div>
      <Head>
        <title>Fixtures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FixturesHeader />
      {fixtures && (
        <div className="container px-4">
          <FixtureList fixtures={fixtures} />
        </div>
      )}
    </div>
  );
};

export default Fixtures;
