// A fixture can have `lineups` and `events` with short player names,
// but `players` with long player names
export const mockPastFixtureWithShortNamesInLineup = {
  fixture: {
    id: 676091,
    referee: 'Andy Madley, England',
    timezone: 'UTC',
    date: '2021-03-21T13:30:00+00:00',
    timestamp: 1616333400,
    periods: {
      first: 1616333400,
      second: 1616337000,
    },
    venue: {
      id: 519,
      name: 'Stamford Bridge',
      city: 'London',
    },
    status: {
      long: 'Match Finished',
      short: 'FT',
      elapsed: 90,
    },
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
  goals: {
    home: 2,
    away: 0,
  },
  score: {
    halftime: {
      home: 1,
      away: 0,
    },
    fulltime: {
      home: 2,
      away: 0,
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
        elapsed: 24,
        extra: null,
      },
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      player: {
        id: 19105,
        name: 'O. Norwood',
      },
      assist: {
        id: null,
        name: null,
      },
      type: 'Goal',
      detail: 'Own Goal',
      comments: null,
    },
    {
      time: {
        elapsed: 63,
        extra: null,
      },
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      player: {
        id: 2282,
        name: 'A. Christensen',
      },
      assist: {
        id: 2280,
        name: 'Azpilicueta',
      },
      type: 'subst',
      detail: 'Substitution 1',
      comments: null,
    },
    {
      time: {
        elapsed: 63,
        extra: null,
      },
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      player: {
        id: 2295,
        name: 'O. Giroud',
      },
      assist: {
        id: 19545,
        name: 'R. James',
      },
      type: 'subst',
      detail: 'Substitution 2',
      comments: null,
    },
    {
      time: {
        elapsed: 72,
        extra: null,
      },
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      player: {
        id: 130423,
        name: 'B. Gilmour',
      },
      assist: {
        id: 548,
        name: 'H. Ziyech',
      },
      type: 'subst',
      detail: 'Substitution 3',
      comments: null,
    },
    {
      time: {
        elapsed: 72,
        extra: null,
      },
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      player: {
        id: 2298,
        name: 'C. Hudson-Odoi',
      },
      assist: {
        id: 978,
        name: 'K. Havertz',
      },
      type: 'subst',
      detail: 'Substitution 4',
      comments: null,
    },
    {
      time: {
        elapsed: 75,
        extra: null,
      },
      team: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media.api-sports.io/football/teams/62.png',
      },
      player: {
        id: 19337,
        name: 'O. McBurnie',
      },
      assist: {
        id: 1124,
        name: 'O. Burke',
      },
      type: 'subst',
      detail: 'Substitution 1',
      comments: null,
    },
    {
      time: {
        elapsed: 79,
        extra: null,
      },
      team: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media.api-sports.io/football/teams/62.png',
      },
      player: {
        id: 19105,
        name: 'O. Norwood',
      },
      assist: {
        id: 303,
        name: 'R. Brewster',
      },
      type: 'subst',
      detail: 'Substitution 2',
      comments: null,
    },
    {
      time: {
        elapsed: 83,
        extra: null,
      },
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      player: {
        id: 17,
        name: 'C. Pulisic',
      },
      assist: {
        id: 2290,
        name: 'N. Kanté',
      },
      type: 'subst',
      detail: 'Substitution 5',
      comments: null,
    },
    {
      time: {
        elapsed: 90,
        extra: null,
      },
      team: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media.api-sports.io/football/teams/62.png',
      },
      player: {
        id: 19201,
        name: 'J. Bogle',
      },
      assist: {
        id: 18882,
        name: 'L. Mousset',
      },
      type: 'subst',
      detail: 'Substitution 3',
      comments: null,
    },
    {
      time: {
        elapsed: 90,
        extra: 2,
      },
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      player: {
        id: 548,
        name: 'H. Ziyech',
      },
      assist: {
        id: 2933,
        name: 'B. Chilwell',
      },
      type: 'Goal',
      detail: 'Normal Goal',
      comments: null,
    },
  ],
  lineups: [
    {
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      coach: {
        id: 40,
        name: 'T. Tuchel',
        photo: 'https://media.api-sports.io/football/coachs/40.png',
      },
      formation: '3-4-2-1',
      startXI: [
        {
          player: {
            id: 2273,
            name: 'Kepa',
            number: 1,
            pos: 'G',
          },
        },
        {
          player: {
            id: 2726,
            name: 'K. Zouma',
            number: 15,
            pos: 'D',
          },
        },
        {
          player: {
            id: 2284,
            name: 'Emerson',
            number: 33,
            pos: 'D',
          },
        },
        {
          player: {
            id: 2282,
            name: 'A. Christensen',
            number: 4,
            pos: 'D',
          },
        },
        {
          player: {
            id: 2933,
            name: 'B. Chilwell',
            number: 21,
            pos: 'M',
          },
        },
        {
          player: {
            id: 2291,
            name: 'M. Kovačić',
            number: 17,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19220,
            name: 'M. Mount',
            number: 19,
            pos: 'F',
          },
        },
        {
          player: {
            id: 17,
            name: 'C. Pulisic',
            number: 10,
            pos: 'F',
          },
        },
        {
          player: {
            id: 130423,
            name: 'B. Gilmour',
            number: 23,
            pos: 'M',
          },
        },
        {
          player: {
            id: 2295,
            name: 'O. Giroud',
            number: 18,
            pos: 'F',
          },
        },
        {
          player: {
            id: 2298,
            name: 'C. Hudson-Odoi',
            number: 20,
            pos: 'M',
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 2280,
            name: 'Azpilicueta',
            number: 28,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19545,
            name: 'R. James',
            number: 24,
            pos: 'D',
          },
        },
        {
          player: {
            id: 548,
            name: 'H. Ziyech',
            number: 22,
            pos: 'M',
          },
        },
        {
          player: {
            id: 978,
            name: 'K. Havertz',
            number: 29,
            pos: 'M',
          },
        },
        {
          player: {
            id: 2290,
            name: 'N. Kanté',
            number: 7,
            pos: 'M',
          },
        },
        {
          player: {
            id: 2285,
            name: 'A. Rüdiger',
            number: 2,
            pos: 'D',
          },
        },
        {
          player: {
            id: 2278,
            name: 'Marcos Alonso',
            number: 3,
            pos: 'D',
          },
        },
        {
          player: {
            id: 1166,
            name: 'T. Werner',
            number: 11,
            pos: 'F',
          },
        },
        {
          player: {
            id: 2275,
            name: 'W. Caballero',
            number: 13,
            pos: 'G',
          },
        },
      ],
    },
    {
      team: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media.api-sports.io/football/teams/62.png',
      },
      coach: {
        id: 2397,
        name: 'P. Heckingbottom',
        photo: 'https://media.api-sports.io/football/coachs/2397.png',
      },
      formation: '3-5-2',
      startXI: [
        {
          player: {
            id: 20355,
            name: 'A. Ramsdale',
            number: 1,
            pos: 'G',
          },
        },
        {
          player: {
            id: 18759,
            name: 'P. Jagielka',
            number: 15,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19097,
            name: 'E. Stevens',
            number: 3,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19090,
            name: 'G. Baldock',
            number: 2,
            pos: 'D',
          },
        },
        {
          player: {
            id: 19201,
            name: 'J. Bogle',
            number: 20,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19102,
            name: 'J. Fleck',
            number: 4,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19105,
            name: 'O. Norwood',
            number: 16,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19104,
            name: 'J. Lundstram',
            number: 7,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19302,
            name: 'B. Osborn',
            number: 23,
            pos: 'M',
          },
        },
        {
          player: {
            id: 19108,
            name: 'D. McGoldrick',
            number: 17,
            pos: 'F',
          },
        },
        {
          player: {
            id: 19337,
            name: 'O. McBurnie',
            number: 9,
            pos: 'F',
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 1124,
            name: 'O. Burke',
            number: 14,
            pos: 'M',
          },
        },
        {
          player: {
            id: 303,
            name: 'R. Brewster',
            number: 24,
            pos: 'F',
          },
        },
        {
          player: {
            id: 18882,
            name: 'L. Mousset',
            number: 11,
            pos: 'F',
          },
        },
        {
          player: {
            id: 277715,
            name: 'Z. Brunt',
            number: 31,
            pos: 'M',
          },
        },
        {
          player: {
            id: 44809,
            name: 'M. Lowe',
            number: 13,
            pos: 'D',
          },
        },
        {
          player: {
            id: 277714,
            name: 'K. Gordon',
            number: 33,
            pos: 'D',
          },
        },
        {
          player: {
            id: 1736,
            name: 'W. Foderingham',
            number: 18,
            pos: 'G',
          },
        },
        {
          player: {
            id: 19098,
            name: 'K. Bryan',
            number: 29,
            pos: 'D',
          },
        },
        {
          player: {
            id: 18592,
            name: 'I. Ndiaye',
            number: 34,
            pos: 'M',
          },
        },
      ],
    },
  ],
  statistics: [
    {
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
      },
      statistics: [
        {
          type: 'Shots on Goal',
          value: 3,
        },
        {
          type: 'Shots off Goal',
          value: 5,
        },
        {
          type: 'Total Shots',
          value: 8,
        },
        {
          type: 'Blocked Shots',
          value: null,
        },
        {
          type: 'Shots insidebox',
          value: 6,
        },
        {
          type: 'Shots outsidebox',
          value: 2,
        },
        {
          type: 'Fouls',
          value: 8,
        },
        {
          type: 'Corner Kicks',
          value: 2,
        },
        {
          type: 'Offsides',
          value: 1,
        },
        {
          type: 'Ball Possession',
          value: '62%',
        },
        {
          type: 'Yellow Cards',
          value: null,
        },
        {
          type: 'Red Cards',
          value: null,
        },
        {
          type: 'Goalkeeper Saves',
          value: 4,
        },
        {
          type: 'Total passes',
          value: 603,
        },
        {
          type: 'Passes accurate',
          value: 525,
        },
        {
          type: 'Passes %',
          value: '87%',
        },
      ],
    },
    {
      team: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media.api-sports.io/football/teams/62.png',
      },
      statistics: [
        {
          type: 'Shots on Goal',
          value: 4,
        },
        {
          type: 'Shots off Goal',
          value: 2,
        },
        {
          type: 'Total Shots',
          value: 7,
        },
        {
          type: 'Blocked Shots',
          value: 1,
        },
        {
          type: 'Shots insidebox',
          value: 4,
        },
        {
          type: 'Shots outsidebox',
          value: 3,
        },
        {
          type: 'Fouls',
          value: 14,
        },
        {
          type: 'Corner Kicks',
          value: 4,
        },
        {
          type: 'Offsides',
          value: 2,
        },
        {
          type: 'Ball Possession',
          value: '38%',
        },
        {
          type: 'Yellow Cards',
          value: null,
        },
        {
          type: 'Red Cards',
          value: null,
        },
        {
          type: 'Goalkeeper Saves',
          value: 2,
        },
        {
          type: 'Total passes',
          value: 352,
        },
        {
          type: 'Passes accurate',
          value: 262,
        },
        {
          type: 'Passes %',
          value: '74%',
        },
      ],
    },
  ],
  players: [
    {
      team: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
        update: '2021-05-17T16:27:22+00:00',
      },
      players: [
        {
          player: {
            id: 2273,
            name: 'Kepa Arrizabalaga',
            photo: 'https://media.api-sports.io/football/players/2273.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 1,
                position: 'G',
                rating: '7.6',
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
                saves: 4,
              },
              passes: {
                total: 22,
                key: null,
                accuracy: '17',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
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
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 2282,
            name: 'Andreas Christensen',
            photo: 'https://media.api-sports.io/football/players/2282.png',
          },
          statistics: [
            {
              games: {
                minutes: 63,
                number: 4,
                position: 'D',
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
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 78,
                key: null,
                accuracy: '69',
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 4,
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
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2726,
            name: 'Kurt Zouma',
            photo: 'https://media.api-sports.io/football/players/2726.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 15,
                position: 'D',
                rating: '7.2',
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
                total: 67,
                key: null,
                accuracy: '63',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 6,
                won: 3,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
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
            id: 2284,
            name: 'Emerson Palmieri',
            photo: 'https://media.api-sports.io/football/players/2284.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 33,
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
                total: 72,
                key: null,
                accuracy: '61',
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 12,
                won: 8,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
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
            id: 2298,
            name: 'Callum Hudson-Odoi',
            photo: 'https://media.api-sports.io/football/players/2298.png',
          },
          statistics: [
            {
              games: {
                minutes: 72,
                number: 20,
                position: 'M',
                rating: '6.3',
                captain: false,
                substitute: false,
              },
              offsides: 1,
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
                total: 28,
                key: 1,
                accuracy: '22',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 7,
                won: 2,
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
            id: 130423,
            name: 'Billy Gilmour',
            photo: 'https://media.api-sports.io/football/players/130423.png',
          },
          statistics: [
            {
              games: {
                minutes: 72,
                number: 23,
                position: 'M',
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
                total: 65,
                key: null,
                accuracy: '60',
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 7,
                won: 6,
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
            id: 2291,
            name: 'Mateo Kovačić',
            photo: 'https://media.api-sports.io/football/players/2291.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 17,
                position: 'M',
                rating: '7.9',
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
                total: 73,
                key: null,
                accuracy: '64',
              },
              tackles: {
                total: 4,
                blocks: 1,
                interceptions: 1,
              },
              duels: {
                total: 15,
                won: 13,
              },
              dribbles: {
                attempts: 6,
                success: 5,
                past: null,
              },
              fouls: {
                drawn: 4,
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
            id: 2933,
            name: 'Ben Chilwell',
            photo: 'https://media.api-sports.io/football/players/2933.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 21,
                position: 'M',
                rating: '8.7',
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
                assists: 1,
                saves: null,
              },
              passes: {
                total: 51,
                key: 1,
                accuracy: '48',
              },
              tackles: {
                total: 6,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 14,
                won: 11,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 2,
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
            id: 19220,
            name: 'Mason Mount',
            photo: 'https://media.api-sports.io/football/players/19220.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 19,
                position: 'F',
                rating: '7.3',
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
                total: 52,
                key: 1,
                accuracy: '44',
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 9,
                won: 6,
              },
              dribbles: {
                attempts: 3,
                success: 2,
                past: 1,
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
            id: 17,
            name: 'Christian Pulišić',
            photo: 'https://media.api-sports.io/football/players/17.png',
          },
          statistics: [
            {
              games: {
                minutes: 83,
                number: 10,
                position: 'F',
                rating: '6.9',
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 4,
                on: 2,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 39,
                key: 1,
                accuracy: '32',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 16,
                won: 9,
              },
              dribbles: {
                attempts: 6,
                success: 5,
                past: 3,
              },
              fouls: {
                drawn: 4,
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
            id: 2295,
            name: 'Olivier Giroud',
            photo: 'https://media.api-sports.io/football/players/2295.png',
          },
          statistics: [
            {
              games: {
                minutes: 63,
                number: 18,
                position: 'F',
                rating: '6.3',
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
                total: 16,
                key: null,
                accuracy: '11',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: 1,
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
            id: 2275,
            name: 'Willy Caballero',
            photo: 'https://media.api-sports.io/football/players/2275.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 13,
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
            id: 2278,
            name: 'Marcos Alonso',
            photo: 'https://media.api-sports.io/football/players/2278.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 3,
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
            id: 19545,
            name: 'Reece James',
            photo: 'https://media.api-sports.io/football/players/19545.png',
          },
          statistics: [
            {
              games: {
                minutes: 27,
                number: 24,
                position: 'D',
                rating: '6.9',
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
                total: 8,
                key: null,
                accuracy: '5',
              },
              tackles: {
                total: 3,
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
            id: 2280,
            name: 'César Azpilicueta',
            photo: 'https://media.api-sports.io/football/players/2280.png',
          },
          statistics: [
            {
              games: {
                minutes: 27,
                number: 28,
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
                total: 13,
                key: null,
                accuracy: '11',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: 1,
              },
              dribbles: {
                attempts: null,
                success: null,
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
            id: 2285,
            name: 'Antonio Rüdiger',
            photo: 'https://media.api-sports.io/football/players/2285.png',
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
            id: 2290,
            name: "N'Golo Kanté",
            photo: 'https://media.api-sports.io/football/players/2290.png',
          },
          statistics: [
            {
              games: {
                minutes: 10,
                number: 7,
                position: 'M',
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
                total: 2,
                key: null,
                accuracy: '2',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 2,
                won: 1,
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
            id: 978,
            name: 'Kai Havertz',
            photo: 'https://media.api-sports.io/football/players/978.png',
          },
          statistics: [
            {
              games: {
                minutes: 18,
                number: 29,
                position: 'M',
                rating: '6.3',
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
                total: 10,
                key: null,
                accuracy: '9',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
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
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 548,
            name: 'Hakim Ziyech',
            photo: 'https://media.api-sports.io/football/players/548.png',
          },
          statistics: [
            {
              games: {
                minutes: 18,
                number: 22,
                position: 'M',
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
                total: 7,
                key: null,
                accuracy: '7',
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
                attempts: 1,
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
            id: 1166,
            name: 'Timo Werner',
            photo: 'https://media.api-sports.io/football/players/1166.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 11,
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
      ],
    },
    {
      team: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media.api-sports.io/football/teams/62.png',
        update: '2021-05-17T16:27:22+00:00',
      },
      players: [
        {
          player: {
            id: 20355,
            name: 'Aaron Ramsdale',
            photo: 'https://media.api-sports.io/football/players/20355.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 1,
                position: 'G',
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
                conceded: 2,
                assists: null,
                saves: 2,
              },
              passes: {
                total: 33,
                key: null,
                accuracy: '20',
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
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 19090,
            name: 'George Baldock',
            photo: 'https://media.api-sports.io/football/players/19090.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 2,
                position: 'D',
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
                total: 30,
                key: null,
                accuracy: '28',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 7,
                won: 2,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 4,
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
            id: 18759,
            name: 'Phil Jagielka',
            photo: 'https://media.api-sports.io/football/players/18759.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 15,
                position: 'D',
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
                total: 41,
                key: null,
                accuracy: '31',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 5,
                won: 4,
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
            id: 19097,
            name: 'Enda Stevens',
            photo: 'https://media.api-sports.io/football/players/19097.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 3,
                position: 'D',
                rating: '5.9',
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
                total: 41,
                key: 1,
                accuracy: '31',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 7,
                won: 2,
              },
              dribbles: {
                attempts: 3,
                success: 1,
                past: 2,
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
            id: 19201,
            name: 'Jayden Bogle',
            photo: 'https://media.api-sports.io/football/players/19201.png',
          },
          statistics: [
            {
              games: {
                minutes: 89,
                number: 20,
                position: 'M',
                rating: '5.9',
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
                total: 23,
                key: null,
                accuracy: '15',
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 18,
                won: 6,
              },
              dribbles: {
                attempts: 5,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: 2,
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
            id: 19104,
            name: 'John Lundstram',
            photo: 'https://media.api-sports.io/football/players/19104.png',
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
                total: 36,
                key: 1,
                accuracy: '27',
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 8,
                won: 3,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 2,
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
            id: 19105,
            name: 'Oliver Norwood',
            photo: 'https://media.api-sports.io/football/players/19105.png',
          },
          statistics: [
            {
              games: {
                minutes: 79,
                number: 16,
                position: 'M',
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
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 41,
                key: 3,
                accuracy: '34',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 4,
                won: 1,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 2,
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
            id: 19102,
            name: 'John Fleck',
            photo: 'https://media.api-sports.io/football/players/19102.png',
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
                total: 32,
                key: null,
                accuracy: '27',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 11,
                won: 3,
              },
              dribbles: {
                attempts: 4,
                success: 1,
                past: 1,
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
            id: 19302,
            name: 'Ben Osborn',
            photo: 'https://media.api-sports.io/football/players/19302.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 23,
                position: 'M',
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
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 33,
                key: null,
                accuracy: '19',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 9,
                won: 7,
              },
              dribbles: {
                attempts: 2,
                success: 2,
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
            id: 19337,
            name: 'Oliver McBurnie',
            photo: 'https://media.api-sports.io/football/players/19337.png',
          },
          statistics: [
            {
              games: {
                minutes: 75,
                number: 9,
                position: 'F',
                rating: '6.5',
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
                total: 18,
                key: null,
                accuracy: '12',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 15,
                won: 3,
              },
              dribbles: {
                attempts: 2,
                success: null,
                past: 2,
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
            id: 19108,
            name: 'David McGoldrick',
            photo: 'https://media.api-sports.io/football/players/19108.png',
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 17,
                position: 'F',
                rating: '6.3',
                captain: true,
                substitute: false,
              },
              offsides: 1,
              shots: {
                total: 3,
                on: 2,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 19,
                key: null,
                accuracy: '14',
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 20,
                won: 8,
              },
              dribbles: {
                attempts: 7,
                success: 3,
                past: 1,
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
            id: 1736,
            name: 'Wes Foderingham',
            photo: 'https://media.api-sports.io/football/players/1736.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 18,
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
            id: 277714,
            name: 'Kyron Gordon',
            photo: 'https://media.api-sports.io/football/players/277714.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 33,
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
            id: 44809,
            name: 'Max Lowe',
            photo: 'https://media.api-sports.io/football/players/44809.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 13,
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
            id: 19098,
            name: 'Kean Bryan',
            photo: 'https://media.api-sports.io/football/players/19098.png',
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
            id: 18592,
            name: 'Iliman Ndiaye',
            photo: 'https://media.api-sports.io/football/players/18592.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 34,
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
            id: 277715,
            name: 'Zak Brunt',
            photo: 'https://media.api-sports.io/football/players/277715.png',
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 31,
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
            id: 1124,
            name: 'Oliver Burke',
            photo: 'https://media.api-sports.io/football/players/1124.png',
          },
          statistics: [
            {
              games: {
                minutes: 15,
                number: 14,
                position: 'M',
                rating: '6.2',
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
                total: 2,
                key: null,
                accuracy: '1',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 1,
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
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 18882,
            name: 'Lys Mousset',
            photo: 'https://media.api-sports.io/football/players/18882.png',
          },
          statistics: [
            {
              games: {
                minutes: 1,
                number: 11,
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
            id: 303,
            name: 'Rhian Brewster',
            photo: 'https://media.api-sports.io/football/players/303.png',
          },
          statistics: [
            {
              games: {
                minutes: 11,
                number: 24,
                position: 'F',
                rating: '6.7',
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
                accuracy: '3',
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: 1,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
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
      ],
    },
  ],
};
