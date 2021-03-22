import {
  getFixture,
  getFixtures,
} from '../../../../src/domain/fixture/api/indexBackEnd';

describe('getFixtures', () => {
  it('should get a list of fixtures', async () => {
    const fixtures = await getFixtures();
    expect(fixtures).toBeArray();
    fixtures.forEach((fixture) => {
      expect(fixture).toMatchObject({
        id: expect.any(String),
        homeTeamName: expect.any(String),
        awayTeamName: expect.any(String),
      });
    });
  });
});

describe('getFixture', () => {
  it('should get the correct fixture', async () => {
    const fixtureId = '593320';
    const fixture = await getFixture(fixtureId);

    expect(fixture).toMatchObject({
      id: fixtureId,
      homeTeamName: expect.any(String),
      awayTeamName: expect.any(String),
      events: expect.arrayContaining([
        // e.g.:
        // {
        //   imageUrl: '',
        //   name: '[WATFORD_STRIKER] scores a goal',
        //   points: 5,
        // },
        {
          imageUrl: expect.any(String),
          name: expect.any(String),
          points: expect.any(Number),
        },
      ]),
    });
  });
});
