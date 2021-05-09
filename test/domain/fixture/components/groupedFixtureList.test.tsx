import GroupedFixtureList, {
  groupByCompetition,
  GroupOfFixtures,
} from '../../../../src/domain/fixture/components/groupedFixtureList';
import FixturePreview from '../../../../src/domain/fixture/data/FixturePreview';
import { fixturePreview } from '../../../mockData';
import { render, screen } from '../../../testUtils';

const fixturePreviewDifferentCompetition: FixturePreview = {
  ...fixturePreview,
  competition: {
    ...fixturePreview.competition,
    name: `${fixturePreview.competition.name}2`,
  },
};

describe('groupByCompetition', () => {
  type Table = {
    fixtures: FixturePreview[];
    expected: GroupOfFixtures[];
  };
  it.each`
    testName                                   | fixtures                                                | expected
    ${'0 fixtures'}                            | ${[]}                                                   | ${[]}
    ${'1 fixture from 1 competition'}          | ${[fixturePreview]}                                     | ${[{ competitionName: fixturePreview.competition.name, competitionFixtures: [fixturePreview] }]}
    ${'2 fixtures from 2 unique competitions'} | ${[fixturePreview, fixturePreviewDifferentCompetition]} | ${[{ competitionName: fixturePreview.competition.name, competitionFixtures: [fixturePreview] }, { competitionName: fixturePreviewDifferentCompetition.competition.name, competitionFixtures: [fixturePreviewDifferentCompetition] }]}
    ${'2 fixtures from 1 unique competition'}  | ${[fixturePreview, fixturePreview]}                     | ${[{ competitionName: fixturePreview.competition.name, competitionFixtures: [fixturePreview, fixturePreview] }]}
  `('$testName', ({ fixtures, expected }: Table) => {
    expect(groupByCompetition(fixtures)).toEqual(expected);
  });
});

describe('GroupedFixtureList', () => {
  it('shows a heading for each League', () => {
    const fixtures = [fixturePreview, fixturePreviewDifferentCompetition];

    render(<GroupedFixtureList fixtures={fixtures} />);

    expect(
      screen.getByRole('heading', { name: fixturePreview.competition.name })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: fixturePreviewDifferentCompetition.competition.name,
      })
    ).toBeInTheDocument();
  });
});
