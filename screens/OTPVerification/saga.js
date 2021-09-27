import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {sendOtpSuccess, sendOtpError} from './actions';

export function* sendOtpData(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'verifyOtp',
      data: JSON.stringify({
        mobile: payload.phoneNumber,
        otp: '12345',
      }),
    });
    if (status === 200) {
      return yield put(sendOtpSuccess(data));
    }
    return yield put(sendOtpError(error));
  } catch (error) {
    return yield put(sendOtpError(error));
  }
}

export function* sendOtpSaga() {
  yield takeLatest('sendOtp', sendOtpData);
}
export default sendOtpSaga;
