import { takeLatest, call, put } from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  getQuestionListDisplayDataSuccess,
  getQuestionListDisplayDataError,
} from './actions';

export function* getQuestionListDisplayData() {
  try {
    const {
      response: { data, status, error, statusText },
    } = yield call(ApiService, {
      method: 'GET',
      apiUrl: 'getQuestionList',
    });
    if (status === 200) {
      return yield put(
        getQuestionListDisplayDataSuccess(status, data.response)
      );
    }
    return yield put(getQuestionListDisplayDataError(error));
  } catch (error) {
    return yield put(getQuestionListDisplayDataError(error));
  }
}

export function* getQuestionListSaga() {
  yield takeLatest('getQuestionList', getQuestionListDisplayData);
}
export default getQuestionListSaga;