import Event, { mockEvents } from '../../event/data/Event';
import FixturePreview from './FixturePreview';

type Fixture = FixturePreview & {
  events: Event[];
};

export const mockFixture = {
  id: '593320',
  homeTeamName: 'Barnsley',
  awayTeamName: 'Sheffield Wednesday',
  events: mockEvents,
};

export default Fixture;
