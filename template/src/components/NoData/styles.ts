import {StyleSheet} from 'react-native';
import Fonts from 'theme/Fonts';
import {Colors} from 'theme';

export const styles = StyleSheet.create({
  titleError: {
    fontSize: Fonts.size.size34,
    color: Colors.gray,
    fontWeight: '700',
    marginBottom: 30,
  },
  titleError2: {
    fontSize: Fonts.size.size17,
    color: Colors.gray,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 24,
  },
  titleNetwork: {
    fontSize: Fonts.size.size17,
    color: Colors.neutral1,
    fontWeight: '600',
    marginTop: 24,
  },
  titleNetwork2: {
    fontSize: Fonts.size.size17,
    color: Colors.gray,
    fontWeight: '600',
    marginTop: 24,
    textAlign: 'center',
  },
  btRetry: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 111,
    height: 36,
    borderRadius: 20,
    backgroundColor: Colors.blue,
    marginTop: 24,
  },
  btRetryTitle: {
    color: Colors.white,
    fontSize: Fonts.size.size14,
    marginLeft: 5,
  },
});
