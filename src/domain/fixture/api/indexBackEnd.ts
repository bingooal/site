import FixturePreview from '../data/FixturePreview';
import Fixture from '../data/Fixture';
import {
  getFixtures as getFixturesFromApiFootball,
  getFixture as getFixtureFromApiFootball,
} from './adapter/api-football';

export type GetFixtures = () => Promise<FixturePreview[]>;
export const getFixtures: GetFixtures = getFixturesFromApiFootball;

export type GetFixture = (id: string) => Promise<Fixture>;
export const getFixture: GetFixture = getFixtureFromApiFootball;
