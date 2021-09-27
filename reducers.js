import {combineReducers} from 'redux-immutable';

import getQuestionListReducer from './screens/Dashboard/reducer';
import getLoginReducer from './screens/Login/reducer';
import sendOtpReducer from './screens/OTPVerification/reducer';

export default function createReducer() {
  return combineReducers({
    ['dashboardQuestionList']: getQuestionListReducer,
    ['login']: getLoginReducer,
    ['otpVerify']: sendOtpReducer,
  });
}
