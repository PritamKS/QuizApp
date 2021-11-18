import {createSelector} from 'reselect';
import {DASHBOARD_STATE} from './constants';

const dashboardState = state => state.get(DASHBOARD_STATE);

export const selectCategoryList = () =>
  createSelector(dashboardState, categoryList =>
    categoryList.get('categoryList'),
  );

export const selectLoadingStatus = () =>
  createSelector(dashboardState, loading => loading.get('loading'));

export const selectWalletBalance = () =>
  createSelector(dashboardState, balance =>
    balance.getIn(['walletDetails', 'wallet']),
  );
