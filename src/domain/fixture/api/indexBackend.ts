import FixturePreview from '../data/FixturePreview';
import Fixture from '../data/Fixture';

export type GetFixtures = () => Promise<FixturePreview[]>;
export type GetFixture = (id: string) => Promise<Fixture>;
export { getFixtures, getFixture } from './adapter/api-football';

export type GetUsersPlayingFixture = (id: string) => Promise<number>;
export { getUsersPlayingFixture } from './adapter/getUsersPlayingFixture';
