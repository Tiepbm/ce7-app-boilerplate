import moment from 'moment';

export function getDaysHome(numberday = 7, total = 31) {
  let items = [];
  let currentDate = moment(new Date());
  for (let i = total; i >= 1; i--) {
    items.push({
      date: moment().add(-(i * numberday), 'days'),
    });
  }
  items.push({date: currentDate, isSelected: true});
  for (let i = 1; i <= total; i++) {
    items.push({date: moment().add(i * numberday, 'days')});
  }

  return items;
}

export function getDaysGroupByWeekOfYear(numberday = 7, total = 31) {
  let items = [];
  let currentDate = moment(new Date());
  for (let i = total; i >= 1; i--) {
    items.push({date: moment().add(-(i * numberday), 'days')});
  }
  items.push({date: currentDate, isCurrent: true});
  for (let i = 1; i <= total; i++) {
    items.push({date: moment().add(i * numberday, 'days')});
  }
  let groups: any = [[]];
  items.map(x => {
    if (
      !groups[groups.length - 1] ||
      (Array.isArray(groups[groups.length - 1]) &&
        groups[groups.length - 1].length < 7)
    ) {
      groups[groups.length - 1].push(x);
    } else {
      groups.push([x]);
    }
  });
  console.log(groups.length);
  return groups;
  // return lodash
  //   .chain(items)
  //   .groupBy(x => moment(x.date).week())
  //   .map((value, key) => ({weekNumber: key, items: value}))
  //   .value();
}

export function get7DaysBefore(currentDate: any, total = 7) {
  let items = [];
  // let temp = moment(currentDate);
  for (let i = total; i >= 1; i--) {
    items.push({date: moment(currentDate).add(-i, 'days')});
  }
  return items;
}

export function get7DaysAfter(currentDate: any, total = 7) {
  let items = [];
  // let temp = moment(currentDate);
  for (let i = 1; i <= total; i++) {
    items.push({date: moment(currentDate).add(i, 'days')});
  }
  return items;
}
