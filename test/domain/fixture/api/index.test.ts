import { getFixture, getFixtures } from '../../../../src/domain/fixture/api/indexBackEnd';

describe('getFixtures', () => {
  it('should get the fixtures from the FA cup for today', async () => {
    const fixtures = await getFixtures();
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
  it('should get the fixture for a specific ID', async () => {
    const fixture = await getFixture('593331');

    expect(fixture).toMatchObject({
      id: '593331',
      homeTeamName: 'Watford',
      awayTeamName: 'Birmingham',
      events: expect.arrayContaining([
        {
          imageUrl: '',
          name: '[CITY_STRIKER] scores a goal',
          points: 5,
        },
        {
          imageUrl: '',
          name: '[WATFORD_STRIKER] scores a goal',
          points: 5,
        },
      ])
    })
  });
});
