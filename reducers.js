import {combineReducers} from 'redux-immutable';

import dashboardReducer from './screens/Dashboard/reducer';
import getLoginReducer from './screens/Login/reducer';
import sendOtpReducer from './screens/OTPVerification/reducer';
import subCategoryReducer from './screens/SubCategoriesScreen/reducer';
import sendPlayRequestReducer from './screens/PlayRequest/reducer';

import {LOGIN_STATE} from './screens/Login/constant';
import {OTP_VERIFICATION_STATE} from './screens/OTPVerification/constants';
import {DASHBOARD_STATE} from './screens/Dashboard/constants';
import {SUBCATEGORY_STATE} from './screens/SubCategoriesScreen/constants';
import {SEND_PLAY_REQ_STATE} from './screens/PlayRequest/constants';

export default function createReducer() {
  return combineReducers({
    [LOGIN_STATE]: getLoginReducer,
    [OTP_VERIFICATION_STATE]: sendOtpReducer,
    [DASHBOARD_STATE]: dashboardReducer,
    [SUBCATEGORY_STATE]: subCategoryReducer,
    [SEND_PLAY_REQ_STATE]: sendPlayRequestReducer,
  });
}
