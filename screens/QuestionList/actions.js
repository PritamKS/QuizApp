import {
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_DATA,
  CLEAR_QUESTIONS_DATA,
  SEND_QUESTION,
  SEND_QUESTIONS_SUCCESS,
  SEND_QUESTIONS_ERROR,
  GET_ALLOCATED_QUESTION,
  GET_ALLOCATED_QUESTIONS_SUCCESS,
  GET_ALLOCATED_QUESTIONS_ERROR,
  CLEAN_ALLOCATED_QUESTIONS,
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

export function sendQuestion(questionId, playerId, tokenId) {
  return {
    type: SEND_QUESTION,
    questionId,
    playerId,
    tokenId,
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

export function getAllocatedQuestion(playerId, tokenId) {
  return {
    type: GET_ALLOCATED_QUESTION,
    playerId,
    tokenId,
  };
}

export function getAllocatedQuestionSuccess(data) {
  return {
    type: GET_ALLOCATED_QUESTIONS_SUCCESS,
    data,
  };
}

export function getAllocatedQuestionError(error) {
  return {
    type: GET_ALLOCATED_QUESTIONS_ERROR,
    error,
  };
}

export function cleanAllocatedQuestion() {
  return {
    type: CLEAN_ALLOCATED_QUESTIONS,
  };
}
