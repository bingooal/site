import FixtureHeader from '../../../../src/domain/fixture/components/fixtureHeader';
import { fixturePreview } from '../../../mockData';
import { render, screen } from '../../../testUtils';

describe('FixtureHeader', () => {
  it('shows the fixture competition and teams', () => {
    const fixture = fixturePreview;

    render(<FixtureHeader fixture={fixture} />);

    expect(screen.getByText(fixture.competition.name)).toBeInTheDocument();
    expect(screen.getByText(fixture.homeTeamName)).toBeInTheDocument();
    expect(screen.getByAltText(fixture.homeTeamName)).toBeInTheDocument();
    expect(screen.getByText(fixture.awayTeamName)).toBeInTheDocument();
    expect(screen.getByAltText(fixture.awayTeamName)).toBeInTheDocument();
    expect(
      screen.getByText(`${fixture.homeTeamGoals} : ${fixture.awayTeamGoals}`)
    ).toBeInTheDocument();
  });

  it('shows the fixture status', () => {
    const fixture = fixturePreview;

    render(<FixtureHeader fixture={fixture} />);

    expect(screen.getByText(`${fixture.minute}'`)).toBeInTheDocument();
  });

  it('shows the fixture score when there is a score', () => {
    const fixture = {
      ...fixturePreview,
      homeTeamGoals: 0,
      awayTeamGoals: 0,
    };

    render(<FixtureHeader fixture={fixture} />);

    expect(
      screen.getByText(`${fixture.homeTeamGoals} : ${fixture.awayTeamGoals}`)
    ).toBeInTheDocument();
  });

  it('does not show the fixture score when there is no score', () => {
    const fixture = {
      ...fixturePreview,
      homeTeamGoals: null,
      awayTeamGoals: null,
    };

    render(<FixtureHeader fixture={fixture} />);

    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
