// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { getFixture } from '../../../domain/fixture/api/indexBackEnd';

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    const data = await getFixture('asd');
    res.status(200).json(data);
};

export default handler;
