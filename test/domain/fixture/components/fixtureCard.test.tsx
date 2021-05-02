import { FixtureCard } from '../../../../src/domain/fixture/components/fixtureList';
import { getTime } from '../../../../src/services/date';
import { fixturePreview } from '../../../mockData';
import { render, screen } from '../../../testUtils';

describe('FixtureCard', () => {
  it('shows the team names and logos', () => {
    const fixture = fixturePreview;

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText(fixture.homeTeamName)).toBeInTheDocument();
    expect(screen.getByAltText(fixture.homeTeamName)).toBeInTheDocument();
    expect(screen.getByText(fixture.awayTeamName)).toBeInTheDocument();
    expect(screen.getByAltText(fixture.awayTeamName)).toBeInTheDocument();
  });

  it('shows the score when there is a score', () => {
    const fixture = {
      ...fixturePreview,
      homeTeamGoals: 1,
      awayTeamGoals: 2,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
  });

  it('shows the kickoff date and time before kick off', () => {
    const pastKickOffDate = '2021-04-24T12:30:00+01:00';
    const fixture = {
      ...fixturePreview,
      date: pastKickOffDate,
      minute: null,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText(getTime(fixture.date))).toBeInTheDocument();
  });

  it('shows minutes played during a game', () => {
    const fixture = {
      ...fixturePreview,
      minute: 89,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText(`${89}'`)).toBeInTheDocument();
  });

  it("shows 'Full time' after a game", () => {
    const fixture = {
      ...fixturePreview,
      status: 'FT',
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText('Full time')).toBeInTheDocument();
  });

  it("shows 'Half time' when it's half time", () => {
    const fixture = {
      ...fixturePreview,
      status: 'HT',
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText('Half time')).toBeInTheDocument();
  });
});
