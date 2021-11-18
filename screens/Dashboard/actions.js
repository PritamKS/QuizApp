import {
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_ERROR,
  GET_WALLET_DETAILS,
  GET_WALLET_DETAILS_SUCCESS,
  GET_WALLET_DETAILS_ERROR,
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

export function getWalletDetails(mobile) {
  return {
    type: GET_WALLET_DETAILS,
    mobile,
  };
}

export function getWalletDetailsSuccess(success, data) {
  return {
    type: GET_WALLET_DETAILS_SUCCESS,
    success,
    data,
  };
}

export function getWalletDetailsError(error) {
  return {
    type: GET_WALLET_DETAILS_ERROR,
    error,
  };
}
