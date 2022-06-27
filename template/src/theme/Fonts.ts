import {normalize, adjust} from 'utils/normalize';
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const type = {
  base: 'SFProDisplay-Regular',
  bold: 'SFProDisplay-Bold',
  light: 'SFProDisplay-Light',
  medium: 'SFProDisplay-Medium',
  semibold: 'SFProDisplay-Semibold',
};
const size = {
  h1: adjust(38),
  h2: adjust(34),
  h3: adjust(30),
  h4: adjust(26),
  h5: adjust(20),
  h6: adjust(19),
  input: adjust(18),
  regular: adjust(17),
  medium: adjust(14),
  small: adjust(12),
  tiny: adjust(8.5),
  size36: adjust(36),
  size32: adjust(32),
  size34: adjust(34),
  size30: adjust(30),
  size24: adjust(24),
  size22: adjust(22),
  size20: adjust(20),
  size18: adjust(18),
  size17: adjust(17),
  size16: adjust(16),
  size15: adjust(15),
  size14: adjust(14),
  size13: adjust(13),
  size12: adjust(12),
  size11: adjust(11),
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
};
