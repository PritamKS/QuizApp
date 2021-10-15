import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  sendPlayRequestSuccess,
  sendPlayRequestError,
  checkRequestStatusSuccess,
  checkRequestStatusError,
} from './actions';
import {CHECK_REQ_STATUS, SEND_PLAY_REQ} from './constants';

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

export function* sendPlayRequestSaga() {
  yield takeLatest(SEND_PLAY_REQ, sendPlayRequest);
}
export function* checkRequestStatusSaga() {
  yield takeLatest(CHECK_REQ_STATUS, checkRequestStatus);
}

export default [sendPlayRequestSaga, checkRequestStatusSaga];
