import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {getRegisterSuccess, getRegisterError} from './actions';
import {SET_REGISTER} from './constants';

export function* setRegistration(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'registration',
      data: JSON.stringify({
        mobile: payload.phoneNumber,
        name: payload.name,
        emailid: payload.email,
      }),
    });
    if (status === 200) {
      return yield put(getRegisterSuccess(data.status));
    }
    return yield put(getRegisterError(error));
  } catch (error) {
    return yield put(getRegisterError(error));
  }
}

export function* setRegistrationSaga() {
  yield takeLatest(SET_REGISTER, setRegistration);
}
export default setRegistrationSaga;
