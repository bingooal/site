// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dayjs from 'dayjs';
import makeRequest from '../../../../services/request';
import { generateEvents } from '../../../event/services/eventGenerator';
import { GetFixture, GetFixtures } from '../indexBackEnd';
import { idsOfLeaguesWeWatch } from './apiFootballLeagues';
import { mockFixturesData } from './mockApiFootballData/fixtures';
import { mockFixturesLineupsData } from './mockApiFootballData/fixturesLineups';

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
      'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  });
  return res.response;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPlayersStats = async (fixtureId: string): Promise<any> =>
  makeRequestToApiFootball({
    method: 'GET',
    path: 'fixtures/players',
    params: { fixture: fixtureId },
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getLineups = async (fixtureId: string): Promise<any> =>
  makeRequestToApiFootball({
    method: 'GET',
    path: 'fixtures/lineups',
    params: { fixture: fixtureId },
  });

export const getFixture: GetFixture = async (fixtureId) => {
  const actions = ['scores a goal'];

  // const [team1Data, team2Data] = await getLineups(fixtureId);
  const [team1Data, team2Data] = mockFixturesLineupsData;
  const team1Players = team1Data.startXI;
  const team2Players = team2Data.startXI;
  const playersData = team1Players.concat(team2Players);
  const playerNames = playersData.map(({ player: { name } }) => name);

  const events = generateEvents(playerNames, actions);

  return {
    // TODO check whether team 1 is home or away
    homeTeamName: team1Data.team.name,
    awayTeamName: team2Data.team.name,
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

export const getFixtures: GetFixtures = async () => {
  const data = mockFixturesData;
  // const data = await makeRequestToApiFootball({
  //   method: 'GET',
  //   path: 'fixtures',
  //   params: {
  //     date: dayjs().format('YYYY-MM-DD'),
  //     season: 2020,
  //     timezone: 'Europe/London',
  //   },
  // });
  return data
    .filter(({ league }) => idsOfLeaguesWeWatch.includes(league.id))
    .map(({ fixture, teams }) => ({
      id: `${fixture.id}`,
      homeTeamName: teams.home.name,
      awayTeamName: teams.away.name,
    }));
};
