import {
  SEND_PLAY_REQ,
  SEND_PLAY_REQ_SUCCESS,
  SEND_PLAY_REQ_ERROR,
  CHECK_REQ_STATUS,
  CHECK_REQ_STATUS_SUCCESS,
  CHECK_REQ_STATUS_ERROR,
  CLEAR_DATA,
  SET_PLAYER_CURRENT_STATUS,
  EXIT_PLAYER,
  EXIT_PLAYER_SUCCESS,
  EXIT_PLAYER_ERROR,
} from './constants';

export function sendPlayRequest(playerData, questionId) {
  return {
    type: SEND_PLAY_REQ,
    playerData,
    questionId,
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

export function checkRequestStatus(id, player_id, player_name, quiz_id) {
  return {
    type: CHECK_REQ_STATUS,
    id,
    player_id,
    player_name,
    quiz_id,
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

export function setPlayerCurrentStatus(action) {
  return {
    type: SET_PLAYER_CURRENT_STATUS,
    action,
  };
}

export function exitPlayerWaiting(reqId, playerId) {
  return {
    type: EXIT_PLAYER,
    reqId,
    playerId,
  };
}
export function exitPlayerRequestSuccess(success, data) {
  return {
    type: EXIT_PLAYER_SUCCESS,
    success,
    data,
  };
}

export function exitPlayerRequestError(error) {
  return {
    type: EXIT_PLAYER_ERROR,
    error,
  };
}
