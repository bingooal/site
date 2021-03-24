import { NextApiRequest, NextApiResponse } from 'next';
import { login } from '../../domain/user/api/indexBackend';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await login(req.query.userId as string);
  res.status(200).json(data);
};

export default handler;
