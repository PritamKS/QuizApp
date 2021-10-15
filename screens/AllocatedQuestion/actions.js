import {
  SUBMIT_ANSWER,
  SUBMIT_ANSWER_ERROR,
  SUBMIT_ANSWER_SUCCESS,
} from './constant';

export function submitAnswerAction(id, tokenId, answerId) {
  return {
    type: SUBMIT_ANSWER,
    id,
    tokenId,
    answerId,
  };
}

export function sendSubmitAnswerSuccess(status) {
  return {
    type: SUBMIT_ANSWER_SUCCESS,
    status,
  };
}

export function sendSubmitAnswerError(error) {
  return {
    type: SUBMIT_ANSWER_ERROR,
    error,
  };
}
