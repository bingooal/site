import makeRequest from '../../../../services/request';
import { GetFixtures, GetFixture } from '../indexBackEnd';

export const getFixturesFromBingoal: GetFixtures = async () =>
  makeRequest({
    method: 'get',
    url: `${window.location.origin}/api/fixtures`,
  });

export const getFixtureFromBingoal: GetFixture = async (id: string) =>
  makeRequest({
    method: 'get',
    url: `${window.location.origin}/api/fixtures/${id}`,
  });
