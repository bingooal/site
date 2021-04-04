import FixtureHeader from '../../../../src/domain/fixture/components/fixtureHeader';
import FixturePreview from '../../../../src/domain/fixture/data/FixturePreview';
import { render, screen } from '../../../testUtils';

const fixture: FixturePreview = {
  homeTeamName: 'Manchester United',
  awayTeamName: 'Chelsea',
  homeTeamLogo: 'https://media.api-sports.io/football/teams/33.png',
  awayTeamLogo: 'https://media.api-sports.io/football/teams/49.png',
  id: '123',
};

describe('FixtureHeader', () => {
  beforeEach(() => {
    render(<FixtureHeader fixture={fixture} />);
  });

  it('shows the team names and logos', () => {
    expect(screen.getByAltText(fixture.homeTeamName)).toBeInTheDocument();
    expect(screen.getByText(fixture.homeTeamName)).toBeInTheDocument();
    expect(screen.getByText('vs')).toBeInTheDocument();
    expect(screen.getByText(fixture.awayTeamName)).toBeInTheDocument();
    expect(screen.getByAltText(fixture.awayTeamName)).toBeInTheDocument();
  });
});
