import Event from '../../event/data/Event';
import { ApiFootballFixtureStatus } from '../api/adapter/mockApiFootballData/types';
import FixturePreview from './FixturePreview';

type Fixture = FixturePreview & {
  events: Event[];
};

export type FootballPlayer = {
  id: number;
  name: string;
  imageUrl?: string;
};

export const FixtureStatus = {
  Postponed: ApiFootballFixtureStatus.MatchPostponed,
  HalfTime: ApiFootballFixtureStatus.HalfTime,
  FullTime: ApiFootballFixtureStatus.MatchFinished,
  ExtraTimeBreak: ApiFootballFixtureStatus.ExtraTimeBreak,
  Penalties: ApiFootballFixtureStatus.PenaltyInProgress,
  FinishedAfterPenalties: ApiFootballFixtureStatus.MatchFinishedAfterPenalties,
};

export default Fixture;
