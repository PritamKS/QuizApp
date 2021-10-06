import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  getQuestionsSuccess,
  getQuestionsError,
  sendQuestionSuccess,
  sendQuestionError,
} from './actions';
import {GET_QUESTIONS_DATA, SEND_QUESTION} from './constants';

export function* getQuestions(payload) {
  try {
    console.log(payload.questionParams);
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'getQuestionList',
      data: payload.questionParams,
    });
    if (status === 200) {
      return yield put(getQuestionsSuccess(status, data.response));
    }
    return yield put(getQuestionsError(error));
  } catch (error) {
    return yield put(getQuestionsError(error));
  }
}

export function* sendQuestion(payload) {
  try {
    console.log('sendQuestion', payload);
    console.log(payload.questionParams);
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'sendQuestion',
      data: JSON.stringify({
        player_id: payload.player_id,
        question_id: payload.question_id,
        token_id: payload.token_id,
      }),
    });
    if (status === 200) {
      return yield put(sendQuestionSuccess(status, data.response));
    }
    return yield put(sendQuestionError(error));
  } catch (error) {
    return yield put(sendQuestionError(error));
  }
}

export function* GetQuestionsSaga() {
  yield takeLatest(GET_QUESTIONS_DATA, getQuestions);
}

export function* SendQuestionsSaga() {
  yield takeLatest(SEND_QUESTION, sendQuestion);
}
export default [GetQuestionsSaga, SendQuestionsSaga];
