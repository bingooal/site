import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getFixtures } from '../domain/fixture/api/indexFrontend';
import DatePicker from '../domain/fixture/components/datePicker';
import GroupedFixtureList from '../domain/fixture/components/groupedFixtureList';
import { Date, format, now, parse } from '../services/date';

const Header: React.VFC = () => (
  <header className="sticky top-0 z-50 px-2 py-2 bg-white border-b">
    <div className="font-semibold text-center text-m ">Bingooal</div>
  </header>
);

const Fixtures: React.VFC = () => {
  const { push, query, pathname } = useRouter();
  const dateString = (query.date as string) || format(now());

  const { data: fixtures } = useQuery(
    `getFixtures(${dateString})`,
    () => getFixtures(dateString),
    {
      refetchInterval: 30 * 1000,
    }
  );

  const setDateInURL = (date: Date) => {
    push(`${pathname}?date=${format(date)}`);
  };

  return (
    <div>
      <Head>
        <title>Fixtures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DatePicker date={parse(dateString)} setDate={setDateInURL} />
      <div className="container px-4 py-2 mx-auto divide-y sm:px-8">
        {fixtures && <GroupedFixtureList fixtures={fixtures} />}
      </div>
    </div>
  );
};

export default Fixtures;
