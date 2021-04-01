import Event from '../../event/data/Event';
import FixturePreview from './FixturePreview';

type Fixture = FixturePreview & {
  events: Event[];
};

export type FootballPlayer = {
  name: string;
  imageUrl: string;
};

export default Fixture;
