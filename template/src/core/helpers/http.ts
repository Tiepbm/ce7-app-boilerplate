import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Repository} from 'core/repositories/Repository';
import {
  transformAPIRequestValue,
  transformAPIResponseValue,
} from 'core/helpers/api';
import {API_BASE_URL} from 'core/config';
import {transformAPIContent} from 'core/helpers/data';

export function createHttpService(
  config: AxiosRequestConfig | undefined,
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig,
  responseInterceptor?: (response: AxiosResponse) => any,
): AxiosInstance {
  const instance: AxiosInstance = axios.create(config);
  if (requestInterceptor) {
    instance.interceptors.request.use(requestInterceptor);
  }
  if (responseInterceptor) {
    instance.interceptors.response.use(responseInterceptor);
  }
  return instance;
}

export function catchErrorFromHttpResponse(
  responseData: any,
): Record<string, string> | null {
  if (typeof responseData === 'object' && responseData !== null) {
    let errorMap: Record<string, string> = {};
    if (responseData.errors) {
      Object.entries(responseData.errors).forEach(([key, value]) => {
        errorMap[`Error-${key as string}`] = value as string;
      });
    }
    Object.entries(responseData).forEach(([key, value]) => {
      if (key !== 'errors' && typeof value === 'object' && value !== null) {
        errorMap = {
          ...errorMap,
          ...(catchErrorFromHttpResponse(value) ?? {}),
        };
      }
    });
    return errorMap;
  }
  return null;
}

Repository.defaultRequestInterceptor = requestInterceptor;

Repository.defaultResponseInterceptor = responseInterceptor;

export function requestInterceptor(
  config: AxiosRequestConfig,
): AxiosRequestConfig {
  if (typeof config.params === 'object' && config.params !== null) {
    config.params = transformAPIContent(
      config.params,
      undefined,
      transformAPIRequestValue,
    );
  }
  if (typeof config.data === 'object' && config.data !== null) {
    if (config.headers['Content-Type'] === 'application/json') {
      config.data = transformAPIContent(
        config.data,
        undefined,
        transformAPIRequestValue,
      );
    }
  }
  return config;
}

export function responseInterceptor<T>(response: AxiosResponse<T>) {
  if (typeof response.data === 'object' && response.data !== null) {
    if (response.headers['Content-Type'] === 'application/json') {
      response.data = transformAPIContent(
        response.data as any,
        undefined,
        transformAPIResponseValue,
      );
    }
  }
  return response;
}

export const httpConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
