import {Dimensions, StyleSheet} from 'react-native';
import {Colors, LayoutStyle, Fonts} from 'theme';
import {normalize, adjust} from 'utils/normalize';
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 25,
    padding: 10,
    elevation: 2,
    width: normalize(96),
  },
  buttonAgree: {
    backgroundColor: Colors.blue,
    marginLeft: 16,
  },
  buttonClose: {
    backgroundColor: Colors.white,
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textLeft: {
    color: Colors.blue,
    textAlign: 'center',
    fontSize: Fonts.size.size14,
  },
  textRight: {
    color: 'white',
    textAlign: 'center',
    fontSize: Fonts.size.size14,
  },
  title: {
    color: Colors.neutral1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.size16,
  },
  content: {
    color: Colors.neutral1,
    textAlign: 'center',
    fontSize: Fonts.size.size14,
  },
});
