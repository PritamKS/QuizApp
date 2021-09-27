export function setPhoneNumber(value) {
  return {
    type: 'setPhoneNumber',
    value,
  };
}

export function getuserLogin(mobile) {
  return {
    type: 'getUserLogin',
    mobile,
  };
}

export function getLoginSuccess(data) {
  return {
    type: 'loginSuccess',
    data,
  };
}

export function getLoginError(error) {
  return {
    type: 'loginError',
    error,
  };
}
