import {fromJS} from 'immutable';
import {
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_ERROR,
  GET_WALLET_DETAILS_SUCCESS,
  GET_WALLET_DETAILS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: true,
  categoryList: [],
  errorMessage: '',
  successMessage: '',
  walletDetails: '',
});

const dashboardReducer = (
  state = initialState,
  {type, success, error, data},
) => {
  switch (type) {
    case GET_CATEGORY_LIST_SUCCESS:
      return state
        .set('successMessage', success)
        .set('loading', false)
        .set('categoryList', data);
    case GET_CATEGORY_LIST_ERROR:
      return state.set('errorMessage', error).set('loading', false);
    case GET_WALLET_DETAILS_SUCCESS:
      return state
        .set('successMessage', success)
        .set('loading', false)
        .set('walletDetails', data);
    case GET_WALLET_DETAILS_ERROR:
      return state.set('errorMessage', error).set('loading', false);
    default:
      return state;
  }
};

export default dashboardReducer;
