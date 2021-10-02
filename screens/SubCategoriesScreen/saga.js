import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {getSubCategorySuccess, getSubCategoryError} from './actions';
import {GET_SUBCATEGORY_DATA} from './constants';

export function* getSubCategory(payload) {
  try {
    console.log(payload.quid);
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'GET',
      apiUrl: 'categoryList',
    });
    if (status === 200) {
      return yield put(getSubCategorySuccess(status, data.response));
    }
    return yield put(getSubCategoryError(error));
  } catch (error) {
    return yield put(getSubCategoryError(error));
  }
}

export function* SubCategorySaga() {
  yield takeLatest(GET_SUBCATEGORY_DATA, getSubCategory);
}
export default SubCategorySaga;
