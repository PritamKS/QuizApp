import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {getResultDataSuccess, getResultDataError} from './actions';
import {GET_RESULT} from './constants';

export function* getResultData(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'finalResult',
      data: JSON.stringify({
        token_id: payload.tokenId,
      }),
    });
    if (status === 200) {
      return yield put(getResultDataSuccess(data));
    }
    return yield put(getResultDataError(error));
  } catch (error) {
    return yield put(getResultDataError(error));
  }
}

export function* getResultSaga() {
  yield takeLatest(GET_RESULT, getResultData);
}
export default getResultSaga;
