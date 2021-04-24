import * as fixtureApi from '../../../../src/domain/fixture/api/indexBackend';
import Fixture from '../../../../src/domain/fixture/data/Fixture';
// import FixturePreview from '../../../../src/domain/fixture/data/FixturePreview';
import userSessionRepository from '../../../../src/domain/user/repositories/userSessionRepository';
import { fixturePreview } from '../../../mockData';

const { getFixture, getFixtures, getLeaderboard } = fixtureApi;

describe('getFixtures', () => {
  it('should get a list of fixture previews', async () => {
    const fixtures = await getFixtures();
    expect(fixtures).toBeArray();
    fixtures.forEach((fixture) => {
      // expect(fixture).toMatchObject<FixturePreview>({
      expect(fixture).toMatchObject({
        id: expect.any(String),
        homeTeamName: expect.any(String),
        homeTeamLogo: expect.any(String),
        homeTeamGoals: expect.toMatchSome(
          expect.any(Number),
          expect.toBeNull()
        ),
        awayTeamName: expect.any(String),
        awayTeamLogo: expect.any(String),
        awayTeamGoals: expect.toMatchSome(
          expect.any(Number),
          expect.toBeNull()
        ),
      });
    });
  });
});

describe('getFixture', () => {
  const fixtureId = '593320';

  it('should get a fixture', async () => {
    const fixture = await getFixture(fixtureId);

    expect(fixture).toMatchObject<Fixture>({
      id: fixtureId,
      homeTeamName: expect.any(String),
      homeTeamLogo: expect.any(String),
      homeTeamGoals: expect.any(Number),
      awayTeamName: expect.any(String),
      awayTeamLogo: expect.any(String),
      awayTeamGoals: expect.any(Number),
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

describe('getLeaderboard', () => {
  beforeEach(() => {
    userSessionRepository.reset();
  });

  it('should get the leaderboard for the fixture', async () => {
    const imageUrl = 'imageUrl';
    const userId1 = 'userId1';
    const userId2 = 'userId2';
    const fixtureId1 = 'fixtureId1';
    const fixtureId2 = 'fixtureId2';
    const highPointsEventThatHasOccured = {
      name: 'highPointsEventThatHasOccured',
      points: 2,
      imageUrl,
      hasOccured: true,
    };
    const lowPointsEventThatHasOccured = {
      name: 'lowPointsEventThatHasOccured',
      points: 1,
      imageUrl,
      hasOccured: true,
    };
    const eventThatHasNotOccured = {
      name: 'eventThatHasNotOccured',
      points: 3,
      imageUrl,
      hasOccured: false,
    };

    jest.spyOn(fixtureApi, 'getFixture').mockResolvedValue({
      ...fixturePreview,
      events: [
        highPointsEventThatHasOccured,
        lowPointsEventThatHasOccured,
        eventThatHasNotOccured,
      ],
    });

    expect(await getLeaderboard(fixtureId1)).toEqual([]);
    expect(await getLeaderboard(fixtureId2)).toEqual([]);

    await userSessionRepository.selectEvent(
      userId1,
      fixtureId1,
      highPointsEventThatHasOccured.name
    );
    await userSessionRepository.selectEvent(
      userId1,
      fixtureId1,
      eventThatHasNotOccured.name
    );
    await userSessionRepository.selectEvent(
      userId2,
      fixtureId1,
      lowPointsEventThatHasOccured.name
    );

    await userSessionRepository.selectEvent(
      userId1,
      fixtureId2,
      lowPointsEventThatHasOccured.name
    );
    await userSessionRepository.selectEvent(
      userId2,
      fixtureId2,
      highPointsEventThatHasOccured.name
    );

    expect(await getLeaderboard(fixtureId1)).toEqual([
      { userId: userId1, points: highPointsEventThatHasOccured.points },
      { userId: userId2, points: lowPointsEventThatHasOccured.points },
    ]);
    expect(await getLeaderboard(fixtureId2)).toEqual([
      { userId: userId2, points: highPointsEventThatHasOccured.points },
      { userId: userId1, points: lowPointsEventThatHasOccured.points },
    ]);
  });
});
