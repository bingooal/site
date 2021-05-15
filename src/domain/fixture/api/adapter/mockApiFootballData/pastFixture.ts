// A past fixture has:
// fixture
// league
// teams
// goals
// score
// events
// lineups
// statistics
// players
export const mockPastFixture = {
  fixture: {
    id: 593320,
    referee: 'Tim Robinson, England',
    timezone: 'UTC',
    date: '2021-03-20T15:00:00+00:00',
    timestamp: 1616252400,
    periods: {
      first: 1616252400,
      second: 1616256000,
    },
    venue: {
      id: 497,
      name: 'Oakwell',
      city: 'Barnsley, South Yorkshire',
    },
    status: {
      long: 'Match Finished',
      short: 'FT',
      elapsed: 90,
    },
  },
  league: {
    id: 40,
    name: 'Championship',
    country: 'England',
    logo: 'https://media.api-sports.io/football/leagues/40.png',
    flag: 'https://media.api-sports.io/flags/gb.svg',
    season: 2020,
    round: 'Regular Season - 38',
  },
  teams: {
    home: {
      id: 747,
      name: 'Barnsley',
      logo: 'https://media.api-sports.io/football/teams/747.png',
      winner: false,
    },
    away: {
      id: 74,
      name: 'Sheffield Wednesday',
      logo: 'https://media.api-sports.io/football/teams/74.png',
      winner: true,
    },
  },
  goals: {
    home: 1,
    away: 2,
  },
  score: {
    halftime: {
      home: 0,
      away: 1,
    },
    fulltime: {
      home: 1,
      away: 2,
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
  events: [
    {
      time: {
        elapsed: 25,
        extra: null,
      },
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      player: {
        id: 19378,
        name: 'T. Lees',
      },
      assist: {
        id: null,
        name: null,
      },
      type: 'Card',
      detail: 'Yellow Card',
      comments: null,
    },
    {
      time: {
        elapsed: 36,
        extra: null,
      },
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      player: {
        id: 25006,
        name: 'J. Borner',
      },
      assist: {
        id: null,
        name: null,
      },
      type: 'Card',
      detail: 'Yellow Card',
      comments: null,
    },
    {
      time: {
        elapsed: 38,
        extra: null,
      },
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      player: {
        id: 19086,
        name: 'J. Rhodes',
      },
      assist: {
        id: null,
        name: null,
      },
      type: 'Goal',
      detail: 'Normal Goal',
      comments: null,
    },
    {
      time: {
        elapsed: 46,
        extra: null,
      },
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
      },
      player: {
        id: 20363,
        name: 'T. Sibbick',
      },
      assist: {
        id: 7554,
        name: 'M. Sollbauer',
      },
      type: 'subst',
      detail: 'Substitution 1',
      comments: null,
    },
    {
      time: {
        elapsed: 46,
        extra: null,
      },
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
      },
      player: {
        id: 19123,
        name: 'A. Halme',
      },
      assist: {
        id: null,
        name: '590363',
      },
      type: 'subst',
      detail: 'Substitution 2',
      comments: null,
    },
    {
      time: {
        elapsed: 46,
        extra: null,
      },
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
      },
      player: {
        id: 19083,
        name: 'C. Morris',
      },
      assist: {
        id: 7533,
        name: 'D. Frieser',
      },
      type: 'subst',
      detail: 'Substitution 3',
      comments: null,
    },
    {
      time: {
        elapsed: 53,
        extra: null,
      },
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      player: {
        id: 19086,
        name: 'J. Rhodes',
      },
      assist: {
        id: 19566,
        name: 'J. Windass',
      },
      type: 'Goal',
      detail: 'Normal Goal',
      comments: null,
    },
    {
      time: {
        elapsed: 68,
        extra: null,
      },
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
      },
      player: {
        id: 20007,
        name: 'C. Chaplin',
      },
      assist: {
        id: 19808,
        name: 'C. Woodrow',
      },
      type: 'subst',
      detail: 'Substitution 4',
      comments: null,
    },
    {
      time: {
        elapsed: 71,
        extra: null,
      },
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
      },
      player: {
        id: 19123,
        name: 'A. Halme',
      },
      assist: {
        id: null,
        name: null,
      },
      type: 'Card',
      detail: 'Yellow Card',
      comments: null,
    },
    {
      time: {
        elapsed: 78,
        extra: null,
      },
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
      },
      player: {
        id: 19083,
        name: 'C. Morris',
      },
      assist: {
        id: 19123,
        name: 'A. Halme',
      },
      type: 'Goal',
      detail: 'Normal Goal',
      comments: null,
    },
    {
      time: {
        elapsed: 84,
        extra: null,
      },
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      player: {
        id: 19196,
        name: 'A. Green',
      },
      assist: {
        id: 19566,
        name: 'J. Windass',
      },
      type: 'subst',
      detail: 'Substitution 1',
      comments: null,
    },
    {
      time: {
        elapsed: 87,
        extra: null,
      },
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      player: {
        id: 18993,
        name: 'C. Paterson',
      },
      assist: {
        id: null,
        name: null,
      },
      type: 'Card',
      detail: 'Yellow Card',
      comments: null,
    },
    {
      time: {
        elapsed: 88,
        extra: null,
      },
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      player: {
        id: 19369,
        name: 'J. Wildsmith',
      },
      assist: {
        id: null,
        name: null,
      },
      type: 'Card',
      detail: 'Yellow Card',
      comments: null,
    },
  ],
  lineups: [
    {
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
      },
      formation: '3-4-2-1',
      startXI: [
        {
          player: {
            id: 20016,
            name: 'Bradley Collins',
            number: 40,
            pos: 'G',
          },
        },
        {
          player: {
            id: 7554,
            name: 'Michael Sollbauer',
            number: 26,
            pos: 'D',
          },
        },
        {
          player: {
            id: 40495,
            name: 'Michał Helik',
            number: 30,
            pos: 'D',
          },
        },
        {
          player: {
            id: 15632,
            name: 'Mads Juel Andersen',
            number: 6,
            pos: 'D',
          },
        },
        {
          player: {
            id: 17421,
            name: 'Callum Brittain',
            number: 7,
            pos: 'M',
          },
        },
        {
          player: {
            id: 194833,
            name: 'Romal Palmer',
            number: 21,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19799,
            name: 'Alex Mowatt',
            number: 27,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19806,
            name: 'Callum Styles',
            number: 4,
            pos: 'M',
          },
        },
        {
          player: {
            id: 7533,
            name: 'Dominik Frieser',
            number: 28,
            pos: 'F',
          },
        },
        {
          player: {
            id: 19808,
            name: 'Cauley Woodrow',
            number: 9,
            pos: 'F',
          },
        },
        {
          player: {
            id: 201709,
            name: 'Daryl Dike',
            number: 10,
            pos: 'F',
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 19782,
            name: 'Jack Walton',
            number: 1,
            pos: 'G',
          },
        },
        {
          player: {
            id: 19123,
            name: 'Aapo Halme',
            number: 24,
            pos: 'D',
          },
        },
        {
          player: {
            id: 106713,
            name: 'Jasper Moon',
            number: 34,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19138,
            name: 'Clarke Oduor',
            number: 22,
            pos: 'F',
          },
        },
        {
          player: {
            id: 20363,
            name: 'Toby Sibbick',
            number: 20,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19791,
            name: 'Jordan Williams',
            number: 2,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19801,
            name: 'Victor Adeboyejo',
            number: 29,
            pos: 'F',
          },
        },
        {
          player: {
            id: 20007,
            name: 'Conor Chaplin',
            number: 11,
            pos: 'F',
          },
        },
        {
          player: {
            id: 19083,
            name: 'Carlton Morris',
            number: 14,
            pos: 'F',
          },
        },
      ],
      coach: {
        id: 1923,
        name: 'V. Ismaël',
      },
    },
    {
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      formation: '3-4-2-1',
      startXI: [
        {
          player: {
            id: 19369,
            name: 'Joe Wildsmith',
            number: 28,
            pos: 'G',
          },
        },
        {
          player: {
            id: 191970,
            name: 'Osaze Urhoghide',
            number: 19,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19378,
            name: 'Tom Lees',
            number: 15,
            pos: 'D',
          },
        },
        {
          player: {
            id: 25006,
            name: 'Julian Börner',
            number: 13,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19394,
            name: 'Liam Palmer',
            number: 2,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19395,
            name: 'Joey Pelupessy',
            number: 8,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19387,
            name: 'Barry Bannan',
            number: 10,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19382,
            name: 'Adam Reach',
            number: 11,
            pos: 'M',
          },
        },
        {
          player: {
            id: 18993,
            name: 'Callum Paterson',
            number: 5,
            pos: 'F',
          },
        },
        {
          player: {
            id: 19566,
            name: 'Josh Windass',
            number: 18,
            pos: 'F',
          },
        },
        {
          player: {
            id: 19086,
            name: 'Jordan Rhodes',
            number: 20,
            pos: 'F',
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 296024,
            name: 'Luke Jackson',
            number: 44,
            pos: 'G',
          },
        },
        {
          player: {
            id: 204031,
            name: 'Ciaran Brennan',
            number: 34,
            pos: 'D',
          },
        },
        {
          player: {
            id: 296955,
            name: 'Ryan Galvin',
            number: 37,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19380,
            name: 'Matt Penney',
            number: 14,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19000,
            name: 'Kadeem Harris',
            number: 7,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19135,
            name: 'Isaiah Brown',
            number: 24,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19389,
            name: 'Alex Hunt',
            number: 29,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19058,
            name: 'Elias Kachunga',
            number: 45,
            pos: 'F',
          },
        },
        {
          player: {
            id: 19196,
            name: 'Andre Green',
            number: 16,
            pos: 'M',
          },
        },
      ],
      coach: {
        id: 13539,
        name: 'N. Thompson',
      },
    },
  ],
  statistics: [
    {
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
      },
      statistics: [
        {
          type: 'Shots on Goal',
          value: 4,
        },
        {
          type: 'Shots off Goal',
          value: 4,
        },
        {
          type: 'Total Shots',
          value: 9,
        },
        {
          type: 'Blocked Shots',
          value: 1,
        },
        {
          type: 'Shots insidebox',
          value: 6,
        },
        {
          type: 'Shots outsidebox',
          value: 3,
        },
        {
          type: 'Fouls',
          value: 8,
        },
        {
          type: 'Corner Kicks',
          value: 6,
        },
        {
          type: 'Offsides',
          value: 1,
        },
        {
          type: 'Ball Possession',
          value: '53%',
        },
        {
          type: 'Yellow Cards',
          value: 1,
        },
        {
          type: 'Red Cards',
          value: null,
        },
        {
          type: 'Goalkeeper Saves',
          value: null,
        },
        {
          type: 'Total passes',
          value: 383,
        },
        {
          type: 'Passes accurate',
          value: 189,
        },
        {
          type: 'Passes %',
          value: '49%',
        },
      ],
    },
    {
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
      },
      statistics: [
        {
          type: 'Shots on Goal',
          value: 2,
        },
        {
          type: 'Shots off Goal',
          value: 3,
        },
        {
          type: 'Total Shots',
          value: 6,
        },
        {
          type: 'Blocked Shots',
          value: 1,
        },
        {
          type: 'Shots insidebox',
          value: 6,
        },
        {
          type: 'Shots outsidebox',
          value: null,
        },
        {
          type: 'Fouls',
          value: 17,
        },
        {
          type: 'Corner Kicks',
          value: 2,
        },
        {
          type: 'Offsides',
          value: 5,
        },
        {
          type: 'Ball Possession',
          value: '47%',
        },
        {
          type: 'Yellow Cards',
          value: 4,
        },
        {
          type: 'Red Cards',
          value: null,
        },
        {
          type: 'Goalkeeper Saves',
          value: 3,
        },
        {
          type: 'Total passes',
          value: 347,
        },
        {
          type: 'Passes accurate',
          value: 170,
        },
        {
          type: 'Passes %',
          value: '49%',
        },
      ],
    },
  ],
  players: [
    {
      team: {
        id: 747,
        name: 'Barnsley',
        logo: 'https://media.api-sports.io/football/teams/747.png',
        update: '2021-03-21T02:31:04+00:00',
      },
      players: [
        {
          player: {
            id: 20016,
            name: 'Bradley Collins',
            photo: 'https://media.api-sports.io/football/players/20016.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 40,
                position: 'G',
                rating: '6',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 2,
                assists: null,
                saves: null,
              },
              passes: {
                total: 39,
                key: null,
                accuracy: '12',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 7554,
            name: 'Michael Sollbauer',
            photo: 'https://media.api-sports.io/football/players/7554.png',
          },
          statistics: [
            {
              games: {
                minutes: 45,
                number: 26,
                position: 'D',
                rating: '6.5',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 15,
                key: null,
                accuracy: '8',
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: 3,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 40495,
            name: 'Michał Helik',
            photo: 'https://media.api-sports.io/football/players/40495.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 30,
                position: 'D',
                rating: '6.9',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 35,
                key: 1,
                accuracy: '16',
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 17,
                won: 11,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 15632,
            name: 'Mads Juel Andersen',
            photo: 'https://media.api-sports.io/football/players/15632.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 6,
                position: 'D',
                rating: '6.2',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 51,
                key: null,
                accuracy: '19',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 14,
                won: 9,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 17421,
            name: 'Callum Brittain',
            photo: 'https://media.api-sports.io/football/players/17421.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 7,
                position: 'M',
                rating: '6.7',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 48,
                key: null,
                accuracy: '22',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 13,
                won: 7,
              },
              dribbles: {
                attempts: 7,
                success: 4,
                past: 1,
              },
              fouls: {
                drawn: 3,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 194833,
            name: 'Romal Palmer',
            photo: 'https://media.api-sports.io/football/players/194833.png',
          },
          statistics: [
            {
              games: {
                minutes: 45,
                number: 21,
                position: 'M',
                rating: '6.5',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 15,
                key: 1,
                accuracy: '6',
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 10,
                won: 3,
              },
              dribbles: {
                attempts: 3,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19799,
            name: 'Alex Mowatt',
            photo: 'https://media.api-sports.io/football/players/19799.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 27,
                position: 'M',
                rating: '6.9',
                captain: true,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 44,
                key: 1,
                accuracy: '29',
              },
              tackles: {
                total: 1,
                blocks: 1,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 4,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19806,
            name: 'Callum Styles',
            photo: 'https://media.api-sports.io/football/players/19806.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 4,
                position: 'M',
                rating: '6.2',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 41,
                key: null,
                accuracy: '25',
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 13,
                won: 7,
              },
              dribbles: {
                attempts: 4,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 3,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 7533,
            name: 'Dominik Frieser',
            photo: 'https://media.api-sports.io/football/players/7533.png',
          },
          statistics: [
            {
              games: {
                minutes: 45,
                number: 28,
                position: 'F',
                rating: '6.9',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 10,
                key: 1,
                accuracy: '6',
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 3,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19808,
            name: 'Cauley Woodrow',
            photo: 'https://media.api-sports.io/football/players/19808.png',
          },
          statistics: [
            {
              games: {
                minutes: 68,
                number: 9,
                position: 'F',
                rating: '6.5',
                captain: false,
                substitute: false,
              },
              offsides: 1,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 18,
                key: null,
                accuracy: '11',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 17,
                won: 2,
              },
              dribbles: {
                attempts: 2,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 201709,
            name: 'Daryl Dike',
            photo: 'https://media.api-sports.io/football/players/201709.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 10,
                position: 'F',
                rating: '6.9',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 27,
                key: null,
                accuracy: '10',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 36,
                won: 18,
              },
              dribbles: {
                attempts: 4,
                success: 2,
                past: null,
              },
              fouls: {
                drawn: 6,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19782,
            name: 'Jack Walton',
            photo: 'https://media.api-sports.io/football/players/19782.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 1,
                position: 'G',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19123,
            name: 'Aapo Halme',
            photo: 'https://media.api-sports.io/football/players/19123.png',
          },
          statistics: [
            {
              games: {
                minutes: 45,
                number: 24,
                position: 'D',
                rating: '6.7',
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 11,
                key: 1,
                accuracy: '8',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 10,
                won: 4,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 106713,
            name: 'Jasper Moon',
            photo: 'https://media.api-sports.io/football/players/106713.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 34,
                position: 'D',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19138,
            name: 'Clarke Oduor',
            photo: 'https://media.api-sports.io/football/players/19138.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 22,
                position: 'F',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 20363,
            name: 'Toby Sibbick',
            photo: 'https://media.api-sports.io/football/players/20363.png',
          },
          statistics: [
            {
              games: {
                minutes: 45,
                number: 20,
                position: 'D',
                rating: '6.5',
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 12,
                key: null,
                accuracy: '7',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 3,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 2,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19791,
            name: 'Jordan Williams',
            photo: 'https://media.api-sports.io/football/players/19791.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 2,
                position: 'D',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19801,
            name: 'Victor Adeboyejo',
            photo: 'https://media.api-sports.io/football/players/19801.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 29,
                position: 'F',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 20007,
            name: 'Conor Chaplin',
            photo: 'https://media.api-sports.io/football/players/20007.png',
          },
          statistics: [
            {
              games: {
                minutes: 22,
                number: 11,
                position: 'F',
                rating: '6.7',
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 7,
                key: null,
                accuracy: '2',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: 2,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19083,
            name: 'Carlton Morris',
            photo: 'https://media.api-sports.io/football/players/19083.png',
          },
          statistics: [
            {
              games: {
                minutes: 45,
                number: 14,
                position: 'F',
                rating: '7.2',
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 10,
                key: 1,
                accuracy: '8',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 9,
                won: 2,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
      ],
    },
    {
      team: {
        id: 74,
        name: 'Sheffield Wednesday',
        logo: 'https://media.api-sports.io/football/teams/74.png',
        update: '2021-03-21T02:31:04+00:00',
      },
      players: [
        {
          player: {
            id: 19369,
            name: 'Joe Wildsmith',
            photo: 'https://media.api-sports.io/football/players/19369.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 28,
                position: 'G',
                rating: '6.6',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 1,
                assists: null,
                saves: 3,
              },
              passes: {
                total: 27,
                key: null,
                accuracy: '8',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 191970,
            name: 'Osaze Urhoghide',
            photo: 'https://media.api-sports.io/football/players/191970.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 19,
                position: 'D',
                rating: '7.3',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 30,
                key: null,
                accuracy: '8',
              },
              tackles: {
                total: 4,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 25,
                won: 16,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19378,
            name: 'Tom Lees',
            photo: 'https://media.api-sports.io/football/players/19378.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 15,
                position: 'D',
                rating: '7.3',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 30,
                key: null,
                accuracy: '14',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 5,
              },
              duels: {
                total: 19,
                won: 13,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 25006,
            name: 'Julian Börner',
            photo: 'https://media.api-sports.io/football/players/25006.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 13,
                position: 'D',
                rating: '7.9',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 36,
                key: 1,
                accuracy: '20',
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 3,
              },
              duels: {
                total: 18,
                won: 14,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 2,
                committed: 1,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19394,
            name: 'Liam Palmer',
            photo: 'https://media.api-sports.io/football/players/19394.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 2,
                position: 'M',
                rating: '6.2',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 22,
                key: null,
                accuracy: '11',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 10,
                won: 4,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 3,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19395,
            name: 'Joey Pelupessy',
            photo: 'https://media.api-sports.io/football/players/19395.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 8,
                position: 'M',
                rating: '7',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 37,
                key: 1,
                accuracy: '23',
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 3,
              },
              duels: {
                total: 9,
                won: 7,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19387,
            name: 'Barry Bannan',
            photo: 'https://media.api-sports.io/football/players/19387.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 10,
                position: 'M',
                rating: '6.9',
                captain: true,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 50,
                key: 1,
                accuracy: '30',
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: 5,
              },
              duels: {
                total: 11,
                won: 4,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19382,
            name: 'Adam Reach',
            photo: 'https://media.api-sports.io/football/players/19382.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 11,
                position: 'M',
                rating: '6',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 44,
                key: null,
                accuracy: '19',
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 12,
                won: 5,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: 3,
              },
              fouls: {
                drawn: null,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 18993,
            name: 'Callum Paterson',
            photo: 'https://media.api-sports.io/football/players/18993.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 5,
                position: 'F',
                rating: '6.5',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 21,
                key: null,
                accuracy: '8',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 26,
                won: 10,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 4,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19566,
            name: 'Josh Windass',
            photo: 'https://media.api-sports.io/football/players/19566.png',
          },
          statistics: [
            {
              games: {
                minutes: 84,
                number: 18,
                position: 'F',
                rating: '6.6',
                captain: false,
                substitute: false,
              },
              offsides: 2,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 18,
                key: 1,
                accuracy: '15',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 12,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: 3,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19086,
            name: 'Jordan Rhodes',
            photo: 'https://media.api-sports.io/football/players/19086.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 20,
                position: 'F',
                rating: '8.2',
                captain: false,
                substitute: false,
              },
              offsides: 2,
              shots: {
                total: 3,
                on: 2,
              },
              goals: {
                total: 2,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 29,
                key: 1,
                accuracy: '12',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 19,
                won: 9,
              },
              dribbles: {
                attempts: 2,
                success: 2,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 296024,
            name: 'Luke Jackson',
            photo: 'https://media.api-sports.io/football/players/296024.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 44,
                position: 'G',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 204031,
            name: 'Ciaran Brennan',
            photo: 'https://media.api-sports.io/football/players/204031.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 34,
                position: 'D',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 296955,
            name: 'Ryan Galvin',
            photo: 'https://media.api-sports.io/football/players/296955.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 37,
                position: 'D',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19380,
            name: 'Matt Penney',
            photo: 'https://media.api-sports.io/football/players/19380.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 14,
                position: 'D',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19000,
            name: 'Kadeem Harris',
            photo: 'https://media.api-sports.io/football/players/19000.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 7,
                position: 'M',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19135,
            name: 'Isaiah Brown',
            photo: 'https://media.api-sports.io/football/players/19135.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 24,
                position: 'M',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19389,
            name: 'Alex Hunt',
            photo: 'https://media.api-sports.io/football/players/19389.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 29,
                position: 'D',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19058,
            name: 'Elias Kachunga',
            photo: 'https://media.api-sports.io/football/players/19058.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 45,
                position: 'F',
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19196,
            name: 'Andre Green',
            photo: 'https://media.api-sports.io/football/players/19196.png',
          },
          statistics: [
            {
              games: {
                minutes: 12,
                number: 16,
                position: 'M',
                rating: '6.2',
                captain: false,
                substitute: true,
              },
              offsides: 1,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 3,
                key: null,
                accuracy: '2',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                commited: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
      ],
    },
  ],
};

export type ApiFootballFixture = typeof mockPastFixture;

export type ApiFootballLineups = ApiFootballFixture['lineups'];

export type ApiFootballPlayer = ApiFootballFixture['players'][0]['players'][0];

// type ApiFootballFixtureStatus =
//   | 'TBD' // Time To Be Defined
//   | 'NS' // Not Started
//   | '1H' // First Half, Kick Off
//   | 'HT' // Halftime
//   | '2H' // Second Half, 2nd Half Started
//   | 'ET' // Extra Time
//   | 'P' // Penalty In Progress
//   | 'FT' // Match Finished
//   | 'AET' // Match Finished After Extra Time
//   | 'PEN' // Match Finished After Penalty
//   | 'BT' // Break Time (in Extra Time)
//   | 'SUSP' // Match Suspended
//   | 'INT' // Match Interrupted
//   | 'PST' // Match Postponed
//   | 'CANC' // Match Cancelled
//   | 'ABD' // Match Abandoned
//   | 'AWD' // Technical Loss
//   | 'WO'; // WalkOver
