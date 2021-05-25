import Head from 'next/head';
import { useQuery } from 'react-query';
import { getFixtures } from '../domain/fixture/api/indexFrontend';
import GroupedFixtureList from '../domain/fixture/components/groupedFixtureList';

const Header: React.VFC = () => (
  <header className="sticky top-0 z-50 px-2 py-2 bg-white border-b">
    <div className="font-semibold text-center text-m ">Bingooal</div>
  </header>
);

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
      <Header />
      <div className="container px-4 mx-auto divide-y space-y sm:px-8">
        <h3 className="px-2 py-2 text-center text-l">Today</h3>
        {fixtures && <GroupedFixtureList fixtures={fixtures} />}
      </div>
    </div>
  );
};

export default Fixtures;
