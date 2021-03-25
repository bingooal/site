import dayjs from 'dayjs';
import { FOOTBALL_API_KEY, IS_DEV_ENV } from '../../../../config';
import makeRequest from '../../../../services/request';
import { generateEvents } from '../../../event/services/eventGenerator';
import { GetFixture, GetFixtures } from '../indexBackend';
import { idsOfLeaguesWeWatch } from './apiFootballLeagues';
import { mockFixturesData } from './mockApiFootballData/fixtures';
import {
  ApiFootballFixture,
  mockPastFixture,
} from './mockApiFootballData/pastFixture';

const makeRequestToApiFootball = async ({
  method,
  path,
  params,
}: {
  method: string;
  path: string;
  params?: unknown;
}) => {
  const res = await makeRequest({
    method,
    url: `https://v3.football.api-sports.io/${path}`,
    params,
    headers: {
      'x-rapidapi-key': FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  });
  return res.response;
};

// https://www.api-football.com/documentation-v3#operation/get-fixtures
const getFixtureFromApiFootball = async (
  fixtureId: string
): Promise<ApiFootballFixture> => {
  const fixtures = await makeRequestToApiFootball({
    method: 'GET',
    path: 'fixtures',
    params: { id: fixtureId },
  });
  return fixtures[0];
};

const extractPlayerNames = (
  lineups: ApiFootballFixture['lineups']
): string[] => {
  if (!lineups.length) {
    return [];
  }
  const [homeLineupData, awayLineupData] = lineups;
  const homePlayers = homeLineupData.startXI;
  const awayPlayers = awayLineupData.startXI;
  const playersData = homePlayers.concat(awayPlayers);
  const playerNames = playersData.map(({ player: { name } }) => name);
  return playerNames;
};

export const getFixture: GetFixture = async (fixtureId) => {
  const fixtureData: ApiFootballFixture = IS_DEV_ENV
    ? mockPastFixture
    : await getFixtureFromApiFootball(fixtureId);

  const {
    teams: { home, away },
    lineups,
  } = fixtureData;

  const playerNames = extractPlayerNames(lineups);
  const actions = ['scores a goal'];
  const events = generateEvents(playerNames, actions);

  return {
    homeTeamName: home.name,
    awayTeamName: away.name,
    id: fixtureId,
    events,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getLeaguePreviews = async () => {
  const data = await makeRequestToApiFootball({
    method: 'GET',
    path: 'leagues',
    params: {
      current: 'true',
    },
  });
  return data.map(({ league: { id, name }, country }) => ({
    id,
    name,
    country: country.name,
  }));
};

// https://www.api-football.com/documentation-v3#operation/get-fixtures
export const getFixtures: GetFixtures = async () => {
  const data = IS_DEV_ENV
    ? mockFixturesData
    : await makeRequestToApiFootball({
        method: 'GET',
        path: 'fixtures',
        params: {
          date: dayjs().format('YYYY-MM-DD'),
          season: 2020,
          timezone: 'Europe/London',
        },
      });
  return data
    .filter(({ league }) => idsOfLeaguesWeWatch.includes(league.id))
    .map(({ fixture, teams }) => ({
      id: `${fixture.id}`,
      homeTeamName: teams.home.name,
      awayTeamName: teams.away.name,
    }));
};
