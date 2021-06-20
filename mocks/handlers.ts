import { rest } from 'msw';
import {
  apiFootballDomain,
  ApiFootballResponseBody,
} from '../src/domain/fixture/api/adapter/api-football';
import { mockFixtures } from '../src/domain/fixture/api/adapter/mockApiFootballData/fixtures';
import { mockPastFixture } from '../src/domain/fixture/api/adapter/mockApiFootballData/pastFixture';

export const handlers = [
  rest.get(`https://${apiFootballDomain}/fixtures`, (req, res, ctx) => {
    if (req.url.searchParams.has('id')) {
      return res(
        ctx.json({
          response: [mockPastFixture],
          results: 1,
        } as ApiFootballResponseBody)
      );
    }
    return res(
      ctx.json({
        response: mockFixtures,
        results: mockFixtures.length,
      } as ApiFootballResponseBody)
    );
  }),
];
