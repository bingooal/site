import FixtureCard from './fixtureCard';
import FixturePreview from '../data/FixturePreview';

type Props = {
  fixtures: FixturePreview[];
};

const FixtureList: React.VFC<Props> = ({ fixtures }: Props) => (
  <div className="container mx-auto divide-y space-y sm:px-8">
    <h3 className="px-2 py-2 text-xl font-semibold">Today</h3>
    {fixtures.map((fixture) => (
      <FixtureCard key={fixture.id} fixture={fixture} />
    ))}
  </div>
);

export default FixtureList;
