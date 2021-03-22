import makeRequest from '../../../../services/request';
import { mockFixture } from '../../data/Fixture';
import { mockFixturePreviews } from '../../data/FixturePreview';
import { GetFixture, GetFixtures } from '../indexBackEnd';

const makeRequestToApiFootball = async ({ method, path, params }) => {
  const res = await makeRequest({
    method,
    url: `https://v3.football.api-sports.io/${path}`,
    params,
    headers: {
      'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  });
  return res.response;
};

export const mockGetFixtureFromApiFootball: GetFixture = async () =>
  mockFixture;

export const getFixturesFromApiFootball: GetFixtures = async () => {
  const data = await makeRequestToApiFootball({
    method: 'GET',
    path: 'fixtures',
    params: {
      date: '2021-03-20',
      league: '40',
      season: 2020,
      timezone: 'Europe/London',
    },
  });
  return data.map(({ fixture, teams }) => ({
    id: `${fixture.id}`,
    homeTeamName: teams.home.name,
    awayTeamName: teams.away.name,
  }));
};

export const mockGetFixturesFromApiFootball: GetFixtures = async () =>
  mockFixturePreviews;
