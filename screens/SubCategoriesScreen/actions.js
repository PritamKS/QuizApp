import {
  GET_SUBCATEGORY_ERROR,
  GET_SUBCATEGORY_SUCCESS,
  GET_SUBCATEGORY_DATA,
  CLEAR_SUBCATEGORY_DATA,
} from './constants';

export function getSubCategory(quid) {
  return {
    type: GET_SUBCATEGORY_DATA,
    quid,
  };
}

export function getSubCategorySuccess(success, data) {
  return {
    type: GET_SUBCATEGORY_SUCCESS,
    success,
    data,
  };
}

export function getSubCategoryError(error) {
  return {
    type: GET_SUBCATEGORY_ERROR,
    error,
  };
}

export function clearCategoryQuestionsData() {
  return {
    type: CLEAR_SUBCATEGORY_DATA,
    quid,
  };
}
