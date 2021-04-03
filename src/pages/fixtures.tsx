import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import { getFixtures } from '../domain/fixture/api/indexFrontend';
import FixturesTable from '../domain/fixture/components/fixturesTable';
import Header from '../domain/fixture/components/header';

const Fixtures: React.VFC = () => {
  const { data: fixtures } = useQuery('getFixtures', getFixtures);
  return (
    <div>
      <Head>
        <title>Fixtures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Fixtures" />
      {fixtures && <FixturesTable fixtures={fixtures} />}
    </div>
  );
};

export default Fixtures;
