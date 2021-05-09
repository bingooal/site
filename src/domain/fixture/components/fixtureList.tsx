import FixtureCard from './fixtureCard';
import FixturePreview from '../data/FixturePreview';

type Props = {
  fixtures: FixturePreview[];
};

const FixtureList: React.VFC<Props> = ({ fixtures }: Props) => (
  <>
    {fixtures.map((fixture) => (
      <FixtureCard key={fixture.id} fixture={fixture} />
    ))}
  </>
);

export default FixtureList;
