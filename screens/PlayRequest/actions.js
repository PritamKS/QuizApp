export function sendPlayRequest() {
  return {
    type: 'sendPlayRequest',
  };
}

export function sendPlayRequestSuccess(success, data) {
  return {
    type: 'sendPlayRequestSuccess',
    success,
    data,
  };
}

export function sendPlayRequestError(error) {
  return {
    type: 'sendPlayRequestError',
    error,
  };
}

export function checkPlayStatus() {
  return {
    type: 'checkPlayStatus',
  };
}

export function checkPlayStatusSuccess(success, data) {
  return {
    type: 'checkPlayStatusSuccess',
    success,
    data,
  };
}

export function checkPlayStatustError(error) {
  return {
    type: 'checkPlayStatusError',
    error,
  };
}

export function clearData() {
  return {
    type: 'clearData',
  };
}
