import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  getCategoryListSuccess,
  getCategoryListError,
  getWalletDetailsSuccess,
  getWalletDetailsError,
} from './actions';
import {GET_CATEGORY_LIST, GET_WALLET_DETAILS} from './constants';

export function* getCategoryList() {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'GET',
      apiUrl: 'categoryList',
    });
    if (status === 200) {
      return yield put(getCategoryListSuccess(status, data.response));
    }
    return yield put(getCategoryListError(error));
  } catch (error) {
    return yield put(getCategoryListError(error));
  }
}

export function* getWalletDetails(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'walletDetailsOnDashboard',
      data: JSON.stringify({
        mobile: payload.mobile,
      }),
    });
    if (status === 200) {
      return yield put(getWalletDetailsSuccess(status, data.response[0]));
    }
    return yield put(getWalletDetailsError(error));
  } catch (error) {
    return yield put(getWalletDetailsError(error));
  }
}

export function* dashboardSaga() {
  yield takeLatest(GET_CATEGORY_LIST, getCategoryList);
}

export function* walletDetailsOnDashboardSaga() {
  yield takeLatest(GET_WALLET_DETAILS, getWalletDetails);
}

export default [dashboardSaga, walletDetailsOnDashboardSaga];
