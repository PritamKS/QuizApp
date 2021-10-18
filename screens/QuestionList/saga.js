import {takeLatest, call, put} from 'redux-saga/effects';

import ApiService from '../../utils/service';
import {
  getQuestionsSuccess,
  getQuestionsError,
  sendQuestionSuccess,
  sendQuestionError,
  getAllocatedQuestionSuccess,
  getAllocatedQuestionError,
} from './actions';
import {
  GET_QUESTIONS_DATA,
  SEND_QUESTION,
  GET_ALLOCATED_QUESTION,
} from './constants';

export function* getQuestions(payload) {
  try {
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
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'sendQuestion',
      data: JSON.stringify({
        player_id: payload.playerId,
        question_id: payload.questionId,
        token_id: payload.tokenId,
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

export function* getAllocatedQuestion(payload) {
  try {
    const {
      response: {data, status, error},
    } = yield call(ApiService, {
      method: 'POST',
      apiUrl: 'allocatedQuestion',
      data: JSON.stringify({
        player_id: payload.playerId,
        token_id: payload.tokenId,
      }),
    });
    if (status === 200) {
      return yield put(getAllocatedQuestionSuccess(data));
    }
    return yield put(getAllocatedQuestionError(error));
  } catch (error) {
    return yield put(getAllocatedQuestionError(error));
  }
}

export function* GetQuestionsSaga() {
  yield takeLatest(GET_QUESTIONS_DATA, getQuestions);
}

export function* SendQuestionsSaga() {
  yield takeLatest(SEND_QUESTION, sendQuestion);
}

export function* getAllocatedQuestionSaga() {
  yield takeLatest(GET_ALLOCATED_QUESTION, getAllocatedQuestion);
}
export default [GetQuestionsSaga, SendQuestionsSaga, getAllocatedQuestionSaga];
