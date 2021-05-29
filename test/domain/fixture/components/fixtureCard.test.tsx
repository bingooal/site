import FixtureCard from '../../../../src/domain/fixture/components/fixtureCard';
import { FixtureStatus as Status } from '../../../../src/domain/fixture/data/Fixture';
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
      homeTeamGoals: 0,
      awayTeamGoals: 1,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText(0)).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it("shows 'Postponed' when the fixture is postponed", () => {
    const fixture = {
      ...fixturePreview,
      status: Status.Postponed,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText('Postponed')).toBeInTheDocument();
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

  it('shows minutes played during the fixture', () => {
    const fixture = {
      ...fixturePreview,
      minute: 1,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText(`${1}'`)).toBeInTheDocument();
  });

  it("shows 'Half time' when it's half time", () => {
    const fixture = {
      ...fixturePreview,
      status: Status.HalfTime,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText('Half time')).toBeInTheDocument();
  });

  it("shows 'Extra time break' when it's in the extra time break", () => {
    const fixture = {
      ...fixturePreview,
      status: Status.ExtraTimeBreak,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText('Extra time break')).toBeInTheDocument();
  });

  it("shows 'Penalities' when it's in penalties", () => {
    const fixture = {
      ...fixturePreview,
      status: Status.Penalties,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText('Penalties')).toBeInTheDocument();
  });

  it("shows 'Full time' after the fixture finishes (without penalties)", () => {
    const fixture = {
      ...fixturePreview,
      status: Status.FullTime,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText('Full time')).toBeInTheDocument();
  });

  it("shows 'Full time' after the fixture finishes (after penalties)", () => {
    const fixture = {
      ...fixturePreview,
      status: Status.FinishedAfterPenalties,
      minute: 120,
    };

    render(<FixtureCard fixture={fixture} />);

    expect(screen.getByText('Full time')).toBeInTheDocument();
  });
});
