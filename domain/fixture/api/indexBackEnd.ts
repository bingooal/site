import Fixture from '../data/Fixture';
// eslint-disable-next-line import/no-cycle
import { getFixturesFromApiFootball } from './adapter/api-football';

export type GetFixtures = () => Promise<Fixture[]>;
export const getFixtures: GetFixtures = getFixturesFromApiFootball;
