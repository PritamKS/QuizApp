import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  sendPlayRequestSuccess,
  sendPlayRequestError,
  checkRequestStatusSuccess,
  checkRequestStatusError,
  exitPlayerRequestSuccess,
  exitPlayerRequestError,
} from './actions';
import {CHECK_REQ_STATUS, SEND_PLAY_REQ, EXIT_PLAYER} from './constants';

export function* sendPlayRequest(payload) {
  console.log(payload);
  try {
    const {
      response: {data, status, error, statusText},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'playRequest',
      data: JSON.stringify({
        player_id: payload.playerData[0].id,
        player_name: payload.playerData[0].name,
        quiz_id: payload.questionId,
      }),
    });
    if (status === 200) {
      return yield put(sendPlayRequestSuccess(status, data));
    }
    return yield put(sendPlayRequestError(error));
  } catch (error) {
    return yield put(sendPlayRequestError(error));
  }
}

export function* checkRequestStatus(payload) {
  try {
    const {
      response: {data, status, error, statusText},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'checkRequest',
      data: JSON.stringify({
        id: payload.id,
        player_id: payload.player_id,
        player_name: payload.player_name,
        quiz_id: payload.quiz_id,
      }),
    });
    if (status === 200) {
      return yield put(checkRequestStatusSuccess(status, data));
    }
    return yield put(checkRequestStatusError(error));
  } catch (error) {
    return yield put(checkRequestStatusError(error));
  }
}

export function* exitPlayerRequest(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'exitWaitingPlayer',
      data: JSON.stringify({
        player_id: payload.playerId,
        playing_req_id: payload.reqId,
      }),
    });
    if (status === 200) {
      return yield put(exitPlayerRequestSuccess(status, data));
    }
    return yield put(exitPlayerRequestError(error));
  } catch (error) {
    return yield put(exitPlayerRequestError(error));
  }
}

export function* sendPlayRequestSaga() {
  yield takeLatest(SEND_PLAY_REQ, sendPlayRequest);
}
export function* checkRequestStatusSaga() {
  yield takeLatest(CHECK_REQ_STATUS, checkRequestStatus);
}
export function* exitWaitingPlayerSaga() {
  yield takeLatest(EXIT_PLAYER, exitPlayerRequest);
}

export default [
  sendPlayRequestSaga,
  checkRequestStatusSaga,
  exitWaitingPlayerSaga,
];
