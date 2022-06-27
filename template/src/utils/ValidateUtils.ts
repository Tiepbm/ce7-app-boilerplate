import {Dispatch, SetStateAction} from 'react';
import {validateEmail} from 'utils/StringUtils';

export const checkPhone = (
  t: any,
  value: any,
  callback: Dispatch<SetStateAction<any>>,
) => {
  if (!value) {
    callback(t('errors.phoneNumberEmpty'));
  }
};
export const checkEmail = (
  t: any,
  value: any,
  callback: Dispatch<SetStateAction<any>>,
) => {
  if (!value) {
    callback(t('errors.emailEmpty'));
  } else if (validateEmail(value)) {
    callback(t('errors.emailInvalid'));
  }
};
export const checkPassword = (
  t: any,
  value: any,
  callback: Dispatch<SetStateAction<any>>,
) => {
  if (!value) {
    callback(t('errors.passwordEmpty'));
  } else if (value.indexOf(' ') >= 0) {
    callback(t('errors.passwordNotSpace'));
  } else if (value.length < 6) {
    callback(t('errors.passwordShort'));
  }
};
export const checkPasswordConfirm = (
  t: any,
  password: any,
  passwordConfirm: any,
  callback: Dispatch<SetStateAction<any>>,
) => {
  if (!passwordConfirm) {
    callback(t('errors.passwordConfirmEmpty'));
  } else {
    if (password !== passwordConfirm) {
      callback(t('errors.passwordConfirmInCorrect'));
    }
  }
};
