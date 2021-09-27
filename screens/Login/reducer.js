import {fromJS} from 'immutable';

const initialState = fromJS({
  loading: true,
  userRegistered: false,
  phoneNumber: null,
});

const getLoginReducer = (state = initialState, {type, error, data, value}) => {
  switch (type) {
    case 'loginSuccess':
      return state.set('userRegistered', data).set('loading', false);
    case 'loginError':
      return state.set('errorMessage', error);
    case 'setPhoneNumber':
      return state.set('phoneNumber', value);
    default:
      return state;
  }
};

export default getLoginReducer;
