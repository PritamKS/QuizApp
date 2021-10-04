import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  sendPlayRequestSuccess,
  sendPlayRequestError,
  checkRequestStatusSuccess,
  checkRequestStatusError,
} from './actions';

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
        id: 23,
        player_id: 1,
        quiz_id: 3,
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
  yield takeLatest('sendPlayRequest', sendPlayRequest);
}
export function* checkRequestStatusSaga() {
  yield takeLatest('checkRequestStatus', checkRequestStatus);
}

export default [sendPlayRequestSaga, checkRequestStatusSaga];
