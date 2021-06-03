import { dayjs, getDay } from '../../src/services/date';

describe('date', () => {
  describe('getDay', () => {
    it('shows today as Today', async () => {
      expect(getDay(dayjs())).toEqual('Today');
    });

    it('shows yesterday as Yesterday', async () => {
      expect(getDay(dayjs().subtract(1, 'day'))).toEqual('Yesterday');
    });

    it('shows tomorrow as Tomorrow', async () => {
      expect(getDay(dayjs().add(1, 'day'))).toEqual('Tomorrow');
    });

    it('shows other days as absolute dates', async () => {
      expect(getDay(dayjs('2021-05-04T11:11:11.111Z'))).toEqual('Tue 4 May');
    });
  });
});
