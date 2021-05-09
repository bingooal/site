import FixtureList from './fixtureList';
import FixturePreview from '../data/FixturePreview';

const unique = <T,>(array: T[]): T[] => [...new Set(array)];

export type GroupOfFixtures = {
  competitionName: string;
  competitionFixtures: FixturePreview[];
};

export const groupByCompetition = (
  fixtures: FixturePreview[]
): GroupOfFixtures[] => {
  const competitionNames = unique(
    fixtures.map((fixture) => fixture.competition.name)
  );
  return competitionNames.map((name) => ({
    competitionName: name,
    competitionFixtures: fixtures.filter(
      (fixture) => fixture.competition.name === name
    ),
  }));
};

type Props = {
  fixtures: FixturePreview[];
};

const GroupedFixtureList: React.VFC<Props> = ({ fixtures }: Props) => (
  <>
    {groupByCompetition(fixtures).map(
      ({ competitionName, competitionFixtures }) => (
        <div key={competitionName}>
          <h3 className="px-2 py-2 font-semibold text-l">{competitionName}</h3>
          <FixtureList fixtures={competitionFixtures} />
        </div>
      )
    )}
  </>
);

export default GroupedFixtureList;
