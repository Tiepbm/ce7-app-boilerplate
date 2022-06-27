import ToastUtils from './ToastUtils';

export default class ErrorUtils {
  static showError(error: any) {
    let message = '';
    if (typeof error === 'string') {
      if (error === 'MAX_4_DEVICES_ERROR') {
        message = 'Đăng nhập quá 4 thiết bị cho 1 tài khoản';
      } else {
        message = error;
      }
    } else {
      if (error?.message && error?.message === 'Network Error') {
        message = 'Vui lòng kiểm tra lại kết nối mạng';
      } else if (typeof error?.response?.data === 'string') {
        message = error?.response?.data;
      } else {
        message = error?.response?.data?.error?.message;
      }
    }
    ToastUtils.show(
      message || 'Đã có lỗi xảy ra. Vui lòng liên hệ kỹ thuật để được hỗ trợ.',
    );
  }
}
