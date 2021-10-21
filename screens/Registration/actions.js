import {
  SET_PHONE_NO,
  SET_NAME,
  SET_EMAIL,
  SET_REGISTER,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_ERROR,
  CLEAN_REGISTRATION_RECORD,
} from './constants';

export function setPhoneNumber(value) {
  return {
    type: SET_PHONE_NO,
    value,
  };
}

export function setName(value) {
  return {
    type: SET_NAME,
    value,
  };
}

export function setEmail(value) {
  return {
    type: SET_EMAIL,
    value,
  };
}

export function register(phoneNumber, name, email) {
  return {
    type: SET_REGISTER,
    phoneNumber,
    name,
    email,
  };
}

export function getRegisterSuccess(data) {
  return {
    type: GET_REGISTER_SUCCESS,
    data,
  };
}

export function getRegisterError(error) {
  return {
    type: GET_REGISTER_ERROR,
    error,
  };
}

export function cleanPreviousRegistrationRecord() {
  return {
    type: CLEAN_REGISTRATION_RECORD,
  };
}
