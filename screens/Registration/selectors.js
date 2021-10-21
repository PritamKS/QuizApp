import {createSelector} from 'reselect';
import {REGISTRATION_STATE} from './constants';

const registrationState = state => state.get(REGISTRATION_STATE);

export const selectUserRegistered = () =>
  createSelector(registrationState, userRegistered =>
    userRegistered.get('registered'),
  );

export const selectUserPhoneNumber = () =>
  createSelector(registrationState, phone => phone.get('phoneNumber'));

export const selectUserName = () =>
  createSelector(registrationState, phone => phone.get('name'));

export const selectUserEmail = () =>
  createSelector(registrationState, phone => phone.get('email'));
