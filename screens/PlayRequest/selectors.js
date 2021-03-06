import {createSelector} from 'reselect';
import {SEND_PLAY_REQ_STATE} from './constants';

const sendPlayRequest = state => state.get(SEND_PLAY_REQ_STATE);

export const selectUserStatus = () =>
  createSelector(sendPlayRequest, requestStatus =>
    requestStatus.getIn(['playerRequest1', 'status']),
  );

export const selectUserDetails = () =>
  createSelector(sendPlayRequest, requestStatus =>
    requestStatus.getIn(['playerRequest1', 'response']),
  );

export const selectLoadingStatus = () =>
  createSelector(sendPlayRequest, loading => loading.get('loading'));

export const selectPlayStatus = () =>
  createSelector(sendPlayRequest, requestStatus =>
    requestStatus.get('otherPlayerAvailable'),
  );

export const selectPlayerDetails = () =>
  createSelector(sendPlayRequest, playerDetails =>
    playerDetails.get('userData'),
  );

export const selectPlayerStatus = () =>
  createSelector(sendPlayRequest, status => status.get('PlayerCurrentStatus'));

export const playerExited = () =>
  createSelector(sendPlayRequest, exited => exited.get('playerExited'));
