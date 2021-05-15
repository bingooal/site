// A future fixture has no lineups, fixture stats nor player stats
export const mockFutureFixture = {
  fixture: {
    id: 650925,
    referee: 'K. Levnikov',
    timezone: 'UTC',
    date: '2021-03-25T19:45:00+00:00',
    timestamp: 1616701500,
    periods: {
      first: null,
      second: null,
    },
    venue: {
      id: 489,
      name: 'Wembley Stadium',
      city: 'London',
    },
    status: {
      long: 'Not Started',
      short: 'NS',
      elapsed: null,
    },
  },
  league: {
    id: 32,
    name: 'World Cup - Qualification Europe',
    country: 'World',
    logo: 'https://media.api-sports.io/football/leagues/32.png',
    flag: null,
    season: 2020,
    round: 'Group Stage - 1',
  },
  teams: {
    home: {
      id: 10,
      name: 'England',
      logo: 'https://media.api-sports.io/football/teams/10.png',
      winner: null,
    },
    away: {
      id: 1115,
      name: 'San Marino',
      logo: 'https://media.api-sports.io/football/teams/1115.png',
      winner: null,
    },
  },
  goals: {
    home: null,
    away: null,
  },
  score: {
    halftime: {
      home: null,
      away: null,
    },
    fulltime: {
      home: null,
      away: null,
    },
    extratime: {
      home: null,
      away: null,
    },
    penalty: {
      home: null,
      away: null,
    },
  },
  events: [],
  lineups: [],
  statistics: [],
  players: [],
};
