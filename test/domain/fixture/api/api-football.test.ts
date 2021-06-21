import { makeApiFootballResponse } from '../../../../mocks/handlers';
import { rest, server } from '../../../../mocks/server';
import {
  apiFootballDomain,
  extractPlayersAndEvents,
  makeRequestToApiFootball,
} from '../../../../src/domain/fixture/api/adapter/api-football';
import { mockFutureFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/futureFixture';
import { mockImminentFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/imminentFixture';
import { mockPastFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/pastFixture';
import { FootballPlayer } from '../../../../src/domain/fixture/data/Fixture';
import { cacheInstance } from '../../../../src/services/request';

describe('api-football', () => {
  describe('makeRequestToApiFootball', () => {
    type MemoryStore = {
      clear: () => Promise<void>;
    };

    const endpoint = 'fixtures';

    beforeEach(async () => {
      await (cacheInstance.store as MemoryStore).clear();
    });

    it('should make a request to API Football', async () => {
      server.use(
        rest.get(`https://${apiFootballDomain}/${endpoint}`, (req, res, ctx) =>
          res(
            ctx.json(
              makeApiFootballResponse({
                response: ['someResponse'],
              })
            )
          )
        )
      );

      const response = await makeRequestToApiFootball({
        method: 'GET',
        url: endpoint,
      });

      expect(response).toStrictEqual(['someResponse']);
    });

    it('should cache requests to API Football', async () => {
      let numberOfRequestsMade = 0;
      server.use(
        rest.get(
          `https://${apiFootballDomain}/${endpoint}`,
          (req, res, ctx) => {
            numberOfRequestsMade += 1;

            return res(
              ctx.json(
                makeApiFootballResponse({
                  response: ['someResponse'],
                })
              )
            );
          }
        )
      );

      await makeRequestToApiFootball({
        method: 'GET',
        url: endpoint,
        cache: { maxAge: 1000 },
      });

      expect(numberOfRequestsMade).toEqual(1);

      await makeRequestToApiFootball({
        method: 'GET',
        url: endpoint,
      });

      expect(numberOfRequestsMade).toEqual(1);
    });

    it('should retry the API Football request with a different API key when the first request returns no results', async () => {
      let numberOfRequestsMade = 0;
      const apiKeysUsed: string[] = [];
      server.use(
        rest.get(
          `https://${apiFootballDomain}/${endpoint}`,
          (req, res, ctx) => {
            numberOfRequestsMade += 1;

            const apiKeyUsed = req.headers.get('x-rapidapi-key');
            apiKeysUsed.push(apiKeyUsed);

            return res(
              ctx.json(
                makeApiFootballResponse({
                  response: [],
                })
              )
            );
          }
        )
      );

      await makeRequestToApiFootball({
        method: 'GET',
        url: endpoint,
        cache: { maxAge: 1000 },
      });

      expect(numberOfRequestsMade).toEqual(2);
      expect(apiKeysUsed).toStrictEqual([
        process.env.FOOTBALL_API_KEY,
        process.env.FOOTBALL_API_KEY_2,
      ]);
    });
  });

  describe('extractPlayersAndEvents', () => {
    const numberOfStartingPlayers = 11 * 2;

    it('should extract starting players and events from a past fixture (with short names in lineup)', async () => {
      const playersAndEvents = await extractPlayersAndEvents(mockPastFixture);

      expect(playersAndEvents).toMatchObject({
        footballPlayers: expect.any(Array),
        occuredEventNames: expect.any(Array),
      });
      expect(playersAndEvents.footballPlayers).toHaveLength(
        numberOfStartingPlayers
      );
      expect(playersAndEvents.occuredEventNames.length).toBeGreaterThan(0);
    });

    it('should extract players without image urls from an imminent fixture', async () => {
      const playersAndEvents = await extractPlayersAndEvents(
        mockImminentFixture
      );

      expect(playersAndEvents).toMatchObject({
        footballPlayers: expect.any(Array),
        occuredEventNames: [],
      });
      expect(playersAndEvents.footballPlayers).toHaveLength(
        numberOfStartingPlayers
      );
      playersAndEvents.footballPlayers.forEach((player) => {
        expect(player).toStrictEqual<FootballPlayer>({
          id: expect.any(Number),
          name: expect.any(String),
        });
      });
    });

    it('should extract no players nor events from a future fixture', async () => {
      const playersAndEvents = await extractPlayersAndEvents(mockFutureFixture);

      expect(playersAndEvents).toMatchObject({
        footballPlayers: [],
        occuredEventNames: [],
      });
    });
  });
});
