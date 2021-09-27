import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Login from './Login';
import {getuserLogin, setPhoneNumber} from './actions';
import {selectuserRegistered, selectuserPhoneNumber} from './selectors';

const LoginContainer = props => {
  const logInPress = () => {
    props.dispatchCheckLogin(props.phoneNumber);
  };
  const onChangeNumber = event => {
    const value = event.nativeEvent.text;
    props.dispatchSaveNumber(value);
  };
  return (
    <Login
      userRegistered={props.userRegistered}
      phoneNumber={props.phoneNumber}
      logInPress={logInPress}
      onChangeNumber={onChangeNumber}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  userRegistered: selectuserRegistered(),
  phoneNumber: selectuserPhoneNumber(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchCheckLogin: phoneNumber => dispatch(getuserLogin(phoneNumber)),
    dispatchSaveNumber: phoneNumber => dispatch(setPhoneNumber(phoneNumber)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
