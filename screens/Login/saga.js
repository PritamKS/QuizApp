import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {getLoginSuccess, getLoginError} from './actions';
import {GET_LOGGED_IN} from './constant';

export function* getLoginData() {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'GET',
      apiUrl: 'login',
      data: JSON.stringify({
        mobile: '8787043285',
      }),
    });
    if (status === 200) {
      return yield put(getLoginSuccess(data.status));
    }
    return yield put(getLoginError(error));
  } catch (error) {
    return yield put(getLoginError(error));
  }
}

export function* getLoginSaga() {
  yield takeLatest(GET_LOGGED_IN, getLoginData);
}
export default getLoginSaga;
