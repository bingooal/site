import Head from 'next/head';
import { useQuery } from 'react-query';
import { getFixtures } from '../domain/fixture/api/indexFrontend';
import FixturesHeader from '../domain/fixture/components/fixturesHeader';
import GroupedFixtureList from '../domain/fixture/components/groupedFixtureList';

const Fixtures: React.VFC = () => {
  const { data: fixtures } = useQuery('getFixtures', getFixtures, {
    refetchInterval: 30 * 1000,
  });
  return (
    <div>
      <Head>
        <title>Fixtures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FixturesHeader />
      <div className="container px-4 mx-auto divide-y space-y sm:px-8">
        <h3 className="px-2 py-2 text-xl font-semibold">Today</h3>
        {fixtures && <GroupedFixtureList fixtures={fixtures} />}
      </div>
    </div>
  );
};

export default Fixtures;
