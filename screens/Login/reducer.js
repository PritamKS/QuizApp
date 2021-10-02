import {fromJS} from 'immutable';
import {
  GET_LOGGEDIN_SUCCESS,
  GET_LOGGEDIN_ERROR,
  SET_PHONE_NO,
} from './constant';

const initialState = fromJS({
  loading: true,
  loggedIn: false,
  phoneNumber: null,
});

const getLoginReducer = (state = initialState, {type, error, data, value}) => {
  switch (type) {
    case GET_LOGGEDIN_SUCCESS:
      return state.set('loggedIn', data).set('loading', false);
    case GET_LOGGEDIN_ERROR:
      return state.set('errorMessage', error);
    case SET_PHONE_NO:
      return state.set('phoneNumber', value);
    default:
      return state;
  }
};

export default getLoginReducer;
