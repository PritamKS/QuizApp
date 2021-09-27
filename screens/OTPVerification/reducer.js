import {fromJS} from 'immutable';

const initialState = fromJS({
  loading: true,
  userData: {},
});

const sendOtpReducer = (state = initialState, {type, error, data, value}) => {
  switch (type) {
    case 'setOtp':
      return state.set('otp', value);
    case 'sendOtpSuccess':
      return state.set('userData', data).set('loading', false);
    case 'sendOtpError':
      return state.set('errorMessage', error);
    default:
      return state;
  }
};

export default sendOtpReducer;
