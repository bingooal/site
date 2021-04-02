import {
  getFixture,
  getFixtures,
  getUsersPlayingFixture,
} from '../../../../src/domain/fixture/api/indexBackend';
import Fixture from '../../../../src/domain/fixture/data/Fixture';
import FixturePreview from '../../../../src/domain/fixture/data/FixturePreview';
import userSessionRepository from '../../../../src/domain/user/repositories/userSessionRepository';

describe('getFixtures', () => {
  it('should get a list of fixture previews', async () => {
    const fixtures = await getFixtures();
    expect(fixtures).toBeArray();
    fixtures.forEach((fixture) => {
      expect(fixture).toMatchObject<FixturePreview>({
        id: expect.any(String),
        homeTeamName: expect.any(String),
        awayTeamName: expect.any(String),
        homeTeamLogo: expect.any(String),
        awayTeamLogo: expect.any(String),
      });
    });
  });
});

describe('getFixture', () => {
  it('should get a fixture', async () => {
    const fixtureId = '593320';
    const fixture = await getFixture(fixtureId);

    expect(fixture).toMatchObject<Fixture>({
      id: fixtureId,
      homeTeamName: expect.any(String),
      awayTeamName: expect.any(String),
      homeTeamLogo: expect.any(String),
      awayTeamLogo: expect.any(String),
      events: expect.arrayContaining([
        // e.g.:
        // {
        //   name: '[WATFORD_STRIKER] scores a goal',
        //   points: 5,
        // },
        {
          name: expect.any(String),
          points: expect.any(Number),
          imageUrl: expect.any(String),
          hasOccured: expect.any(Boolean),
        },
      ]),
    });
  });

  it('should get events with a flag if they have occured or not', async () => {
    const fixtureId = '593320';

    const { events } = await getFixture(fixtureId);

    expect(events).toContainEqual(
      expect.objectContaining({
        name: 'Joe Wildsmith makes a save',
        hasOccured: true,
      })
    );

    expect(events).toContainEqual(
      expect.objectContaining({
        name: 'Bradley Collins makes a save',
        hasOccured: false,
      })
    );
  });
});

describe('getUsersPlayingFixture', () => {
  beforeEach(() => {
    userSessionRepository.reset();
  });

  it('should get the number of users playing the fixture', async () => {
    const userId1 = 'userId1';
    const userId2 = 'userId2';
    const fixtureId1 = 'fixtureId1';
    const fixtureId2 = 'fixtureId2';
    const eventName = 'eventName';

    expect(await getUsersPlayingFixture(fixtureId1)).toEqual(0);
    expect(await getUsersPlayingFixture(fixtureId2)).toEqual(0);

    await userSessionRepository.selectEvent(userId1, fixtureId1, eventName);
    await userSessionRepository.selectEvent(userId2, fixtureId1, eventName);
    await userSessionRepository.selectEvent(userId1, fixtureId2, eventName);

    expect(await getUsersPlayingFixture(fixtureId1)).toEqual(2);
    expect(await getUsersPlayingFixture(fixtureId2)).toEqual(1);
  });
});
