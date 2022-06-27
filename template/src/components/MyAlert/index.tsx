import {Modal, Pressable, Text, View} from 'react-native';
import * as React from 'react';
import {styles} from './styles';
import {LayoutStyle} from '../../theme';
export interface MyAlertProps {
  modalVisible: boolean;
  title?: string;
  content: string;
  onCancel: () => void;
  onSubmit: () => void;
}
function MyAlert(props: MyAlertProps) {
  const {modalVisible, onCancel, onSubmit, title, content} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onCancel();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{title ? title : ''}</Text>
          <Text style={styles.content}>{content}</Text>
          <View style={[LayoutStyle.row, {marginTop: 16}]}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onCancel()}>
              <Text style={styles.textLeft}>{'Hủy'}</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonAgree]}
              onPress={() => onSubmit()}>
              <Text style={styles.textRight}>{'Đồng ý'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default MyAlert;
