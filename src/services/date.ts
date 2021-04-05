import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export { dayjs };

export const getMillisecondsUntilTomorrow = () => {
  const now = dayjs();
  const tomorrow = now.add(1, 'day');
  return dayjs.duration(tomorrow.startOf('day').diff(now)).asMilliseconds();
};
