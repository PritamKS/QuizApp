import {createSelector} from 'reselect';
import {OTP_VERIFICATION_STATE} from './constants';

const otpVerify = state => state.get(OTP_VERIFICATION_STATE);

export const selectOtp = () => createSelector(otpVerify, otp => otp.get('OTP'));
export const selectUserStatus = () =>
  createSelector(otpVerify, status => status.getIn(['userData', 'status']));
