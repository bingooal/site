import FixturePreview from '../data/FixturePreview';
import Fixture from '../data/Fixture';
// eslint-disable-next-line import/no-cycle
import { getFixturesFromBingoal, getFixtureFromBingoal } from './adapter/bingoal';

export type GetFixtures = () => Promise<FixturePreview[]>;
export const getFixtures: GetFixtures = getFixturesFromBingoal;

export type GetFixture = (id: string) => Promise<Fixture>;
export const getFixture: GetFixture = getFixtureFromBingoal;
