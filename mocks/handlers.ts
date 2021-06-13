import { rest } from 'msw'
import { mockPastFixture } from '../src/domain/fixture/api/adapter/mockApiFootballData/pastFixture'

export const handlers = [
  rest.get(
    'https://v3.football.api-sports.io/fixtures',
    (_req, res, ctx) => res(ctx.json({response: [mockPastFixture]})),
  ),
];
