/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */

import axios, { AxiosRequestConfig } from "axios";
import { GetFixtures } from "..";

export const getFixturesFromApiFootball: GetFixtures = async () => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/fixtures',
    params: {
      date: '2021-03-20',
      league: '40',
      season: 2020,
      timezone: 'Europe/London',
    },
    headers: {
      'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  };
  const res = await axios.request(options);

  return res.data.response.map(({ fixture, teams }) => ({
    id: `${fixture.id}`,
    homeTeamName: teams.home.name,
    awayTeamName: teams.away.name,
  }))
}