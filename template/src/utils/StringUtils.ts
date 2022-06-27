import numeral from 'numeral';

export const validateEmail = (value: string) =>
  value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,255})+$/.test(value)
    ? 'register.email_invalid'
    : undefined;
export function showTitle(value: string) {
  if (!value) {
    return '';
  }
  value = value.replace('(1)', 'P1');
  value = value.replace('(2)', 'P2');
  value = value.replace('(3)', 'P3');
  value = value.replace('(4)', 'P4');
  return value;
}
export function removeTagHTML(value: string) {
  value = value.replace(/<\/?[^>]+(>|$)/g, '');
  return value;
}
export function formatNumber(value: string | number) {
  if (value === null || value === '' || value === '--') {
    return '--';
  }
  console.log(value);
  return `${numeral(value).format('0,0.[00]')}`;
}
