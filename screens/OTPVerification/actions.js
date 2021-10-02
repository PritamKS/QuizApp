import {SEND_OTP, SEND_OTP_SUCCESS, SEND_OTP_ERROR, SET_OTP} from './constants';
export function sendOtp(phoneNumber, otpString) {
  return {
    type: SEND_OTP,
    phoneNumber,
    otpString,
  };
}
export function sendOtpSuccess(data) {
  return {
    type: SEND_OTP_SUCCESS,
    data,
  };
}

export function sendOtpError(error) {
  return {
    type: SEND_OTP_ERROR,
    error,
  };
}

export function setOtp(value) {
  return {
    type: SET_OTP,
    value,
  };
}
