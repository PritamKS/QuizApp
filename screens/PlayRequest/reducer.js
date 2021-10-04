import {fromJS} from 'immutable';

const initialState = fromJS({
  loading: true,
  playerRequest1: '',
  otherPlayerAvailable: false,
  errorMessage: '',
  successMessage: '',
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
        .set('playerRequest1', data);
    case 'sendPlayRequestError':
      return state.set('errorMessage', error).set('loading', false);
    case 'checkPlayStatusSuccess':
      return state.set('otherPlayerAvailable', data.status);
    case 'checkPlayStatusError':
      return state.set('errorMessageForPlayStatus', error);
    default:
      return state;
  }
};

export default sendPlayRequestReducer;
