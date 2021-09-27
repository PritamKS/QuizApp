import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {getLoginSuccess, getLoginError} from './actions';

export function* getLoginData(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
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
  yield takeLatest('getUserLogin', getLoginData);
}
export default getLoginSaga;
