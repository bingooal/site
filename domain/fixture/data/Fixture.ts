import FixturePreview from './FixturePreview'

type Event = {
  imageUrl: string;
  name: string;
  points: number;
}

type Fixture = FixturePreview & {
  events: Event[];
};

export default Fixture;
