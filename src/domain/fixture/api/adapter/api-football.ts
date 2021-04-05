import dayjs from 'dayjs';
import { FOOTBALL_API_KEY, IS_PROD_ENV } from '../../../../config';
import makeRequest from '../../../../services/request';
import { generateEvents } from '../../../event/services/eventGenerator';
import { GetFixture, GetFixtures } from '../indexBackend';
import { FootballPlayer } from '../../data/Fixture';
import { idsOfLeaguesWeWatch } from './apiFootballLeagues';
import { mockFixturesData } from './mockApiFootballData/fixtures';
import {
  ApiFootballFixture,
  ApiFootballLineups,
  ApiFootballPlayer,
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

enum Action {
  TakesAShot = 'takes a shot',
  TakesAShotOnTarget = 'takes a shot on target',
  ScoresAGoal = 'scores a goal',
  AssistsAGoal = 'assists a goal',
  MakesASave = 'makes a save',
  PlaysAKeyPass = 'plays a key pass',
  MakesATackle = 'makes a tackle',
  BlocksAShot = 'blocks a shot',
  InterceptsAPass = 'intercepts a pass',
  DribblesPastAPlayer = 'dribbles past a player',
  CommitsAFoul = 'commits a foul',
  DrawsAFoul = 'draws a foul',
  ReceivesAYellowCard = 'receives a yellow card',
  ReceivesARedCard = 'receives a red card',
  WinsOrScoresAPenalty = 'wins or scores a penalty',
  ConcedesAPenalty = 'concedes a penalty',
}

const actions: Action[] = [
  // first 11
  Action.MakesASave,
  Action.ConcedesAPenalty,
  Action.ReceivesARedCard,
  Action.CommitsAFoul,
  Action.MakesATackle,
  Action.InterceptsAPass,
  Action.PlaysAKeyPass,
  Action.MakesATackle,
  Action.BlocksAShot,
  Action.ReceivesAYellowCard,
  Action.TakesAShot,
  // next 11
  Action.MakesASave,
  Action.ConcedesAPenalty,
  Action.BlocksAShot,
  Action.ReceivesAYellowCard,
  Action.AssistsAGoal,
  Action.DrawsAFoul,
  Action.ScoresAGoal,
  Action.WinsOrScoresAPenalty,
  Action.MakesATackle,
  Action.DribblesPastAPlayer,
  Action.TakesAShotOnTarget,
];

const extractPlayerNamesFromLineups = (
  lineups: ApiFootballLineups
): string[] => {
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

  const {
    teams: { home, away },
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
    homeTeamName: home.name,
    awayTeamName: away.name,
    homeTeamLogo: home.logo,
    awayTeamLogo: away.logo,
    events: generatedEvents,
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
  const data = IS_PROD_ENV
    ? await makeRequestToApiFootball({
        method: 'GET',
        path: 'fixtures',
        params: {
          date: dayjs().format('YYYY-MM-DD'),
          season: 2020,
          timezone: 'Europe/London',
        },
      })
    : mockFixturesData;
  return data
    .filter(({ league }) => idsOfLeaguesWeWatch.includes(league.id))
    .map(({ fixture, teams }) => ({
      id: `${fixture.id}`,
      homeTeamName: teams.home.name,
      awayTeamName: teams.away.name,
      homeTeamLogo: teams.home.logo,
      awayTeamLogo: teams.away.logo,
    }));
};
