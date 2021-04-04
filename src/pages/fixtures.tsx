import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import { getFixtures } from '../domain/fixture/api/indexFrontend';
import FixturesTable from '../domain/fixture/components/fixturesTable';
import FixturesHeader from '../domain/fixture/components/fixturesHeader';

const Fixtures: React.VFC = () => {
  const { data: fixtures } = useQuery('getFixtures', getFixtures);
  return (
    <div>
      <Head>
        <title>Fixtures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FixturesHeader />
      {fixtures && <FixturesTable fixtures={fixtures} />}
    </div>
  );
};

export default Fixtures;
