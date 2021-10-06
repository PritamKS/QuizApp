import {
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_DATA,
  CLEAR_QUESTIONS_DATA,
  SEND_QUESTION,
  SEND_QUESTIONS_SUCCESS,
  SEND_QUESTIONS_ERROR,
} from './constants';

export function getQuestions(questionParams) {
  return {
    type: GET_QUESTIONS_DATA,
    questionParams,
  };
}

export function getQuestionsSuccess(success, data) {
  return {
    type: GET_QUESTIONS_SUCCESS,
    success,
    data,
  };
}

export function getQuestionsError(error) {
  return {
    type: GET_QUESTIONS_ERROR,
    error,
  };
}

export function clearQuestionsData() {
  return {
    type: CLEAR_QUESTIONS_DATA,
    quid,
  };
}

export function sendQuestion(player_id, question_id, token_id) {
  return {
    type: SEND_QUESTION,
    player_id,
    question_id,
    token_id,
  };
}

export function sendQuestionSuccess(success, data) {
  return {
    type: SEND_QUESTIONS_SUCCESS,
    success,
    data,
  };
}

export function sendQuestionError(error) {
  return {
    type: SEND_QUESTIONS_ERROR,
    error,
  };
}
