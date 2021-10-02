import {createSelector} from 'reselect';
import {LOGIN_STATE} from './constant';

const login = state => state.get(LOGIN_STATE);

export const selectUserLoggedInStatus = () =>
  createSelector(login, userLoggedIn => userLoggedIn.get('loggedIn'));

export const selectUserPhoneNumber = () =>
  createSelector(login, phone => phone.get('phoneNumber'));
