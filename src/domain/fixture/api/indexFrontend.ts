import { GetFixture, GetFixtures } from './indexBackend';
import {
  getFixtures as getFixturesFromBingoal,
  getFixture as getFixtureFromBingoal,
} from './adapter/bingoal';

export const getFixtures: GetFixtures = getFixturesFromBingoal;

export const getFixture: GetFixture = getFixtureFromBingoal;
