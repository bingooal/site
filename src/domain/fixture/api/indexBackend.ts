import Fixture from '../data/Fixture';
import FixturePreview from '../data/FixturePreview';
import Leaderboard from '../data/Leaderboard';
import {
  getFixture as getFixtureFromApiFootball,
  getFixtures as getFixturesFromApiFootball,
} from './adapter/api-football';

export type GetFixtures = () => Promise<FixturePreview[]>;
export const getFixtures = getFixturesFromApiFootball;

export type GetFixture = (id: string) => Promise<Fixture>;
export const getFixture = getFixtureFromApiFootball;

export type GetLeaderboard = (id: string) => Promise<Leaderboard>;
export { getLeaderboard } from './adapter/getLeaderboard';
