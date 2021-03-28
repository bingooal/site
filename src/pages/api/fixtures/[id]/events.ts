import { NextApiRequest, NextApiResponse } from 'next';
import {
  selectEvent,
  deselectEvent,
} from '../../../../domain/event/api/indexBackend';

enum RequestMethod {
  Post = 'POST',
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { userId, fixtureId, eventName } = req.body;
  await (req.method === RequestMethod.Post
    ? selectEvent(userId, fixtureId, eventName)
    : deselectEvent(userId, fixtureId, eventName));
  res.status(204).json(null);
};

export default handler;
