import {fromJS} from 'immutable';
import {
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_ERROR,
  RESET_SUBMITTED_ANSWER_STATUS,
} from './constant';

const initialState = fromJS({
  answerSubmitted: false,
  message: '',
  errorMessage: '',
});

const submitAnswerReducer = (state = initialState, {type, data, error}) => {
  switch (type) {
    case SUBMIT_ANSWER_SUCCESS:
      return state
        .set('answerSubmitted', data.status)
        .set('message', data.messagedetail);
    case SUBMIT_ANSWER_ERROR:
      return state.set('answerSubmitted', false).set('errorMessage', error);
    case RESET_SUBMITTED_ANSWER_STATUS:
      return state.set('answerSubmitted', false);
    default:
      return state;
  }
};

export default submitAnswerReducer;
