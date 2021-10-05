import {
  SEND_PLAY_REQ,
  SEND_PLAY_REQ_SUCCESS,
  SEND_PLAY_REQ_ERROR,
  CHECK_REQ_STATUS,
  CHECK_REQ_STATUS_SUCCESS,
  CHECK_REQ_STATUS_ERROR,
  CLEAR_DATA,
} from './constants';
export function sendPlayRequest() {
  return {
    type: SEND_PLAY_REQ,
  };
}

export function sendPlayRequestSuccess(success, data) {
  return {
    type: SEND_PLAY_REQ_SUCCESS,
    success,
    data,
  };
}

export function sendPlayRequestError(error) {
  return {
    type: SEND_PLAY_REQ_ERROR,
    error,
  };
}

export function checkRequestStatus() {
  return {
    type: CHECK_REQ_STATUS,
  };
}

export function checkRequestStatusSuccess(success, data) {
  return {
    type: CHECK_REQ_STATUS_SUCCESS,
    success,
    data,
  };
}

export function checkRequestStatustError(error) {
  return {
    type: CHECK_REQ_STATUS_ERROR,
    error,
  };
}

export function clearData() {
  return {
    type: CLEAR_DATA,
  };
}
