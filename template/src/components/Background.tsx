import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useTheme} from '@react-navigation/native';

interface Props {
  isLoading?: boolean;
  children?: any;
  backgroundColor?: string;
}

export default function Background(props: Props) {
  const {colors} = useTheme();
  const {isLoading, children, backgroundColor} = props;
  return (
    <SafeAreaView
      style={[
        styles.background,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : colors.background,
        },
      ]}>
      <StatusBar />
      <Spinner visible={isLoading} textContent={''} />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
  },
});
