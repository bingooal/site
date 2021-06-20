import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(duration);
dayjs.extend(calendar);

export type Date = dayjs.Dayjs;

export { dayjs };

export const now = () => dayjs();

export const format = (date: Date) => date.format('YYYY-MM-DD');

export const parse = (dateInput: dayjs.ConfigType) => dayjs(dateInput);

export const getTime = (dateInput: dayjs.ConfigType) =>
  parse(dateInput).format('HH:mm');

export const getDay = (date: Date) =>
  date.calendar(null, {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: 'ddd D MMM',
    nextWeek: 'ddd D MMM',
    sameElse: 'ddd D MMM',
  });
