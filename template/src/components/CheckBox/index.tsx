import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {Colors} from '../../theme';
interface ChekBoxProp {
  style?: any;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}
function CheckBox(props: ChekBoxProp) {
  const {style, onChange, checked, disabled} = props;
  const [value, setValue] = useState(checked);
  useEffect(() => {
    setValue(checked);
  }, [checked]);
  const changeValue = () => {
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(!value);
    }
    setValue(!value);
  };
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={changeValue}>
      {value && <Icon name={'check'} size={16} color={Colors.blue} />}
    </TouchableOpacity>
  );
}
CheckBox.defaultProps = {
  checked: false,
  disabled: false,
};
export default CheckBox;
