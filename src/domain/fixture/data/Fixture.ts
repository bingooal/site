import Event, { mockEvents } from '../../event/data/Event';
import FixturePreview from './FixturePreview';

type Fixture = FixturePreview & {
  events: Event[];
};

export const mockFixture = {
  homeTeamName: 'Barnsley',
  awayTeamName: 'Sheffield Wednesday',
  id: '593320',
  events: mockEvents,
};

export default Fixture;
