import {
  SET_PHONE_NO,
  GET_LOGGED_IN,
  GET_LOGGEDIN_SUCCESS,
  GET_LOGGEDIN_ERROR,
} from './constant';

export function setPhoneNumber(value) {
  return {
    type: SET_PHONE_NO,
    value,
  };
}

export function getuserLogin(mobile) {
  return {
    type: GET_LOGGED_IN,
    mobile,
  };
}

export function getLoginSuccess(data) {
  return {
    type: GET_LOGGEDIN_SUCCESS,
    data,
  };
}

export function getLoginError(error) {
  return {
    type: GET_LOGGEDIN_ERROR,
    error,
  };
}
