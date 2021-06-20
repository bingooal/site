import { rest } from 'msw';
import { apiFootballDomain } from '../src/domain/fixture/api/adapter/api-football';
import { mockPastFixture } from '../src/domain/fixture/api/adapter/mockApiFootballData/pastFixture';

export const handlers = [
  rest.get(`https://${apiFootballDomain}/fixtures`, (_req, res, ctx) =>
    res(ctx.json({ response: [mockPastFixture] }))
  ),
];
