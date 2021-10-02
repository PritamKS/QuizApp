import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {getCategoryListSuccess, getCategoryListError} from './actions';
import {GET_CATEGORY_LIST} from './constants';

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

export function* dashboardSaga() {
  yield takeLatest(GET_CATEGORY_LIST, getCategoryList);
}
export default dashboardSaga;
