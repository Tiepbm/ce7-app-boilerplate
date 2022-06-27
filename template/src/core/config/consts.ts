import {
  REACT_API_URL,
  REACT_API_WSS_URL,
  REACT_SOCKET_URL,
  REACT_CHAT_IMG_URL,
} from '@env';
export const API_BASE_URL: string = REACT_API_URL + '';
export const API_WSS_BASE_URL: string = REACT_API_WSS_URL + '';
export const SOCKET_URL: string = REACT_SOCKET_URL + '';
export const CHAT_IMG_URL: string = REACT_CHAT_IMG_URL + '';

export const INPUT_DEBOUNCE_TIME: number = 400;
export const PAGE_SIZE: number = 20;

export const STANDARD_DATE_FORMAT: string = 'DD/MM/YYYY';
export const STANDARD_DATE_FORMAT3: string = 'MM/YYYY';
export const STANDARD_TIME_FORMAT: string = 'HH:mm:ss';
export const STANDARD_DATE_TIME_FORMAT: string = `${STANDARD_DATE_FORMAT} ${STANDARD_TIME_FORMAT}`;
export const DEFAULT_TAKE: number = 10;
export const PROFILE_KEY = 'PROFILE';
export const TOKEN_KEY = 'TOKEN_KEY';
export const FIRST_INSTALL = 'FIRST_INSTALL';
export const USERNAME = 'USERNAME';
export const BLOCK_5_MINUTE = 'BLOCK_5_MINUTE';
export const FCM_TOKEN = 'FCM_TOKEN';
export const IS_RATE = 'IS_RATE';
export const REF_CODE = 'REF_CODE';
export const LINK_INVITE = 'LINK_INVITE';
export const DAY_INSTALL_APP = 'DAY_INSTALL_APP';
export const APP_STORE_LINK = 'https://apps.apple.com/app/id1583681447';
export const PLAY_STORE_LINK = 'market://details?id=com.babiuni';
export const VACCINATION_BOOK_WELCOME_ACCEPTED =
  'VACCINATION_BOOK_WELCOME_ACCEPTED';
