import {STANDARD_DATE_TIME_FORMAT} from '../config';
import {isDateValue, isTimeValue} from './date-time';
import moment from 'moment';

export function transformAPIResponseValue(
  value?: string | number | boolean,
): any {
  if (typeof value === 'string') {
    if (isDateValue(value)) {
      return moment(new Date(value));
    }
    if (isTimeValue(value)) {
      return moment(new Date(`1970-01-01 ${value}`));
    }
  }
  return value;
}

export function transformAPIRequestValue(value?: any): any {
  if (typeof value === 'object' && value !== null) {
    if ('_isAMomentObject' in value) {
      return value.format(STANDARD_DATE_TIME_FORMAT);
    }
  }
  return value;
}
