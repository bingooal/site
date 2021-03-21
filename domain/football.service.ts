// TODO move this file somewhere more appropriate

import axios from 'axios';

export const getFixtures = async (): Promise<any> => {
  const options = {
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
  return res.data;
};

export const getLineUps = async (): Promise<any> => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/fixtures/lineups',
    // wales
    params: { fixture: 593330 },
    headers: {
      'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  };
  const res = await axios.request(options);
  return res.data;
};

export const getPlayersStats = async (): Promise<any> => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/fixtures/players',
    // fulham v leeds
    params: { fixture: 592779 },
    headers: {
      'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  };
  const res = await axios.request(options);
  return res.data;
};
