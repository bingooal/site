import {
  getFixture,
  getFixtures,
} from '../../../../src/domain/fixture/api/indexBackend';
import Fixture from '../../../../src/domain/fixture/data/Fixture';
import FixturePreview from '../../../../src/domain/fixture/data/FixturePreview';

describe('getFixtures', () => {
  it('should get a list of fixture previews', async () => {
    const fixtures = await getFixtures();
    expect(fixtures).toBeArray();
    fixtures.forEach((fixture) => {
      expect(fixture).toMatchObject<FixturePreview>({
        id: expect.any(String),
        homeTeamName: expect.any(String),
        awayTeamName: expect.any(String),
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
      events: expect.arrayContaining([
        // e.g.:
        // {
        //   name: '[WATFORD_STRIKER] scores a goal',
        //   points: 5,
        // },
        {
          name: expect.any(String),
          points: expect.any(Number),
        },
      ]),
    });
  });
});
