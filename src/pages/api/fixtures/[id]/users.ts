import { NextApiRequest, NextApiResponse } from 'next';
import { getUsersPlayingFixture } from '../../../../domain/fixture/api/indexBackend';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await getUsersPlayingFixture(req.query.id as string);
  res.status(200).json(data);
};

export default handler;
