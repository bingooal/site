import FixtureCard from '../../../../src/domain/fixture/components/fixtureCard';
import FixturePreview from '../../../../src/domain/fixture/data/FixturePreview';
import { render, screen } from '../../../testUtils';

const {
  homeTeamName,
  awayTeamName,
  homeTeamLogo,
  awayTeamLogo,
  id,
}: FixturePreview = {
  homeTeamName: 'Manchester United',
  awayTeamName: 'Chelsea',
  homeTeamLogo: 'https://media.api-sports.io/football/teams/33.png',
  awayTeamLogo: 'https://media.api-sports.io/football/teams/49.png',
  id: '123',
};

describe('FixtureCard', () => {
  beforeEach(() => {
    render(
      <FixtureCard
        id={id}
        homeTeamName={homeTeamName}
        awayTeamName={awayTeamName}
        homeTeamLogo={homeTeamLogo}
        awayTeamLogo={awayTeamLogo}
      />
    );
  });

  it('shows the team names and logos', () => {
    expect(
      screen.getByText(`${homeTeamName} vs ${awayTeamName}`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(homeTeamName)).toBeInTheDocument();
    expect(screen.getByAltText(awayTeamName)).toBeInTheDocument();
  });
});
