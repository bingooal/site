import Fixture from '../data/Fixture';
// eslint-disable-next-line import/no-cycle
import { getFixturesFromBingoal } from './adapter/bingoal';

export type GetFixtures = () => Promise<Fixture[]>;
export const getFixtures: GetFixtures = getFixturesFromBingoal;
