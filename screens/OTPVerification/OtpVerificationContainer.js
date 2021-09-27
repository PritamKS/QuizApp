import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import OtpVerification from './OtpVerification';
import {sendOtp, setOtp} from './actions';
import {selectOtp, selectUserStatus} from './selectors';

const OtpVerificationContainer = props => {
  const {phoneNumber} = props.route.params;
  const setOtpString = formattedOtpString => {
    props.dispatchSetOtp(formattedOtpString);
  };
  const submitOtp = (phone, otp) => {
    props.dispatchSubmitOtp(phone, otp);
  };
  return (
    <OtpVerification
      setOtpString={setOtpString}
      submitOtp={submitOtp}
      phoneNumber={phoneNumber}
      Otp={props.Otp}
      phoneNumber={phoneNumber}
      userStatus={props.userStatus}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  Otp: selectOtp(),
  userStatus: selectUserStatus(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchSetOtp: formattedOtpString => dispatch(setOtp(formattedOtpString)),
    dispatchSubmitOtp: (phone, otp) => dispatch(sendOtp(phone, otp)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OtpVerificationContainer);
