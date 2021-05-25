import LeaderboardPage from '../../../../src/pages/fixtures/[id]/leaderboard';
import { fixturePreview } from '../../../mockData';
import { render, screen, within } from '../../../testUtils';

describe('Leaderboard page', () => {
  it('shows the Bingooal header', () => {
    render(<LeaderboardPage fixture={fixturePreview} leaderboard={null} />);

    const header = screen.getByRole('banner');
    expect(within(header).getByText('Bingooal')).toBeInTheDocument();
  });
});
