import {Dimensions, Platform, PixelRatio} from 'react-native';
export var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iPhone 11 scale
const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 812;

function normalize(size: number, based: 'width' | 'height' = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  let temp;
  if (Platform.OS === 'ios') {
    temp = Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    temp = Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
  return temp;
}

const ratio = PixelRatio.get();
const {width, height} = Dimensions.get('window');
function adjust(size: number) {
  if (ratio >= 2 && ratio < 3) {
    if (width < 360) {
      return size * 0.95;
    } else if (height < 667) {
      return size;
    } else if (height >= 667 && height <= 735) {
      return size * 1.1;
    }

    return size * 1.25;
  } else if (ratio >= 3 && ratio < 3.5) {
    if (width < 360) {
      return size;
    } else if (width == 360) {
      return size * 1.05;
    } else if (height < 667) {
      return size * 1.15;
    } else if (height >= 667 && height <= 735) {
      return size * 1.2;
    }

    return size * 1.24;
  } else if (ratio >= 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.2;
    } else if (height >= 667 && height <= 735) {
      return size * 1.25;
    }

    return size * 1.3;
  }

  return size;
}
export {normalize, adjust};
