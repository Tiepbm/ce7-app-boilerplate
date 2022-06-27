import * as React from 'react';
import {View, Text, TouchableWithoutFeedback, Modal} from 'react-native';
import {styles} from './styles';

function ModalComponent(props: any) {
  const {modalStatus, modalToggle} = props;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalStatus}
      onRequestClose={() => {
        if (modalToggle) modalToggle(!modalStatus);
      }}>
      <TouchableWithoutFeedback
        onPress={() => modalToggle && modalToggle(!modalStatus)}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback>
            <View style={styles.modalInner}>
              <Text>Something in the modal</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default ModalComponent;
