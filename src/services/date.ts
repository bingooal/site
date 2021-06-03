import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(duration);
dayjs.extend(calendar);

export { dayjs };

export const getTime = (date) => dayjs(date).format('HH:mm');

export const getDay = (date) =>
  date.calendar(null, {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: 'ddd D MMM',
    nextWeek: 'ddd D MMM',
    sameElse: 'ddd D MMM',
  });

export const now = () => dayjs();

export type Date = dayjs.Dayjs;
