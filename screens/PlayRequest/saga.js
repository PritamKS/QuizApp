import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  sendPlayRequestSuccess,
  sendPlayRequestError,
  checkRequestStatusSuccess,
  checkRequestStatusError,
} from './actions';
import {CHECK_REQ_STATUS, SEND_PLAY_REQ} from './constants';

export function* sendPlayRequest() {
  try {
    const {
      response: {data, status, error, statusText},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'playRequest',
      data: JSON.stringify({
        player_id: 2,
        player_name: 'sonu',
        quiz_id: 1,
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

export function* checkRequestStatus() {
  try {
    const {
      response: {data, status, error, statusText},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'checkRequest',
      data: JSON.stringify({
        id: '35',
        player_id: '1',
        player_name: 'Afza',
        quiz_id: '3',
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
