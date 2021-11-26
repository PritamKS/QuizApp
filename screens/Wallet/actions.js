import {
  SET_AMOUNT,
  GET_ORDER_ID_SUCCESS,
  GET_ORDER_ID_ERROR,
  SET_ADD_MONEY,
  VERIFICATION_SUCCESS,
  VERIFICATION_ERROR,
  CLEAR_ORDER_STATUS,
  SERVER_INTIMATION_ON_SUCCESS,
  SET_UPI,
  WITHDRAW_MONEY,
  WITHDRAW_MONEY_SUCCESS,
  WITHDRAW_MONEY_ERROR,
  CLEAR_WITHDRAW_REQUEST,
  SERVER_INTIMATION_SUCCESS,
  SERVER_INTIMATION_ERROR,
  CLEAR_SERVER_VERIFICATION_MESSAGE,
} from './constants';

export function setAmountChange(value) {
  return {
    type: SET_AMOUNT,
    value,
  };
}

export function setUPI(value) {
  return {
    type: SET_UPI,
    value,
  };
}

export function getOrderIdSuccess(data) {
  return {
    type: GET_ORDER_ID_SUCCESS,
    data,
  };
}

export function getOrderIdError(error) {
  return {
    type: GET_ORDER_ID_ERROR,
    error,
  };
}

export function setAddMoney(amount, phone, id) {
  return {
    type: SET_ADD_MONEY,
    amount,
    phone,
    id,
  };
}

export function paymentVerifiedSuccess(data) {
  return {
    type: VERIFICATION_SUCCESS,
    data,
  };
}

export function paymentVerifiedError(data) {
  return {
    type: VERIFICATION_ERROR,
    data,
  };
}

export function clearOrderId() {
  return {
    type: CLEAR_ORDER_STATUS,
  };
}

export function ServerIntimationOnSuccess(order, payment, signature) {
  return {
    type: SERVER_INTIMATION_ON_SUCCESS,
    order,
    payment,
    signature,
  };
}

export function withdrawMoney(phone, playerId, amountToBeAdded, UPI) {
  return {
    type: WITHDRAW_MONEY,
    phone,
    playerId,
    amountToBeAdded,
    UPI,
  };
}

export function withdrawMoneySuccess(data) {
  return {
    type: WITHDRAW_MONEY_SUCCESS,
    data,
  };
}

export function withdrawMoneyError(error) {
  return {
    type: WITHDRAW_MONEY_ERROR,
    error,
  };
}

export function clearWithdrawRequest() {
  return {
    type: CLEAR_WITHDRAW_REQUEST,
  };
}

export function serverIntimationSuccess(data) {
  return {
    type: SERVER_INTIMATION_SUCCESS,
    data,
  };
}

export function serverIntimationError(data) {
  return {
    type: SERVER_INTIMATION_ERROR,
    data,
  };
}

export function clearServerVerifiedMessage() {
  return {
    type: CLEAR_SERVER_VERIFICATION_MESSAGE,
  };
}
