import Toast from 'react-native-root-toast';

export default class ToastUtils {
  static show(message: string, duration = 5000) {
    Toast.show(message, {
      duration: duration,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  }
}
