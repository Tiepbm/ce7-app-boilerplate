import {
  STANDARD_DATE_FORMAT,
  STANDARD_DATE_TIME_FORMAT,
  STANDARD_TIME_FORMAT,
} from '../config/consts';
import moment, {Moment} from 'moment';

export function formatDate(
  date: Moment | null | undefined,
  dateFormat: string = STANDARD_DATE_FORMAT,
) {
  if (!date) {
    return '';
  }
  if (typeof date === 'object' && 'format' in date) {
    return date.format(dateFormat);
  }
  return moment(date).format(dateFormat);
}

export function formatTime(
  time: Moment,
  timeFormat: string = STANDARD_TIME_FORMAT,
) {
  if (typeof time === 'object' && 'format' in time) {
    return time.format(timeFormat);
  }
  return moment(time).format(timeFormat);
}

export function formatDateTime(
  time: any,
  dateTimeFormat: string = STANDARD_DATE_TIME_FORMAT,
) {
  if (typeof time === 'object' && 'format' in time) {
    return time.format(dateTimeFormat);
  }
  return moment(time).format(dateTimeFormat);
}

export function isDateValue(date?: string) {
  // console.log(date);
  return date?.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/);
}

export function isTimeValue(time?: string) {
  return time?.match(/[0-9]{2}:[0-9]{2}/);
}
