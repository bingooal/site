import {
  GetFixture,
  GetFixtures,
  GetUsersPlayingFixture,
} from './indexBackend';
import {
  getFixtures as getFixturesFromBingoal,
  getFixture as getFixtureFromBingoal,
  getUsersPlayingFixture as getUsersPlayingFixtureFromBingoal,
} from './adapter/bingoal';

export const getFixtures: GetFixtures = getFixturesFromBingoal;

export const getFixture: GetFixture = getFixtureFromBingoal;

export const getUsersPlayingFixture: GetUsersPlayingFixture = getUsersPlayingFixtureFromBingoal;
