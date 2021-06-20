import { extractPlayersAndEvents } from '../../../../src/domain/fixture/api/adapter/api-football';
import { mockFutureFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/futureFixture';
import { mockImminentFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/imminentFixture';
import { mockPastFixture } from '../../../../src/domain/fixture/api/adapter/mockApiFootballData/pastFixture';
import { FootballPlayer } from '../../../../src/domain/fixture/data/Fixture';

const numberOfStartingPlayers = 11 * 2;

describe('extractPlayersAndEvents', () => {
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
    const playersAndEvents = await extractPlayersAndEvents(mockImminentFixture);

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
