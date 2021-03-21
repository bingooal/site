/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */

// import axios, { AxiosRequestConfig } from 'axios';
import { GetFixture, GetFixtures } from '../indexBackEnd';

export const getFixtureFromApiFootball: GetFixture = async () => {
  const events = [
    {
      imageUrl: 'asdf',
      name: 'Bruno Fernandes gets an assist',
      points: 7,
    },
    {
      imageUrl: 'asdf',
      name: 'Jamie Vardy bangs a goal in',
      points: 8,
    },
    {
      imageUrl: 'asdf',
      name: 'Harry Maguire gets a yellow card',
      points: 5,
    },
    {
      imageUrl: 'asdf',
      name: 'Schmeichel makes 3 saves',
      points: 2,
    },
  ];

  return {
    homeTeamName: 'Leceister City',
    awayTeamName: 'Manchester United',
    id: '',
    events,
  }
}

// export const getFixturesFromApiFootball: GetFixtures = async () => {
//   const options: AxiosRequestConfig = {
//     method: 'GET',
//     url: 'https://v3.football.api-sports.io/fixtures',
//     params: {
//       date: '2021-03-20',
//       league: '40',
//       season: 2020,
//       timezone: 'Europe/London',
//     },
//     headers: {
//       'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
//       'x-rapidapi-host': 'v3.football.api-sports.io',
//     },
//   };
//   const res = await axios.request(options);

//   return res.data.response.map(({ fixture, teams }) => ({
//     id: `${fixture.id}`,
//     homeTeamName: teams.home.name,
//     awayTeamName: teams.away.name,
//   }));
// }

export const getFixturesFromApiFootball: GetFixtures = async () => 
   [
    {
      id: '593321',
      homeTeamName: 'Brentford',
      awayTeamName: 'Nottingham Forest',
    },
    {
      id: '593320',
      homeTeamName: 'Barnsley',
      awayTeamName: 'Sheffield Wednesday',
    },
    {
      id: '593322',
      homeTeamName: 'Bristol City',
      awayTeamName: 'Rotherham',
    },
    {
      id: '593323',
      homeTeamName: 'Coventry',
      awayTeamName: 'Wycombe',
    },
    {
      id: '593325',
      homeTeamName: 'Millwall',
      awayTeamName: 'Middlesbrough',
    },
    {
      id: '593326',
      homeTeamName: 'Norwich',
      awayTeamName: 'Blackburn',
    },
    {
      id: '593327',
      homeTeamName: 'Preston',
      awayTeamName: 'Luton',
    },
    {
      id: '593328',
      homeTeamName: 'Reading',
      awayTeamName: 'QPR',
    },
    {
      id: '593329',
      homeTeamName: 'Stoke City',
      awayTeamName: 'Derby',
    },
    {
      id: '593331',
      homeTeamName: 'Watford',
      awayTeamName: 'Birmingham',
    },
    {
      id: '593330',
      homeTeamName: 'Swansea',
      awayTeamName: 'Cardiff',
    },
  ]
;
