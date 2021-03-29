import { NextApiRequest, NextApiResponse } from 'next';
import {
  getSelectedEvents,
  selectEvent,
  deselectEvent,
} from '../../../../domain/event/api/indexBackend';

enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === RequestMethod.Get) {
    const { userId, id: fixtureId } = req.query as {
      userId: string;
      id: string;
    };
    const data = await getSelectedEvents(userId, fixtureId);
    res.status(200).json(data);
    return;
  }
  const { userId, fixtureId, eventName } = req.body;

  if (req.method === RequestMethod.Post) {
    await selectEvent(userId, fixtureId, eventName);
    res.status(204).json(null);
    return;
  }
  if (req.method === RequestMethod.Delete) {
    await deselectEvent(userId, fixtureId, eventName);
    res.status(204).json(null);
    return;
  }
  res.status(400).json({ error: `no ${req.method} handler found` });
};

export default handler;
