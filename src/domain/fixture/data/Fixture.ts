import Event from '../../event/data/Event';
import FixturePreview from './FixturePreview';

type Fixture = FixturePreview & {
  events: Event[];
};

export type FootballPlayer = {
  id: number;
  name: string;
  imageUrl?: string;
};

export default Fixture;
