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

export function checkRequestStatus() {
  return {
    type: 'checkRequestStatus',
  };
}

export function checkRequestStatusSuccess(success, data) {
  return {
    type: 'checkRequestStatusSuccess',
    success,
    data,
  };
}

export function checkRequestStatustError(error) {
  return {
    type: 'checkRequestStatusError',
    error,
  };
}

export function clearData() {
  return {
    type: 'clearData',
  };
}
