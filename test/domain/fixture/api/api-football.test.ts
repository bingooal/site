import { extractPlayersAndEvents } from '../../../../src/domain/fixture/api/adapter/api-football';
import { mockPastFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/pastFixture';
import { mockImminentFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/imminentFixture';
import { mockFutureFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/futureFixture';

describe('extractPlayersAndEvents', () => {
  it('should extract players and events from a past fixture', async () => {
    const playersAndEvents = await extractPlayersAndEvents(mockPastFixture);
    expect(playersAndEvents).toMatchObject({
      footballPlayers: expect.any(Array),
      occuredEventNames: expect.any(Array),
    });
  });

  it('should extract players and events from an imminent fixture', async () => {
    const playersAndEvents = await extractPlayersAndEvents(mockImminentFixture);
    expect(playersAndEvents).toMatchObject({
      footballPlayers: [],
      occuredEventNames: [],
    });
  });

  it('should extract players and events from a future fixture', async () => {
    const playersAndEvents = await extractPlayersAndEvents(mockFutureFixture);
    expect(playersAndEvents).toMatchObject({
      footballPlayers: [],
      occuredEventNames: [],
    });
  });
});
