import {all} from 'redux-saga/effects';
import dashboardSaga from '../screens/Dashboard/saga';
import getLoginSaga from '../screens/Login/saga';
import sendOtpSaga from '../screens/OTPVerification/saga';
import SubCategorySaga from '../screens/SubCategoriesScreen/saga';
import sendPlayRequestSaga from '../screens/PlayRequest/saga';
import GetQuestionsSaga from '../screens/QuestionList/saga';
export const runSagas = sagas => {
  if (Array.isArray(sagas)) {
    return sagas.map(saga => saga());
  } else return sagas();
};

export default function* rootSaga() {
  const allSagas = [
    ...runSagas(dashboardSaga),
    ...runSagas(getLoginSaga),
    ...runSagas(sendOtpSaga),
    ...runSagas(SubCategorySaga),
    ...runSagas(sendPlayRequestSaga),
    ...runSagas(GetQuestionsSaga),
  ];
  yield all(allSagas);
}
