import FixtureCard from '../../../../src/domain/fixture/components/fixtureCard';
import FixturePreview from '../../../../src/domain/fixture/data/FixturePreview';
import { render, screen } from '../../../testUtils';

const { homeTeamName, awayTeamName, id }: FixturePreview = {
  homeTeamName: 'Manchester United',
  awayTeamName: 'Chelsea',
  id: '123',
};

describe('FixtureCard', () => {
  beforeEach(() => {
    render(
      <FixtureCard
        id={id}
        homeTeamName={homeTeamName}
        awayTeamName={awayTeamName}
      />
    );
  });

  it('shows the teams', () => {
    expect(
      screen.getByText(`${homeTeamName} vs ${awayTeamName}`)
    ).toBeInTheDocument();
  });
});
