import { GetFixture, GetFixtures, GetLeaderboard } from './indexBackend';
import {
  getFixtures as getFixturesFromBingoal,
  getFixture as getFixtureFromBingoal,
  getLeaderboard as getLeaderboardFromBingoal,
} from './adapter/bingoal';

export const getFixtures: GetFixtures = getFixturesFromBingoal;

export const getFixture: GetFixture = getFixtureFromBingoal;

export const getLeaderboard: GetLeaderboard = getLeaderboardFromBingoal;
