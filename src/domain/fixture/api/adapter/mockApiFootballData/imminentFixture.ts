// An imminent fixture has not started but will start soon.
// lineups are available, but not fixture stats nor player stats
export const mockImminentFixture = {
  fixture: {
    id: 592849,
    referee: 'Craig Pawson, England',
    timezone: 'UTC',
    date: '2021-05-11T17:00:00+00:00',
    timestamp: 1620752400,
    periods: { first: null, second: null },
    venue: { id: 556, name: 'Old Trafford', city: 'Manchester' },
    status: { long: 'Not Started', short: 'NS', elapsed: null },
  },
  league: {
    id: 39,
    name: 'Premier League',
    country: 'England',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
    flag: 'https://media.api-sports.io/flags/gb.svg',
    season: 2020,
    round: 'Regular Season - 36',
  },
  teams: {
    home: {
      id: 33,
      name: 'Manchester United',
      logo: 'https://media.api-sports.io/football/teams/33.png',
      winner: null,
    },
    away: {
      id: 46,
      name: 'Leicester',
      logo: 'https://media.api-sports.io/football/teams/46.png',
      winner: null,
    },
  },
  goals: { home: null, away: null },
  score: {
    halftime: { home: null, away: null },
    fulltime: { home: null, away: null },
    extratime: { home: null, away: null },
    penalty: { home: null, away: null },
  },
  events: [],
  lineups: [
    {
      team: {
        id: 33,
        name: 'Manchester United',
        logo: 'https://media.api-sports.io/football/teams/33.png',
      },
      formation: '4-2-3-1',
      startXI: [
        {
          player: { id: 882, name: 'David De Gea', number: 1, pos: 'G' },
        },
        {
          player: {
            id: 138806,
            name: 'Brandon Williams',
            number: 33,
            pos: 'D',
          },
        },
        {
          player: { id: 885, name: 'Eric Bailly', number: 3, pos: 'D' },
        },
        {
          player: { id: 19182, name: 'Axel Tuanzebe', number: 38, pos: 'D' },
        },
        {
          player: { id: 378, name: 'Alex Telles', number: 27, pos: 'D' },
        },
        {
          player: {
            id: 547,
            name: 'Donny van de Beek',
            number: 34,
            pos: 'M',
          },
        },
        {
          player: { id: 902, name: 'Nemanja Matić', number: 31, pos: 'M' },
        },
        {
          player: { id: 157997, name: 'Amad Diallo', number: 19, pos: 'M' },
        },
        { player: { id: 901, name: 'Juan Mata', number: 8, pos: 'M' } },
        {
          player: {
            id: 153430,
            name: 'Anthony Elanga',
            number: 56,
            pos: 'M',
          },
        },
        {
          player: { id: 897, name: 'Mason Greenwood', number: 11, pos: 'F' },
        },
      ],
      substitutes: [
        {
          player: { id: 19088, name: 'Dean Henderson', number: 26, pos: 'G' },
        },
        {
          player: { id: 891, name: 'Luke Shaw', number: 23, pos: 'D' },
        },
        {
          player: { id: 889, name: 'Victor Lindelöf', number: 2, pos: 'D' },
        },
        {
          player: {
            id: 18846,
            name: 'Aaron Wan-Bissaka',
            number: 29,
            pos: 'D',
          },
        },
        {
          player: { id: 903, name: 'Scott McTominay', number: 39, pos: 'M' },
        },
        {
          player: { id: 909, name: 'Marcus Rashford', number: 10, pos: 'F' },
        },
        {
          player: { id: 904, name: 'Paul Pogba', number: 6, pos: 'M' },
        },
        {
          player: { id: 1485, name: 'Bruno Fernandes', number: 18, pos: 'M' },
        },
        {
          player: { id: 274, name: 'Edinson Cavani', number: 7, pos: 'F' },
        },
      ],
      coach: {
        id: 19,
        name: 'O. Solskjær',
        photo: 'https://media.api-sports.io/football/coachs/19.png',
      },
    },
    {
      team: {
        id: 46,
        name: 'Leicester',
        logo: 'https://media.api-sports.io/football/teams/46.png',
      },
      formation: '3-4-1-2',
      startXI: [
        {
          player: {
            id: 2728,
            name: 'Kasper Schmeichel',
            number: 1,
            pos: 'G',
          },
        },
        {
          player: {
            id: 2920,
            name: 'Timothy Castagne',
            number: 27,
            pos: 'D',
          },
        },
        {
          player: { id: 22094, name: 'Wesley Fofana', number: 3, pos: 'D' },
        },
        {
          player: { id: 18776, name: 'Çağlar Söyüncü', number: 4, pos: 'D' },
        },
        {
          player: {
            id: 18777,
            name: 'Marc Albrighton',
            number: 11,
            pos: 'M',
          },
        },
        {
          player: { id: 18786, name: 'Wilfred Ndidi', number: 25, pos: 'M' },
        },
        {
          player: { id: 2926, name: 'Youri Tielemans', number: 8, pos: 'M' },
        },
        {
          player: { id: 152969, name: 'Luke Thomas', number: 33, pos: 'M' },
        },
        {
          player: { id: 18906, name: 'Ayoze Pérez', number: 17, pos: 'F' },
        },
        {
          player: {
            id: 2778,
            name: 'Kelechi Iheanacho',
            number: 14,
            pos: 'F',
          },
        },
        {
          player: { id: 18788, name: 'Jamie Vardy', number: 9, pos: 'F' },
        },
      ],
      substitutes: [
        {
          player: { id: 18146, name: 'Danny Ward', number: 12, pos: 'G' },
        },
        {
          player: {
            id: 18773,
            name: 'Christian Fuchs',
            number: 28,
            pos: 'D',
          },
        },
        {
          player: { id: 3421, name: 'Daniel Amartey', number: 18, pos: 'D' },
        },
        {
          player: {
            id: 18771,
            name: 'Ricardo Pereira',
            number: 21,
            pos: 'D',
          },
        },
        {
          player: { id: 18784, name: 'James Maddison', number: 10, pos: 'M' },
        },
        {
          player: {
            id: 278116,
            name: 'Tawanda Maswanhise',
            number: 65,
            pos: 'M',
          },
        },
        {
          player: {
            id: 18779,
            name: 'Hamza Choudhury',
            number: 20,
            pos: 'M',
          },
        },
        {
          player: { id: 18785, name: 'Nampalys Mendy', number: 24, pos: 'M' },
        },
        {
          player: { id: 2925, name: 'Dennis Praet', number: 26, pos: 'M' },
        },
      ],
      coach: {
        id: 15,
        name: 'B. Rodgers',
        photo: 'https://media.api-sports.io/football/coachs/15.png',
      },
    },
  ],
  statistics: [],
  players: [],
};
