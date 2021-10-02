import {createSelector} from 'reselect';

const sendPlayRequest = state => state.get('sendPlayRequest');

export const selectUserStatus = () =>
  createSelector(sendPlayRequest, requestStatus =>
    requestStatus.get('playerRequestStatus'),
  );

export const selectLoadingStatus = () =>
  createSelector(sendPlayRequest, loading => loading.get('loading'));

export const selectPlayStatus = () =>
  createSelector(sendPlayRequest, requestStatus =>
    requestStatus.get('requestStatus'),
  );
