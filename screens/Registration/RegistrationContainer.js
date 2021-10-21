import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Registration from './Registration';
import {
  register,
  setPhoneNumber,
  setName,
  setEmail,
  cleanPreviousRegistrationRecord,
} from './actions';
import {
  selectUserPhoneNumber,
  selectUserName,
  selectUserEmail,
  selectUserRegistered,
} from './selectors';

const RegistrationContainer = props => {
  const submitPress = () => {
    props.dispatchRegister(props.phoneNumber, props.name, props.email);
  };
  const onChangeNumber = event => {
    const value = event.nativeEvent.text;
    props.dispatchOnNumberChange(value);
  };
  const onChangeEmail = event => {
    const value = event.nativeEvent.text;
    props.dispatchOnEmailChange(value);
  };
  const onChangeName = event => {
    const value = event.nativeEvent.text;
    props.dispatchOnNameChange(value);
  };
  const cleanPreviousRecords = () => {
    props.dispatchCleanPreviousRecords();
  };

  return (
    <Registration
      userRegistered={props.userRegistered}
      phoneNumber={props.phoneNumber}
      name={props.name}
      email={props.email}
      submitPress={submitPress}
      onChangeNumber={onChangeNumber}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      cleanPreviousRecords={cleanPreviousRecords}
    />
  );
};

export const mapStateToProps = createStructuredSelector({
  phoneNumber: selectUserPhoneNumber(),
  name: selectUserName(),
  email: selectUserEmail(),
  userRegistered: selectUserRegistered(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchRegister: (phoneNumber, name, email) =>
      dispatch(register(phoneNumber, name, email)),
    dispatchOnNumberChange: phoneNumber =>
      dispatch(setPhoneNumber(phoneNumber)),
    dispatchOnNameChange: name => dispatch(setName(name)),
    dispatchOnEmailChange: email => dispatch(setEmail(email)),
    dispatchCleanPreviousRecords: () =>
      dispatch(cleanPreviousRegistrationRecord()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationContainer);
