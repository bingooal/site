// date: '2021-03-21', (Leiceister vs Manchester United in the FA Cup)
// season: 2020,
// filtered by leaguesWeWatch
export const mockPastFixtures = [
  {
    fixture: {
      id: 676091,
      referee: 'A. Madley',
      timezone: 'Europe/London',
      date: '2021-03-21T13:30:00+00:00',
      timestamp: 1616333400,
      periods: { first: 1616333400, second: 1616337000 },
      venue: { id: 519, name: 'Stamford Bridge', city: 'London' },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 45,
      name: 'FA Cup',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/45.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: 2020,
      round: 'Quarter-finals',
    },
    teams: {
      home: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
        winner: true,
      },
      away: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media.api-sports.io/football/teams/62.png',
        winner: false,
      },
    },
    goals: { home: 2, away: 0 },
    score: {
      halftime: { home: 1, away: 0 },
      fulltime: { home: 2, away: 0 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 592785,
      referee: 'Jonathan Moss, England',
      timezone: 'Europe/London',
      date: '2021-03-21T15:00:00+00:00',
      timestamp: 1616338800,
      periods: { first: 1616338800, second: 1616342400 },
      venue: { id: 598, name: 'London Stadium', city: 'London' },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/39.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: 2020,
      round: 'Regular Season - 29',
    },
    teams: {
      home: {
        id: 48,
        name: 'West Ham',
        logo: 'https://media.api-sports.io/football/teams/48.png',
        winner: null,
      },
      away: {
        id: 42,
        name: 'Arsenal',
        logo: 'https://media.api-sports.io/football/teams/42.png',
        winner: null,
      },
    },
    goals: { home: 3, away: 3 },
    score: {
      halftime: { home: 3, away: 1 },
      fulltime: { home: 3, away: 3 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 676090,
      referee: 'C. Pawson',
      timezone: 'Europe/London',
      date: '2021-03-21T17:00:00+00:00',
      timestamp: 1616346000,
      periods: { first: 1616346000, second: 1616349600 },
      venue: {
        id: 547,
        name: 'King Power Stadium',
        city: 'Leicester, Leicestershire',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 45,
      name: 'FA Cup',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/45.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: 2020,
      round: 'Quarter-finals',
    },
    teams: {
      home: {
        id: 46,
        name: 'Leicester',
        logo: 'https://media.api-sports.io/football/teams/46.png',
        winner: true,
      },
      away: {
        id: 33,
        name: 'Manchester United',
        logo: 'https://media.api-sports.io/football/teams/33.png',
        winner: false,
      },
    },
    goals: { home: 3, away: 1 },
    score: {
      halftime: { home: 1, away: 1 },
      fulltime: { home: 3, away: 1 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
];

export const mockFutureFixtures = [
  {
    fixture: {
      id: 592821,
      referee: 'Andre Marriner, England',
      timezone: 'Europe/London',
      date: '2021-04-24T12:30:00+01:00',
      timestamp: 1619263800,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 550,
        name: 'Anfield',
        city: 'Liverpool',
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/39.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: 2020,
      round: 'Regular Season - 33',
    },
    teams: {
      home: {
        id: 40,
        name: 'Liverpool',
        logo: 'https://media.api-sports.io/football/teams/40.png',
        winner: null,
      },
      away: {
        id: 34,
        name: 'Newcastle',
        logo: 'https://media.api-sports.io/football/teams/34.png',
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
  },
];

export const mockFixtures = [
  ...mockPastFixtures,
  ...mockFutureFixtures,
];

export type ApiFootballFixtures = typeof mockFixtures;
