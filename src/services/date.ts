import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(duration);
dayjs.extend(calendar);

export { dayjs };

export const getMillisecondsUntilTomorrow = () => {
  const now = dayjs();
  const tomorrow = now.add(1, 'day');
  return dayjs.duration(tomorrow.startOf('day').diff(now)).asMilliseconds();
};

export const getTime = (date) => dayjs(date).format('HH:mm');

export const getDay = (date) =>
  dayjs().calendar(date, {
    sameDay: '[Today]',
  });
