import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {sendSubmitAnswerSuccess, sendSubmitAnswerError} from './actions';
import {SUBMIT_ANSWER} from './constant';

export function* sendSubmitAnswer(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'submitAnswer',
      data: JSON.stringify({
        id: payload.id,
        token_id: payload.tokenId,
        answer_id: payload.answerId,
      }),
    });
    if (status === 200) {
      return yield put(sendSubmitAnswerSuccess(data.status));
    }
    return yield put(sendSubmitAnswerError(error));
  } catch (error) {
    return yield put(sendSubmitAnswerError(error));
  }
}

export function* submitAnswerSaga() {
  yield takeLatest(SUBMIT_ANSWER, sendSubmitAnswer);
}
export default submitAnswerSaga;
