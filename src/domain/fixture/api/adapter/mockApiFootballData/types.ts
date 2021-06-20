import { mockFutureFixture } from './futureFixture';
import { mockImminentFixture } from './imminentFixture';
import { mockPastFixture } from './pastFixture';

type PastFixture = typeof mockPastFixture;
type ImminentFixture = typeof mockImminentFixture;
type FutureFixture = typeof mockFutureFixture;

export type ApiFootballFixture = PastFixture | ImminentFixture | FutureFixture;

export type ApiFootballLineups = (PastFixture | ImminentFixture)['lineups'];

export type ApiFootballPlayer = PastFixture['players'][0]['players'][0];

export enum ApiFootballFixtureStatus {
  TimeToBeDefined = 'TBD',
  NotStarted = 'NS',
  FirstHalfStarted = '1H',
  HalfTime = 'HT',
  SecondHalfStarted = '2H',
  ExtraTime = 'ET',
  PenaltyInProgress = 'P',
  MatchFinished = 'FT',
  MatchFinishedAfterExtraTime = 'AET',
  MatchFinishedAfterPenalties = 'PEN',
  ExtraTimeBreak = 'BT',
  MatchSuspended = 'SUSP',
  MatchInterrupted = 'INT',
  MatchPostponed = 'PST',
  MatchCancelled = 'CANC',
  MatchAbandoned = 'ABD',
  TechnicalLoss = 'AWD',
  WalkOver = 'WO',
}
