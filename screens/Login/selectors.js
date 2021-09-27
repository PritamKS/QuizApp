import {createSelector} from 'reselect';

const login = state => state.get('login');

export const selectuserRegistered = () =>
  createSelector(login, userRegisteredStatus =>
    userRegisteredStatus.get('userRegistered'),
  );

export const selectuserPhoneNumber = () =>
  createSelector(login, phone => phone.get('phoneNumber'));
