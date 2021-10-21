import {fromJS} from 'immutable';
import {
  GET_REGISTER_SUCCESS,
  GET_REGISTER_ERROR,
  SET_PHONE_NO,
  SET_NAME,
  SET_EMAIL,
  CLEAN_REGISTRATION_RECORD,
} from './constants';

const initialState = fromJS({
  loading: true,
  registered: false,
  phoneNumber: '',
  name: '',
  email: '',
  errorMessage: '',
});

const setRegistrationReducer = (state = initialState, {type, error, value}) => {
  switch (type) {
    case GET_REGISTER_SUCCESS:
      return state.set('registered', true);
    case GET_REGISTER_ERROR:
      return state.set('errorMessage', error);
    case SET_PHONE_NO:
      return state.set('phoneNumber', value);
    case SET_NAME:
      return state.set('name', value);
    case SET_EMAIL:
      return state.set('email', value);
    case CLEAN_REGISTRATION_RECORD:
      return state
        .set('phoneNumber', '')
        .set('name', '')
        .set('email', '')
        .set('registered', false);
    default:
      return state;
  }
};

export default setRegistrationReducer;
