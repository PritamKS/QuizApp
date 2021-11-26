import {fromJS} from 'immutable';
import {
  SEND_PLAY_REQ_SUCCESS,
  SEND_PLAY_REQ_ERROR,
  CHECK_REQ_STATUS_SUCCESS,
  CHECK_REQ_STATUS_ERROR,
  SET_PLAYER_CURRENT_STATUS,
  EXIT_PLAYER_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: true,
  playerRequest1: {},
  otherPlayerAvailable: 'false',
  userData: {},
  errorMessage: '',
  successMessage: '',
  errorMessageForPlayStatus: '',
  PlayerCurrentStatus: '',
  playerExited: false,
});

const sendPlayRequestReducer = (
  state = initialState,
  {type, success, error, data, action},
) => {
  switch (type) {
    case SEND_PLAY_REQ_SUCCESS:
      return state
        .set('successMessage', success)
        .set('loading', false)
        .set('playerRequest1', data);
    case SEND_PLAY_REQ_ERROR:
      return state.set('errorMessage', error).set('loading', false);
    case CHECK_REQ_STATUS_SUCCESS:
      return state
        .set('otherPlayerAvailable', data.status)
        .set('userData', data);
    case CHECK_REQ_STATUS_ERROR:
      return state.set('errorMessageForPlayStatus', error);
    case SET_PLAYER_CURRENT_STATUS:
      return state.set('PlayerCurrentStatus', action);
    case EXIT_PLAYER_SUCCESS:
      return state.set('playerExited', true);
    default:
      return state;
  }
};

export default sendPlayRequestReducer;
