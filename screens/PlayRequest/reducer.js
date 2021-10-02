import {fromJS} from 'immutable';

const initialState = fromJS({
  loading: true,
  playerRequestStatus: '',
  errorMessage: '',
  successMessage: '',
  requestStatus: false,
  errorMessageForPlayStatus: '',
});

const sendPlayRequestReducer = (
  state = initialState,
  {type, success, error, data},
) => {
  switch (type) {
    case 'sendPlayRequestSuccess':
      return state
        .set('successMessage', success)
        .set('loading', false)
        .set('playerRequestStatus', data);
    case 'sendPlayRequestError':
      return state.set('errorMessage', error).set('loading', false);
    case 'checkPlayStatusSuccess':
      return state.set('requestStatus', data.status);
    case 'checkPlayStatusError':
      return state.set('errorMessageForPlayStatus', error);
    case 'clearData':
      return state.set('playerRequestStatus', '').set('successMessage', '');
    default:
      return state;
  }
};

export default sendPlayRequestReducer;
