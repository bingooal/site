import makeRequest from '../../../../services/request';
import { GetFixtures, GetFixture } from '../indexBackend';

export const getFixtures: GetFixtures = async () =>
  makeRequest({
    method: 'get',
    url: `${window.location.origin}/api/fixtures`,
  });

export const getFixture: GetFixture = async (id: string) =>
  makeRequest({
    method: 'get',
    url: `${window.location.origin}/api/fixtures/${id}`,
  });
