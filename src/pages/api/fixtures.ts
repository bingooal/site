// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { getFixtures } from '../../domain/fixture/api/indexBackEnd';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await getFixtures();
  res.status(200).json(data);
};

export default handler;
