import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(duration);
dayjs.extend(calendar);

export { dayjs };

export const getTime = (date) => dayjs(date).format('HH:mm');
