import {all} from 'redux-saga/effects';
import getQuestionListSaga from '../screens/Dashboard/saga';
import getLoginSaga from '../screens/Login/saga';
import sendOtpSaga from '../screens/OTPVerification/saga';
import getSubCategorySaga from '../screens/SubCategoriesScreen/saga';
export const runSagas = sagas => {
  if (Array.isArray(sagas)) {
    return sagas.map(saga => saga());
  } else return sagas();
};

export default function* rootSaga() {
  const allSagas = [
    ...runSagas(getQuestionListSaga),
    ...runSagas(getLoginSaga),
    ...runSagas(sendOtpSaga),
    ...runSagas(getSubCategorySaga),
  ];
  yield all(allSagas);
}
