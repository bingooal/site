import makeRequest from '../../../../services/request';
import {
  GetFixtures,
  GetFixture,
  GetUsersPlayingFixture,
} from '../indexBackend';

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

export const getUsersPlayingFixture: GetUsersPlayingFixture = async (
  id: string
) =>
  makeRequest({
    method: 'get',
    url: `${window.location.origin}/api/fixtures/${id}/users`,
  });
