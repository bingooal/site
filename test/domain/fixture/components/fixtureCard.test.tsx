import FixtureCard from '../../../../src/domain/fixture/components/fixtureCard';
import FixturePreview from '../../../../src/domain/fixture/data/FixturePreview';
import { render, screen } from '../../../testUtils';

const fixture: FixturePreview = {
  homeTeamName: 'Manchester United',
  awayTeamName: 'Chelsea',
  homeTeamLogo: 'https://media.api-sports.io/football/teams/33.png',
  awayTeamLogo: 'https://media.api-sports.io/football/teams/49.png',
  id: '123',
};

describe('FixtureCard', () => {
  beforeEach(() => {
    render(<FixtureCard fixture={fixture} />);
  });

  it('shows the team names and logos', () => {
    expect(
      screen.getByText(`${fixture.homeTeamName} vs ${fixture.awayTeamName}`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(fixture.homeTeamName)).toBeInTheDocument();
    expect(screen.getByAltText(fixture.awayTeamName)).toBeInTheDocument();
  });
});
