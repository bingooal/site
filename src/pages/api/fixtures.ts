import { NextApiRequest, NextApiResponse } from 'next';
import { getFixtures } from '../../domain/fixture/api/indexBackend';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await getFixtures(req.query.date as string);
  res.status(200).json(data);
};

export default handler;
