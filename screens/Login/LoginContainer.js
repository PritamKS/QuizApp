import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Login from './Login';
import {getuserLogin, setPhoneNumber} from './actions';
import {selectUserLoggedInStatus, selectUserPhoneNumber} from './selectors';

const LoginContainer = props => {
  const logInPress = () => {
    props.dispatchLogin(props.phoneNumber);
  };
  const onChangeNumber = event => {
    const value = event.nativeEvent.text;
    props.dispatchOnNumberChange(value);
  };

  return (
    <Login
      userLoggedIn={props.userLoggedIn}
      phoneNumber={props.phoneNumber}
      logInPress={logInPress}
      onChangeNumber={onChangeNumber}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  userLoggedIn: selectUserLoggedInStatus(),
  phoneNumber: selectUserPhoneNumber(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchLogin: phoneNumber => dispatch(getuserLogin(phoneNumber)),
    dispatchOnNumberChange: phoneNumber =>
      dispatch(setPhoneNumber(phoneNumber)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
