import {
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_ERROR,
} from './constants';

export function getCategoryList() {
  return {
    type: GET_CATEGORY_LIST,
  };
}

export function getCategoryListSuccess(success, data) {
  return {
    type: GET_CATEGORY_LIST_SUCCESS,
    success,
    data,
  };
}

export function getCategoryListError(error) {
  return {
    type: GET_CATEGORY_LIST_ERROR,
    error,
  };
}
