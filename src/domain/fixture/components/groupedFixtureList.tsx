import Image from 'next/image';
import FixturePreview from '../data/FixturePreview';
import FixtureList from './fixtureList';

const unique = <T,>(array: T[]): T[] => [...new Set(array)];

export type GroupOfFixtures = {
  competitionName: string;
  competitionLogo: string;
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
    competitionLogo: fixtures.find(
      (fixture) => fixture.competition.name === name
    ).competition.logo,
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
      ({ competitionName, competitionLogo, competitionFixtures }) => (
        <div key={competitionName}>
          <div className="flex flex-row items-center px-2 pt-4 pb-2 space-x-2">
            <div className="relative flex-shrink-0 w-9 h-9">
              <Image
                src={competitionLogo}
                alt={competitionName}
                layout="fill"
                className="rounded-full"
              />
            </div>
            <h3 className="px-2 py-2 font-semibold text-l">
              {competitionName}
            </h3>
          </div>
          <FixtureList fixtures={competitionFixtures} />
        </div>
      )
    )}
  </>
);

export default GroupedFixtureList;
