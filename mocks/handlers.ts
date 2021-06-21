import { rest } from 'msw';
import {
  apiFootballDomain,
  ApiFootballResponseBody,
} from '../src/domain/fixture/api/adapter/api-football';
import { mockFixtures } from '../src/domain/fixture/api/adapter/mockApiFootballData/fixtures';
import { mockPastFixture } from '../src/domain/fixture/api/adapter/mockApiFootballData/pastFixture';

export const makeApiFootballResponse = (
  partialResponse: Partial<ApiFootballResponseBody>
): ApiFootballResponseBody => {
  const response = partialResponse.response || [];
  return {
    parameters: {},
    response,
    results: response.length,
    errors: [],
    paging: { current: 0, total: 0 },
    ...partialResponse,
  };
};

export const handlers = [
  rest.get(`https://${apiFootballDomain}/fixtures`, (req, res, ctx) => {
    if (req.url.searchParams.has('id')) {
      return res(
        ctx.json(
          makeApiFootballResponse({
            response: [mockPastFixture],
            results: 1,
          })
        )
      );
    }
    return res(
      ctx.json(
        makeApiFootballResponse({
          response: mockFixtures,
          results: mockFixtures.length,
        })
      )
    );
  }),
];
