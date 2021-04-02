import makeRequest from '../../../../services/request';
import { GetFixtures, GetFixture, GetLeaderboard } from '../indexBackend';

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

export const getLeaderboard: GetLeaderboard = async (id: string) =>
  makeRequest({
    method: 'get',
    url: `${window.location.origin}/api/fixtures/${id}/leaderboard`,
  });
