import {
  Permission,
  requestMultiple,
  RESULTS,
  checkMultiple,
  check,
} from 'react-native-permissions';
export default class PermissionUtils {
  static requirePermission(permission: Permission[], callBack?: any) {
    requestMultiple(permission).then(statuses => {
      let allow = true;
      permission.map(item => {
        if (statuses[item] !== RESULTS.GRANTED) {
          allow = false;
        }
      });
      callBack(allow);
    });
  }
  static checkPermissions(permission: Permission[]) {
    return checkMultiple(permission)
      .then(statuses => {
        let allow = true;
        permission.map(item => {
          if (statuses[item] !== RESULTS.GRANTED) {
            allow = false;
          }
        });
        return allow;
      })
      .catch(_err => {
        return false;
      });
  }
  static checkPermission(permission: Permission) {
    return check(permission)
      .then(result => {
        return result;
      })
      .catch(_err => {
        return false;
      });
  }
}
