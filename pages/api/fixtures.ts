// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import * as footballService from '../../domain/football.service';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await footballService.getFixtures();
  res.status(200).json(data);
};

export default handler;
