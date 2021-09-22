import { all } from 'redux-saga/effects';
import getQuestionListSaga from '../screens/Dashboard/saga';

export const runSagas = sagas => {
  if (Array.isArray(sagas)) {
    return sagas.map(saga => saga());
  }
  else return sagas();

};

export default function* rootSaga() {
  const allSagas = [
    ...runSagas(getQuestionListSaga),
  ];
  yield all(allSagas);
}