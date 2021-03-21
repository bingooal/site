import { getFixtures } from '../../../../domain/fixture/api/indexBackEnd';

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
