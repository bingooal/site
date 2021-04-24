import FixtureHeader from '../../../../src/domain/fixture/components/fixtureHeader';
import { fixturePreview } from '../../../mockData';
import { render, screen } from '../../../testUtils';

const fixture = fixturePreview;
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
