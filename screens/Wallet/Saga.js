import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  getOrderIdSuccess,
  getOrderIdError,
  withdrawMoneySuccess,
  withdrawMoneyError,
  serverIntimationSuccess,
  serverIntimationError,
} from './actions';
import {
  SET_ADD_MONEY,
  SERVER_INTIMATION_ON_SUCCESS,
  WITHDRAW_MONEY,
} from './constants';

export function* getOrderId(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'orderId',
      data: JSON.stringify({
        mobile: payload.phone,
        player_id: payload.id,
        amount: payload.amount,
      }),
    });
    if (status === 200) {
      yield put(getOrderIdSuccess(data));
    }
    return yield put(getOrderIdError(error));
  } catch (error) {
    return yield put(getOrderIdError(error));
  }
}

export function* serverIntimation(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'sendRazRespToBackend',
      data: JSON.stringify({
        razorpay_order_id: payload.order,
        razorpay_payment_id: payload.payment,
        razorpay_signature: payload.signature,
      }),
    });
    if (status === 200) {
      yield put(serverIntimationSuccess(data));
    }
    return yield put(serverIntimationError(error));
  } catch (error) {
    return yield put(serverIntimationError(error));
  }
}

export function* withdrawMoney(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'withdrawMoney',
      data: JSON.stringify({
        mobile: payload.phone,
        player_id: payload.playerId,
        amount: payload.amountToBeAdded,
        upiid: payload.UPI,
      }),
    });
    if (status === 200) {
      yield put(withdrawMoneySuccess(data));
    }
    return yield put(withdrawMoneyError(error));
  } catch (error) {
    return yield put(withdrawMoneyError(error));
  }
}

export function* getOrderIdSaga() {
  yield takeLatest(SET_ADD_MONEY, getOrderId);
}

export function* serverIntimationSaga() {
  yield takeLatest(SERVER_INTIMATION_ON_SUCCESS, serverIntimation);
}

export function* withdrawMoneySaga() {
  yield takeLatest(WITHDRAW_MONEY, withdrawMoney);
}

export default [getOrderIdSaga, serverIntimationSaga, withdrawMoneySaga];
