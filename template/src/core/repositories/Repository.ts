/* tslint:disable:variable-name */
import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import {catchErrorFromHttpResponse, createHttpService} from 'core/helpers/http';
import * as Sentry from '@sentry/react-native';
import {readStoreData} from 'utils/StorageUtils';
import {TOKEN_KEY} from 'core/config';
import * as RootNavigation from 'navigators/Root';
export class Repository {
  private static _defaultRequestInterceptor: (
    v: AxiosRequestConfig,
  ) => AxiosRequestConfig | Promise<AxiosRequestConfig>;

  private static _defaultResponseInterceptor: (
    v: AxiosResponse<any>,
  ) => AxiosResponse<any> | Promise<AxiosResponse<any>>;

  protected http: AxiosInstance;

  constructor(
    config?: AxiosRequestConfig,
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig,
    responseInterceptor?: <T>(response: AxiosResponse<T>) => AxiosResponse<T>,
  ) {
    this.http = createHttpService(
      config,
      requestInterceptor,
      responseInterceptor,
    );
    if (typeof Repository._defaultRequestInterceptor === 'function') {
      // this.http.interceptors.request.use(Repository._defaultRequestInterceptor);
      this.http.interceptors.request.use(async config => {
        let token: string | null = await readStoreData(TOKEN_KEY);
        // console.log(token);
        if (token && config) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      });
    }

    // console.log('config', config)
    if (typeof Repository._defaultResponseInterceptor === 'function') {
      this.http.interceptors.response.use(
        Repository._defaultResponseInterceptor,
        (error: AxiosError) => {
          // console.log(JSON.stringify(error));
          if (error?.response?.status) {
            switch (error.response.status) {
              case 400:
                if (__DEV__) {
                  const errorMap: Record<string, string> | null =
                    catchErrorFromHttpResponse(error.response.data);
                  // const message: string = Object.values(errorMap)[0];
                  // Alert.alert(message);
                  if (errorMap) {
                    Sentry.setExtras(errorMap);
                  }
                  Sentry.setExtra(
                    'ErrorMessage',
                    'Client request validation errors',
                  );
                  Sentry.captureException(error);
                }
                break;

              case 401:
                RootNavigation.navigateAndSimpleReset('LoginScreen');
                break;

              case 403:
                // if (__DEV__) {
                //   Alert.alert(i18next.t('errors.403'));
                // }
                break;

              case 420:
                // if (__DEV__) {
                //   if (error?.response?.data?.Message) {
                //     Alert.alert(error.response.data);
                //   } else {
                //     Alert.alert(i18next.t('errors.420'));
                //   }
                // }
                // Sentry.setExtra('ErrorMessage', error?.response?.data?.Message);
                // Sentry.captureException(error);
                break;

              case 500:
                // Sentry.captureMessage(
                //   typeof error.response.data === 'object'
                //     ? JSON.stringify(error.response.data)
                //     : error.response.data,
                // );
                // if (__DEV__) {
                //   Alert.alert(i18next.t('errors.500'));
                // }
                // Sentry.setExtra('ErrorMessage', error?.response?.data);
                // Sentry.captureException(error);
                break;

              case 502:
                // if (__DEV__) {
                //   Alert.alert(i18next.t('errors.502'));
                // }
                break;
            }
          }
          return Promise.reject(error);
        },
      );
    }
  }

  public setBaseURL(baseURL: string) {
    this.http.defaults.baseURL = baseURL;
  }

  public getHttpInstance(): AxiosInstance {
    return this.http;
  }

  static set defaultRequestInterceptor(
    value: (
      v: AxiosRequestConfig,
    ) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
  ) {
    this._defaultRequestInterceptor = value;
  }

  static set defaultResponseInterceptor(
    value: (
      v: AxiosResponse<any>,
    ) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
  ) {
    this._defaultResponseInterceptor = value;
  }
}
