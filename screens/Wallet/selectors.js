import {createSelector} from 'reselect';
import {WALLET_STATE} from './constants';

const wallet = state => state.get(WALLET_STATE);

export const amountToBeAddedSelector = () =>
  createSelector(wallet, amount => amount.get('amount'));

export const OrderIdReceivedSelector = () =>
  createSelector(wallet, OrderIdReceivedStatus =>
    OrderIdReceivedStatus.get('OrderIdReceived'),
  );

export const orderIdDetailsSelector = () =>
  createSelector(wallet, orderId => orderId.get('orderIdResponse'));

export const UPISelector = () => createSelector(wallet, upi => upi.get('UPI'));

export const withdrawRequestSelector = () =>
  createSelector(wallet, withdrawRequest =>
    withdrawRequest.get('withdrawRequest'),
  );

export const serverVerificationResponseSelector = () =>
  createSelector(wallet, serverVerificationResponse =>
    serverVerificationResponse.get('serverVerificationResponse'),
  );
