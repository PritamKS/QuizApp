export function sendOtp(phoneNumber, otpString) {
  return {
    type: 'sendOtp',
    phoneNumber,
    otpString,
  };
}
export function sendOtpSuccess(data) {
  return {
    type: 'sendOtpSuccess',
    data,
  };
}

export function sendOtpError(error) {
  return {
    type: 'sendOtpError',
    error,
  };
}

export function setOtp(value) {
  return {
    type: 'setOtp',
    value,
  };
}
