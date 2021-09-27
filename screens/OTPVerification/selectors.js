import {createSelector} from 'reselect';

const otpVerify = state => state.get('otpVerify');

export const selectOtp = () => createSelector(otpVerify, otp => otp.get('otp'));
export const selectUserStatus = () =>
  createSelector(otpVerify, status => status.getIn(['userData', 'status']));
