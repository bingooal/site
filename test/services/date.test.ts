import { getDay, now, parse } from '../../src/services/date';

describe('date', () => {
  describe('getDay', () => {
    it('shows today as Today', async () => {
      expect(getDay(now())).toEqual('Today');
    });

    it('shows yesterday as Yesterday', async () => {
      expect(getDay(now().subtract(1, 'day'))).toEqual('Yesterday');
    });

    it('shows tomorrow as Tomorrow', async () => {
      expect(getDay(now().add(1, 'day'))).toEqual('Tomorrow');
    });

    it('shows other days as absolute dates', async () => {
      expect(getDay(parse('2021-05-04'))).toEqual('Tue 4 May');
    });
  });
});
