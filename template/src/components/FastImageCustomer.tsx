import * as React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {getIconByName} from 'utils/ImageUtils';

interface FastImageCustomerProps {
  name?: any;
  style?: any;
  resizeMode?: any;
}

const Image = ({source, resizeMode, ...p}: FastImageProps) => (
  <FastImage
    source={source}
    resizeMode={resizeMode ? resizeMode : FastImage.resizeMode.contain}
    {...p}
  />
);

function FastImageCustomer(props: FastImageCustomerProps) {
  const {name, style, resizeMode} = props;
  let svg = getIconByName(name);
  if (svg) {
    return <Image style={style} source={svg.source} resizeMode={resizeMode} />;
  }
  return null;
}
FastImageCustomer.defaultProps = {
  style: {
    width: 30,
    height: 30,
  },
};
export default FastImageCustomer;
