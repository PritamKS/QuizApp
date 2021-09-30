import {combineReducers} from 'redux-immutable';

import getQuestionListReducer from './screens/Dashboard/reducer';
import getLoginReducer from './screens/Login/reducer';
import sendOtpReducer from './screens/OTPVerification/reducer';
import subCategoryReducer from './screens/SubCategoriesScreen/reducer';

export default function createReducer() {
  return combineReducers({
    ['dashboardQuestionList']: getQuestionListReducer,
    ['login']: getLoginReducer,
    ['otpVerify']: sendOtpReducer,
    ['subCategoryDataList']: subCategoryReducer,
  });
}
