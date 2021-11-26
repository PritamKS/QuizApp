import {fromJS} from 'immutable';
import {
  SET_AMOUNT,
  GET_ORDER_ID_SUCCESS,
  CLEAR_ORDER_STATUS,
  SET_UPI,
  CLEAR_WITHDRAW_REQUEST,
  WITHDRAW_MONEY_SUCCESS,
  SERVER_INTIMATION_SUCCESS,
  CLEAR_SERVER_VERIFICATION_MESSAGE,
} from './constants';

const initialState = fromJS({
  amount: 0,
  phoneNumber: '',
  orderIdStatus: '',
  orderIdResponse: {},
  OrderIdReceived: false,
  UPI: '',
  withdrawRequest: '',
  serverVerificationResponse: '',
});

const walletReducer = (state = initialState, {type, error, data, value}) => {
  switch (type) {
    case SET_AMOUNT:
      return state.set('amount', value);
    case GET_ORDER_ID_SUCCESS:
      return state
        .set('orderIdStatus', data.message_detail)
        .set('orderIdResponse', data.response)
        .set('OrderIdReceived', true);
    case CLEAR_ORDER_STATUS:
      return state.set('OrderIdReceived', false);
    case SET_UPI:
      return state.set('UPI', value);
    case WITHDRAW_MONEY_SUCCESS:
      return state.set('withdrawRequest', data.message_detail);
    case CLEAR_WITHDRAW_REQUEST:
      return state.set('withdrawRequest', '');
    case SERVER_INTIMATION_SUCCESS:
      return state.set('serverVerificationResponse', data.message_detail);
    case CLEAR_SERVER_VERIFICATION_MESSAGE:
      return state.set('serverVerificationResponse', '');
    default:
      return state;
  }
};

export default walletReducer;
