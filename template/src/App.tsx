import React, {useEffect} from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import numeral from 'numeral';
import * as Sentry from '@sentry/react-native';
import {LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ApplicationNavigator from 'navigators/ApplicationNavigator';
Sentry.init({
  dsn: 'https://30bee15efef14adb98a90e2914142dda@o928949.ingest.sentry.io/6359717',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});
moment.locale('vi', {
  months: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthsShort: [
    'Th1',
    'Th2',
    'Th3',
    'Th4',
    'Th5',
    'Th6',
    'Th7',
    'Th8',
    'Th9',
    'Th10',
    'Th11',
    'Th12',
  ],
  weekdays: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  weekdaysShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  weekdaysMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  relativeTime: {
    future: 'trong %s',
    past: '%s trước',
    s: 'vài giây trước',
    ss: '%d giây',
    m: '1 phút',
    mm: '%d phút',
    h: '1 giờ',
    hh: '%d giờ',
    d: '1 ngày',
    dd: '%d ngày',
    w: '1 tuần',
    ww: '%d tuần',
    M: '1 tháng',
    MM: '%d tháng',
    y: '1 năm',
    yy: '%d năm',
  },
});
LocaleConfig.locales.vi = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'Th1',
    'Th2',
    'Th3',
    'Th4',
    'Th5',
    'Th6',
    'Th7',
    'Th8',
    'Th9',
    'Th10',
    'Th11',
    'Th12',
  ],
  dayNames: ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Hôm Nay',
};
LocaleConfig.defaultLocale = 'vi';
const App = () => {
  useEffect(() => {
    if (numeral.locales.vi === undefined) {
      numeral.register('locale', 'vi', {
        delimiters: {
          thousands: '.',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't',
        },
        ordinal: function (_number) {
          return '';
        },
        currency: {
          symbol: '₫',
        },
      });
      numeral.locale('vi');
    }
  }, []);
  return (
    <RootSiblingParent>
      <GestureHandlerRootView style={{flex: 1}}>
        <ApplicationNavigator />
      </GestureHandlerRootView>
    </RootSiblingParent>
  );
};
export default App;
