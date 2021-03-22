import Event from '../../event/data/Event';
import FixturePreview from './FixturePreview';

type Fixture = FixturePreview & {
  events: Event[];
};

export default Fixture;
