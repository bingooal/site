import util from 'util';
import {
  FOOTBALL_API_KEY,
  FOOTBALL_API_KEY_2,
  IS_PROD_ENV,
} from '../../../../config';
import { dayjs } from '../../../../services/date';
import logger from '../../../../services/logger';
import makeRequest, { RequestConfig } from '../../../../services/request';
import { generateEvents } from '../../../event/services/eventGenerator';
import { FootballPlayer } from '../../data/Fixture';
import { Action, actions } from '../../services/actions';
import { GetFixture, GetFixtures } from '../indexBackend';
import { idsOfLeaguesWeWatch } from './apiFootballLeagues';
import { mockFixturesData } from './mockApiFootballData/fixtures';
import {
  ApiFootballFixture,
  ApiFootballFixtures,
  ApiFootballLineups,
  ApiFootballPlayer,
  mockPastFixture,
} from './mockApiFootballData/pastFixture';

type ApiFootballResponseBody = {
  parameters: { [parameter: string]: string };
  errors: any[];
  results: number;
  response: any[];
};

const makeRequestToApiFootball = async (requestConfig: RequestConfig) => {
  const config = {
    ...requestConfig,
    baseURL: 'https://v3.football.api-sports.io',
    headers: {
      'x-rapidapi-key': FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  };
  const res1: ApiFootballResponseBody = await makeRequest(config);
  if (!FOOTBALL_API_KEY_2 || res1.results > 0) {
    return res1.response;
  }
  logger.log(
    `[api-football.ts] makeRequestToApiFootball() returned [], trying 2nd API key. requestConfig was: ${requestConfig}, errors received: ${res1.errors}`
  );
  const configWith2ndApiKey = {
    ...config,
    headers: { ...config.headers, 'x-rapidapi-key': FOOTBALL_API_KEY_2 },
  };
  const res2: ApiFootballResponseBody = await makeRequest(configWith2ndApiKey);
  return res2.response;
};

// https://www.api-football.com/documentation-v3#operation/get-fixtures
const getFixtureFromApiFootball = async (
  fixtureId: string
): Promise<ApiFootballFixture> => {
  const fixtures = await makeRequestToApiFootball({
    method: 'GET',
    url: 'fixtures',
    params: { id: fixtureId },
    cache: {
      maxAge: dayjs.duration(1, 'minute').asMilliseconds(),
      exclude: { query: false },
    },
  });
  return fixtures[0];
};

const extractPlayerNamesFromLineups = (
  lineups: ApiFootballLineups
): string[] => {
  logger.log('[api-football.ts] lineups', lineups, '\n');
  if (!lineups.length) {
    return [];
  }
  const [homeLineupData, awayLineupData] = lineups;
  const homePlayers = homeLineupData.startXI;
  const awayPlayers = awayLineupData.startXI;
  const playersData = [...homePlayers, ...awayPlayers];
  const playerNames = playersData.map(({ player: { name } }) => name);
  return playerNames;
};

const extractPlayerAndEvents = ({ player, statistics }: ApiFootballPlayer) => {
  const statistic = statistics[0];
  const events: string[] = [];

  if (statistic.goals.saves > 0) {
    events.push(`${player.name} ${Action.MakesASave}`);
  }

  if (statistic.penalty.commited > 0) {
    events.push(`${player.name} ${Action.ConcedesAPenalty}`);
  }

  if (statistic.cards.red > 0) {
    events.push(`${player.name} ${Action.ReceivesARedCard}`);
  }

  if (statistic.cards.yellow > 0) {
    events.push(`${player.name} ${Action.ReceivesAYellowCard}`);
  }

  if (statistic.fouls.committed > 0) {
    events.push(`${player.name} ${Action.CommitsAFoul}`);
  }

  if (statistic.tackles.interceptions > 0) {
    events.push(`${player.name} ${Action.InterceptsAPass}`);
  }

  if (statistic.passes.key > 0) {
    events.push(`${player.name} ${Action.PlaysAKeyPass}`);
  }

  if (statistic.tackles.total > 0) {
    events.push(`${player.name} ${Action.MakesATackle}`);
  }

  if (statistic.tackles.blocks > 0) {
    events.push(`${player.name} ${Action.BlocksAShot}`);
  }

  if (statistic.shots.total > 0) {
    events.push(`${player.name} ${Action.TakesAShot}`);
  }

  if (statistic.dribbles.past > 0) {
    events.push(`${player.name} ${Action.DribblesPastAPlayer}`);
  }

  if (statistic.shots.on > 0) {
    events.push(`${player.name} ${Action.TakesAShotOnTarget}`);
  }

  if (statistic.goals.assists > 0) {
    events.push(`${player.name} ${Action.AssistsAGoal}`);
  }

  if (statistic.fouls.drawn > 0) {
    events.push(`${player.name} ${Action.DrawsAFoul}`);
  }

  if (statistic.goals.total > 0) {
    events.push(`${player.name} ${Action.ScoresAGoal}`);
  }

  if (statistic.penalty.won > 0 || statistic.penalty.scored > 0) {
    events.push(`${player.name} ${Action.WinsOrScoresAPenalty}`);
  }

  return {
    footballPlayer: {
      name: player.name,
      imageUrl: player.photo,
    },
    events,
  };
};

const extractPlayersAndEvents = (
  fixtureData: ApiFootballFixture
): { footballPlayers: FootballPlayer[]; occuredEventNames: string[] } => {
  const { lineups, players } = fixtureData;
  if (!lineups.length) {
    return { footballPlayers: [], occuredEventNames: [] };
  }
  const namesOfPlayersInLineup = extractPlayerNamesFromLineups(lineups);
  const [{ players: homePlayers }, { players: awayPlayers }] = players;
  const playersData = [
    ...homePlayers.map(extractPlayerAndEvents),
    ...awayPlayers.map(extractPlayerAndEvents),
  ];

  const playersAndEvents = playersData.filter(({ footballPlayer }) =>
    namesOfPlayersInLineup.includes(footballPlayer.name)
  );

  const footballPlayers = playersAndEvents.map(
    ({ footballPlayer }) => footballPlayer
  );
  const occuredEventNames = playersAndEvents.flatMap(({ events }) => events);

  return { footballPlayers, occuredEventNames };
};

export const getFixture: GetFixture = async (fixtureId) => {
  const fixtureData: ApiFootballFixture = IS_PROD_ENV
    ? await getFixtureFromApiFootball(fixtureId)
    : mockPastFixture;
  logger.log(
    `[api-football.ts] getFixture(${fixtureId}) fixtureData`,
    util.inspect(fixtureData, { depth: null })
  );

  const {
    fixture,
    teams: { home, away },
    goals: { home: homeTeamGoals, away: awayTeamGoals },
  } = fixtureData;

  const { footballPlayers, occuredEventNames } = extractPlayersAndEvents(
    fixtureData
  );

  const generatedEvents = generateEvents(
    footballPlayers,
    actions,
    occuredEventNames
  );

  return {
    id: fixtureId,
    date: fixture.date,
    status: fixture.status.short,
    minute: fixture.status.elapsed,
    homeTeamName: home.name,
    homeTeamLogo: home.logo,
    homeTeamGoals,
    awayTeamName: away.name,
    awayTeamLogo: away.logo,
    awayTeamGoals,
    events: generatedEvents,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getLeaguePreviews = async () => {
  const data = await makeRequestToApiFootball({
    method: 'GET',
    url: 'leagues',
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
const getFixturesFromApiFootball = async (): Promise<ApiFootballFixtures> => {
  const fixtures = await makeRequestToApiFootball({
    method: 'GET',
    url: 'fixtures',
    params: {
      date: dayjs().format('YYYY-MM-DD'),
      season: 2020,
      timezone: 'Europe/London',
    },
    cache: {
      maxAge: dayjs.duration(1, 'minute').asMilliseconds(),
      exclude: { query: false },
    },
  });
  return fixtures;
};

export const getFixtures: GetFixtures = async () => {
  const data = IS_PROD_ENV
    ? await getFixturesFromApiFootball()
    : mockFixturesData;
  return data
    .filter(({ league }) => idsOfLeaguesWeWatch.includes(league.id))
    .map(
      ({
        fixture,
        teams,
        goals: { home: homeTeamGoals, away: awayTeamGoals },
      }) => ({
        id: `${fixture.id}`,
        date: fixture.date,
        status: fixture.status.short,
        minute: fixture.status.elapsed,
        homeTeamName: teams.home.name,
        homeTeamLogo: teams.home.logo,
        homeTeamGoals,
        awayTeamName: teams.away.name,
        awayTeamLogo: teams.away.logo,
        awayTeamGoals,
      })
    );
};
