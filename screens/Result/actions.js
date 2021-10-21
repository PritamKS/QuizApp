import {GET_RESULT, GET_RESULT_SUCCESS, GET_RESULT_ERROR} from './constants';
export function getResult(tokenId) {
  return {
    type: GET_RESULT,
    tokenId,
  };
}
export function getResultDataSuccess(data) {
  return {
    type: GET_RESULT_SUCCESS,
    data,
  };
}
export function getResultDataError(error) {
  return {
    type: GET_RESULT_ERROR,
    error,
  };
}
