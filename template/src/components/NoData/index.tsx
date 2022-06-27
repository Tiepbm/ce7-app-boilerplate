import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useTranslation} from 'react-i18next';
import FastImageCustomer from '../FastImageCustomer';
import {styles} from './styles';
import {LayoutStyle} from '../../theme';
import lodash from 'lodash';
interface NoDataProps {
  error?: any;
  onRetry?: () => void;
  loading?: boolean;
}
function NoData(props: NoDataProps) {
  const {t} = useTranslation();
  const {error, onRetry, loading} = props;
  const renderErrorNetwork = () => {
    return (
      <View style={LayoutStyle.center}>
        <FastImageCustomer name={'network'} style={{width: 72, height: 56}} />
        <Text style={styles.titleNetwork}>{t('errors.network')}</Text>
        <Text style={styles.titleNetwork2}>{t('errors.networkSub')}</Text>
        <TouchableOpacity
          onPress={() => {
            if (onRetry) {
              onRetry();
            }
          }}
          style={styles.btRetry}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.btRetryTitle}>{t('button.retry')}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  const renderError = () => {
    let statusCode = lodash.get(error, 'response.status', 'message');
    return (
      <View style={LayoutStyle.center}>
        <Text style={styles.titleError}>{t('errors.opps')}</Text>
        <FastImageCustomer name={'empty'} style={{width: 245, height: 164}} />
        <Text style={styles.titleError2}>{t(`errors.${statusCode}`)}</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      {!error
        ? null
        : error.message === 'Network Error'
        ? renderErrorNetwork()
        : renderError()}
    </View>
  );
}
export default NoData;
