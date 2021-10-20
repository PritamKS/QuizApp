import {
  SUBMIT_ANSWER,
  SUBMIT_ANSWER_ERROR,
  SUBMIT_ANSWER_SUCCESS,
  RESET_SUBMITTED_ANSWER_STATUS,
} from './constant';

export function submitAnswerAction(id, tokenId, answerId, time) {
  return {
    type: SUBMIT_ANSWER,
    id,
    tokenId,
    answerId,
    time,
  };
}

export function sendSubmitAnswerSuccess(data) {
  return {
    type: SUBMIT_ANSWER_SUCCESS,
    data,
  };
}

export function sendSubmitAnswerError(error) {
  return {
    type: SUBMIT_ANSWER_ERROR,
    error,
  };
}

export function resetSubmittedAnswerStatus() {
  return {
    type: RESET_SUBMITTED_ANSWER_STATUS,
  };
}
