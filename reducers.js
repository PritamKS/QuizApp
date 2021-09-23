import {combineReducers} from 'redux-immutable';

import getQuestionListReducer from './screens/Dashboard/reducer';

export default function createReducer() {
  return combineReducers({
    ['dashboardQuestionList']: getQuestionListReducer,
  });
}
