import moment from 'moment';

export function getDate(date) {
  return moment(date).format('L');
}

export function getTime(date) {
  return moment(date).format('LT');
}
