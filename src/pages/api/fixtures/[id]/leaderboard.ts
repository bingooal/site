import { NextApiRequest, NextApiResponse } from 'next';
import { getLeaderboard } from '../../../../domain/fixture/api/indexBackend';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await getLeaderboard(req.query.id as string);
  res.status(200).json(data);
};

export default handler;
