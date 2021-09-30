import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  getSubCategoryDisplayDataSuccess,
  getSubCategoryDisplayDataError,
} from './actions';

export function* getSubCategoryDisplayData(payload) {
  try {
    console.log(payload.quid);
    const {
      response: {data, status, error, statusText},
    } = yield call(ApiService, {
      method: 'GET',
      apiUrl: 'getQuestionList',
    });
    if (status === 200) {
      return yield put(getSubCategoryDisplayDataSuccess(status, data.response));
    }
    return yield put(getSubCategoryDisplayDataError(error));
  } catch (error) {
    return yield put(getSubCategoryDisplayDataError(error));
  }
}

export function* getSubCategorySaga() {
  yield takeLatest('getSubCategory', getSubCategoryDisplayData);
}
export default getSubCategorySaga;
