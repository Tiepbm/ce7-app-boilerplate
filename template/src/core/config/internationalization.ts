import {initialGlobalState} from './global';
import {InitOptions} from 'i18next';
export const i18nextConfig: InitOptions = {
  resources: {
    en: {
      translation: require('../../../public/i18n/en.json'),
    },
    vi: {
      translation: require('../../../public/i18n/vi.json'),
    },
  },
  lng: initialGlobalState.language,
  fallbackLng: initialGlobalState.fallbackLanguage,
};
