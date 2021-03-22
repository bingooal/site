import FixturePreview from '../data/FixturePreview';
import Fixture from '../data/Fixture';
import {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  getFixturesFromApiFootball,
  mockGetFixturesFromApiFootball,
  mockGetFixtureFromApiFootball,
  /* eslint-enable @typescript-eslint/no-unused-vars */
} from './adapter/api-football';

export type GetFixtures = () => Promise<FixturePreview[]>;
export const getFixtures: GetFixtures = mockGetFixturesFromApiFootball;
// export const getFixtures: GetFixtures = getFixturesFromApiFootball;

export type GetFixture = (id: string) => Promise<Fixture>;
export const getFixture: GetFixture = mockGetFixtureFromApiFootball;
