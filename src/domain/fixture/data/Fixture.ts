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

export enum FixtureStatus {
  Postponed = 'PT',
  HalfTime = 'HT',
  FullTime = 'FT',
  ExtraTimeBreak = 'BT',
  Penalties = 'P',
  FinishedAfterPenalties = 'PEN',
}

export default Fixture;
