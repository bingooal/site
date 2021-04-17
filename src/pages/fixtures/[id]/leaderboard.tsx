import { GetServerSideProps, NextPage } from 'next';
import {
  getFixture,
  getLeaderboard,
} from '../../../domain/fixture/api/indexBackend';
import FixtureHeader from '../../../domain/fixture/components/fixtureHeader';
import LeaderboardTable from '../../../domain/fixture/components/leaderboardTable';
import FixturePreview from '../../../domain/fixture/data/FixturePreview';
import Leaderboard from '../../../domain/fixture/data/Leaderboard';

type Props = {
  fixture: FixturePreview | null;
  leaderboard: Leaderboard | null;
};

const LeaderboardPage: NextPage<Props> = ({ fixture, leaderboard }: Props) => (
  <div>
    {fixture && <FixtureHeader fixture={fixture} />}
    {leaderboard && <LeaderboardTable leaderboard={leaderboard} />}
  </div>
);

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const fixtureId = context.query.id;

  const [fixture, leaderboard] = await Promise.allSettled([
    getFixture(fixtureId as string),
    getLeaderboard(fixtureId as string),
  ]);

  return {
    props: {
      fixture: fixture.status === 'fulfilled' ? fixture.value : null,
      leaderboard:
        leaderboard.status === 'fulfilled' ? leaderboard.value : null,
    },
  };
};

export default LeaderboardPage;
