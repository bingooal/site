// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getFixtures()
  res.status(200).json(data);
};

const getFixtures = async () => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/fixtures',
    params: { date: '2021-03-20', league: '40', season: 2020, timezone: 'Europe/London' },
    headers: {
      'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    }
  };
  const res = await axios.request(options)
  return res.data
}

const getLineUps = async () => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/fixtures/lineups',
    // wales
    params: { fixture: 593330 },
    headers: {
      'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };
  const res = await axios.request(options)
  return res.data
}


const getPlayersStats = async () => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/fixtures/players',
    // fulham v leeds
    params: { fixture: 592779 },
    headers: {
      'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };
  const res = await axios.request(options)
  return res.data
}

export default handler;
