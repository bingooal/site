import { NextApiRequest, NextApiResponse } from 'next';
import { getFixture } from '../../../domain/fixture/api/indexBackEnd';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await getFixture(req.query.id as string);
  res.status(200).json(data);
};

export default handler;
